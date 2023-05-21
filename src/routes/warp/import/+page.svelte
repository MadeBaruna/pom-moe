<script lang="ts">
	import Title from '$components/Title.svelte';
	import type { BannerType, GachaItem, GachaResponse } from '$types';
	import { post } from '$utils/api';
	import { t } from '$utils/translation';
	import Icon from '@iconify/svelte';
	import ErrorIcon from '@iconify-icons/material-symbols/error-outline-rounded';
	import MultiplyIcon from '@iconify-icons/mdi/multiply';
	import CheckIcon from '@iconify-icons/mdi/check';
	import SaveIcon from '@iconify-icons/mdi/content-save';
	import LoadingIcon from '@iconify-icons/line-md/loading-twotone-loop';
	import BackIcon from '@iconify-icons/mdi/arrow-left';
	import PC1 from './PC1.svelte';
	import PC2 from './PC2.svelte';
	import Button from '$components/Button.svelte';
	import { processBannerData } from '$utils/warp';
	import { db } from '$utils/db';
	import { goto } from '$app/navigation';

	const methods = ['pc1', 'pc2'];
	let currentMethod = 'pc1';
	let loading = false;
	let finished = false;
	let saving = false;
	let error = '';
	let timezone = 8;
	let uid = '';
	let banners = new Map<BannerType, GachaItem[]>();
	let tempCount: { [key: string]: number } = {};
	let currentBanner = 'standard';
	let currentPage = 0;

	let hasNewWarp = false;

	const bannerType: { [key in BannerType]: number } = {
		character: 11,
		lightcone: 12,
		standard: 1,
		beginner: 2
	};

	function changeMethod(method: string) {
		if (method === currentMethod) return;
		currentMethod = method;
	}

	async function process(url: URL) {
		error = '';
		loading = true;
		getBanners(url);
	}

	export async function getBanners(url: URL) {
		banners.clear();

		for (const [banner, id] of Object.entries(bannerType) as [BannerType, number][]) {
			currentBanner = banner;

			const { error: err, warps } = await getWarps(banner, id, url);
			if (err !== null) {
				loading = false;
				error = `${err.message} [code: ${err.code}]`;
				return;
			}

			banners.set(banner, warps.reverse());
		}

		finished = true;
	}

	export async function getWarps(bannerName: BannerType, bannerId: number, url: URL) {
		const size = 20;
		let page = 1;
		let endId = '0';

		const warps = [];

		let lastLen = 0;

		const latestSaved = await db[bannerName].orderBy('id').last();
		const lastWarpId = latestSaved?.id ?? '0';

		do {
			url.searchParams.set('lang', 'en');
			url.searchParams.set('gacha_type', bannerId.toString());
			url.searchParams.set('page', page.toString());
			url.searchParams.set('size', size.toString());
			url.searchParams.set('end_id', endId);

			currentPage = page;

			const { data, error } = await post<GachaResponse, { url: string }>('/warp', {
				url: url.toString()
			});
			if (error) {
				return { error, data: null };
			}

			if (data.retcode !== 0) {
				return { error: { message: data.message, code: data.retcode }, data: null };
			}

			timezone = data.data.region_time_zone;

			const warpItems = data.data.list.filter((item) => item.id > lastWarpId);
			warps.push(...warpItems);
			tempCount[bannerName] = warps.length;
			hasNewWarp = warpItems.length > 0 || hasNewWarp;
			lastLen = warpItems.length;

			if (lastLen > 0) {
				endId = data.data.list[data.data.list.length - 1].id;
				uid = data.data.list[0].uid;
			}

			page++;
		} while (lastLen === size);

		return {
			error: null,
			warps
		};
	}

	async function save() {
		saving = true;

		db.timezone.set(timezone);
		db.uid.set(uid);

		await processBannerData(banners);
		goto('/warp');
	}

	$: counter = Object.entries(tempCount).filter(([, count]) => count > 0);
</script>

<svelte:head>
	<title>Pom.moe - Import Warp History</title>
</svelte:head>

<Title>
	{$t('warp.import.title')}
</Title>

{#if error !== ''}
	<div
		class="mb-4 flex w-full max-w-xl rounded-md border-2 border-dashed border-red-300/50 bg-red-300/5 px-8 py-4 text-white"
	>
		<p class="leading-none">
			<Icon icon={ErrorIcon} class="mr-4 inline" height={32} />
			{error}
		</p>
	</div>
{/if}
{#if !loading}
	<div class="mb-4 flex gap-2">
		{#each methods as method}
			<button
				on:click={() => changeMethod(method)}
				class="rounded-lg border-2 px-2 text-lg duration-150 hover:bg-purple-300/80 hover:text-black {method ===
				currentMethod
					? 'border-white/10 bg-purple-300'
					: 'border-purple-300/70 bg-transparent text-white'}"
				>{$t(`warp.import.method.${method}`)}</button
			>
		{/each}
	</div>
	{#if currentMethod === 'pc1'}
		<PC1 on:url={(ev) => process(ev.detail)} />
	{:else if currentMethod === 'pc2'}
		<PC2 on:url={(ev) => process(ev.detail)} />
	{/if}
{:else}
	<div class="loading">
		<div class="flex items-center text-white">
			<Icon icon={finished ? CheckIcon : LoadingIcon} class="mr-4 inline" height={32} />
			{#if finished && !hasNewWarp}
				<div>
					<p class="text-white">
						<span>All done!</span><br />There is no new warp history to import. Please wait for
						about 1 hour and try again!
					</p>
				</div>
			{:else if finished}
				<div>
					<p class="text-white">
						<span>All done!</span><br />If you already have data saved before, the history will be
						appended to your existing data.
					</p>
				</div>
			{:else}
				<div>
					<p class="text-white">
						Getting your warps history...
						{#if uid !== ''}
							UID {uid}
						{/if}
					</p>
					<p>
						Processing <span>{$t(`banner.${currentBanner}`)}</span> - page
						<span>{currentPage}</span>
					</p>
				</div>
			{/if}
		</div>
		<table class="space ml-12 mt-3 border-separate border-spacing-y-[2px]">
			{#each counter as [banner, count]}
				<tr class="group">
					<td
						class="rounded-bl-sm rounded-tl-sm bg-blue-300/20 px-4 py-2 text-white group-first:rounded-tl-lg group-last:rounded-bl-lg"
						>{$t(`banner.${banner}`)}</td
					>
					<td
						class="rounded-br-sm rounded-tr-sm bg-blue-300/20 px-4 py-2 text-white group-first:rounded-tr-lg group-last:rounded-br-lg"
					>
						<Icon class="inline" icon={MultiplyIcon} />
						{count}
					</td>
				</tr>
			{/each}
		</table>
	</div>
	<div class="ml-12 mt-4">
		{#if finished && !hasNewWarp}
			<Button
				on:click={() => {
					goto('/warp');
				}}
			>
				<Icon icon={BackIcon} class="mr-2 inline" height={24} />
				<span class="text-xl">Back</span>
			</Button>
		{:else if finished}
			<Button on:click={save}>
				<Icon icon={SaveIcon} class="mr-2 inline" height={24} />
				<span class="text-xl">{saving ? 'Saving...' : 'Save'}</span>
			</Button>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.loading span {
		@apply font-medium text-purple-300;
	}
</style>
