<script lang="ts">
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import InfoIcon from '@iconify-icons/mdi/information-circle-outline';
	import CircleIcon from '@iconify-icons/mdi/circle';
	import MenuIcon from '@iconify-icons/tabler/menu-2';
	import { t } from '$utils/translation';
	import { db } from '$utils/db';
	import type { Banner, BannerType, BannerSummary, WarpItem } from '$types';
	import '$data/characters';
	import '$data/lightcones';
	import '$data/banners';
	import { banners, maxPities } from '$data/banners';

	export let banner: Banner;

	let now = dayjs();
	let currentBanner = banner;
	if (banner.type !== 'standard' && banner.type !== 'beginner') {
		for (const b of banners[banner.type]) {
			if (now.isAfter(b.start) && now.isBefore(b.end)) {
				currentBanner = b;
				break;
			}
		}
	}

	const maxPity = maxPities[banner.type];

	let summary: BannerSummary | undefined;
	let items5: WarpItem[] = [];
	let items4: WarpItem[] = [];

	let percentage = {
		4: 0,
		5: 0
	};

	let avgPity = {
		4: 0,
		5: 0
	};

	function color(pity: number) {
		return `hsla(${((maxPity - pity) / maxPity) * 100}, 100%, 50%, 0.9)`;
	}

	onMount(async () => {
		summary = await db.bannerSummary.get(banner.type);
		items5 = await db[banner.type].where('rarity').equals(5).toArray();
		items4 = await db[banner.type].where('rarity').equals(4).toArray();

		if (summary === undefined) return;

		percentage = {
			4: (items4.length / summary.total.all) * 100,
			5: (items5.length / summary.total.all) * 100
		};

		avgPity = {
			4: items4.length > 0 ? items4.reduce((acc, i) => acc + i.pity, 0) / items4.length : 0,
			5: items5.length > 0 ? items5.reduce((acc, i) => acc + i.pity, 0) / items5.length : 0
		};
	});
</script>

<div
	class="flex h-auto flex-col overflow-hidden rounded-md bg-black bg-opacity-30 ring-1 ring-white/5 md:h-72 md:flex-row"
>
	<div class="relative h-64 overflow-hidden rounded-b-md md:h-full md:flex-1 md:rounded-r-md">
		<img
			class="image border-right absolute z-0 h-full w-auto select-none object-cover"
			style="object-position: {currentBanner.pos}; transform: scale({currentBanner.zoom});"
			src="/images/banners/{currentBanner.image}"
			alt=""
		/>
		<div class="relative flex h-full flex-col justify-between p-2">
			{#if banner.type === 'standard' || banner.type === 'beginner'}
				<p class="cursor-pointer px-2 text-xl font-semibold text-white">
					<Icon icon={InfoIcon} class="font-base mb-1 mr-1 inline" height={16} />
					{banner.name}
				</p>
			{:else}
				<div class="cursor-pointer">
					<p class="px-2 text-xl font-semibold text-white">
						<Icon icon={InfoIcon} class="font-base mb-1 mr-1 inline" height={16} />
						{$t(`banner.${banner.type}`)}
					</p>
					<p class="px-2 text-sm leading-none text-white/80">
						Current: {$t(`banner.${currentBanner.code}`)}
					</p>
				</div>
			{/if}
			<div class="flex flex-col gap-2">
				<div class="flex gap-2">
					<div
						class="flex flex-1 items-center justify-between rounded-md bg-dark/50 px-3 ring-1 ring-white/5 backdrop-blur-md"
					>
						<div class="flex items-center">
							<img
								class="mr-2 inline-block h-6 w-6"
								src="/images/{banner.type === 'standard' || banner.type === 'beginner'
									? 'pass.png'
									: 'special_pass.png'}"
								alt="pass"
							/>
							<p class="text-center text-2xl font-bold text-white/90">{summary?.total.all ?? 0}</p>
						</div>

						<p class="text-center text-lg font-medium">
							<span class="text-5">{summary?.total[5] ?? 0}</span>
							<Icon icon={CircleIcon} class="mx-1 inline text-white/50" width={8} />
							<span class="text-4">{summary?.total[4] ?? 0}</span>
						</p>
					</div>
					<a
						href="/warp/{banner.type}"
						class="group flex items-center justify-center rounded-md bg-dark/50 px-3 py-1 font-bold text-white/90 ring-1 ring-white/5 backdrop-blur-md"
					>
						<Icon
							icon={MenuIcon}
							height={24}
							class="opacity-70 duration-150 group-hover:opacity-100"
						/>
					</a>
				</div>
				<div class="flex items-end gap-2">
					<div
						class="flex items-center rounded-md bg-dark/50 px-3 ring-1 ring-white/5 backdrop-blur-md"
					>
						<img class="mr-3 h-6 w-6" src="/images/rarity4.png" alt="Star" />
						<p class="flex-1 px-2 py-1 text-right text-4xl font-bold text-4">
							{summary?.pity[4] ?? 0}<span class="text-base">/10</span>
						</p>
					</div>
					<div
						class="flex flex-1 items-center rounded-md bg-dark/50 px-3 ring-1 ring-white/5 backdrop-blur-md"
					>
						<img class="mr-3 h-6 w-6" src="/images/rarity5.png" alt="Star" />
						<p class="flex-1 px-2 py-1 text-right text-4xl font-bold text-5">
							{summary?.pity[5] ?? 0}<span class="text-base">/{maxPity}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="overflow-y-auto pb-4 md:flex-1">
		{#if summary}
			<div class="px-4 pt-4">
				<table class="w-full opacity-90">
					<tr>
						<td class="pr-2 font-medium text-gray-400">RATE</td>
						<td class="pr-2 text-right text-5">
							{percentage[5].toFixed(2)} %
						</td>
						<td class="text-right text-4">
							{percentage[4].toFixed(2)} %
						</td>
					</tr>
					<tr>
						<td class="pr-2 font-medium text-gray-400">AVG PITY</td>
						<td class="pr-2 text-right text-5">
							{avgPity[5].toFixed(1)}
						</td>
						<td class="text-right text-4">
							{avgPity[4].toFixed(1)}
						</td>
					</tr>
				</table>
				{#if items5.length > 0}
					<div class="mt-2 h-[1px] bg-white/5" />
				{/if}
			</div>
			<div class="flex flex-wrap gap-x-3 gap-y-1.5 pl-6 pr-4 pt-3">
				{#each items5 as item}
					<div
						class="inline-flex items-center rounded-md pr-2 text-white/90 {item.guaranteed === 1
							? 'bg-5/20'
							: 'bg-gray-800'}"
					>
						<img
							src="/images/{item.type === 'character'
								? 'characters-mini'
								: 'lightcones'}/{item.name}.png"
							alt=""
							class="-ml-2 mr-2 inline h-7 w-7"
						/>
						<span class="text-base">{$t(`${item.type}.${item.name}`)}</span>
						<span class="ml-2 inline-block text-base font-medium" style="color: {color(item.pity)}"
							>{item.pity}</span
						>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.image {
		mask-image: linear-gradient(110deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
	}
</style>
