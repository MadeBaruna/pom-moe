<script lang="ts">
	import type { Option, WarpItem } from '$types';
	import { onMount } from 'svelte';
	import BackIcon from '@iconify-icons/mdi/arrow-left';
	import StarIcon from '@iconify-icons/mdi/star';
	import StarOutlineIcon from '@iconify-icons/mdi/star-outline';
	import StarOffIcon from '@iconify-icons/mdi/star-off-outline';
	import Icon, { type IconifyIcon } from '@iconify/svelte';
	import { db } from '$utils/db.js';
	import { t } from '$utils/translation';
	import Title from '$components/Title.svelte';
	import '$data/characters';
	import '$data/lightcones';
	import Select from '$components/Select.svelte';
	import { maxPities } from '$data/banners.js';

	export let data;

	const banners = data.banners;
	const banner = data.banner;

	const maxPity = maxPities[banner.type];

	let loading = true;
	let rows: (WarpItem & { roll?: number; group?: boolean })[] = [];
	let filtered = rows;
	let showGroupBar = true;

	const starIcons: { [key: number]: IconifyIcon } = {
		0: StarOffIcon,
		1: StarIcon,
		2: StarOutlineIcon
	};

	const rarities: Option<number>[] = [
		{ value: 5, label: '5', image: '/images/rarity5.png' },
		{ value: 4, label: '4', image: '/images/rarity4.png' },
		{ value: 3, label: '3', image: '/images/rarity3.png' }
	];
	let selectedRarities: typeof rarities = [];

	const types: Option<string>[] = [
		{ value: 'character', label: $t('common.character') },
		{ value: 'lightcone', label: $t('common.lightcone') }
	];
	let selectedTypes: typeof types = [];

	function process() {
		if (rows.length === 0) {
			loading = false;
			return;
		}

		let cur = rows[0].bannerCode ?? 0;
		let roll = 0;
		let skip = 0;

		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			const next = rows[i + 1];

			if (row.bannerCode !== cur) {
				roll = 0;
				cur = row.bannerCode;
			}
			roll++;
			row.roll = roll;

			if (row.time === next?.time && skip === 0) {
				skip = 9;
				row.group = true;
			} else if (skip > 0) {
				skip--;
			}
		}

		rows = rows.reverse();
		filtered = rows;
		loading = false;
	}

	function filter() {
		const _rarities = new Set(selectedRarities.map((r) => r.value));
		const _types = new Set(selectedTypes.map((r) => r.value));

		const skipRarity = _rarities.size === 0;
		const skipTypes = _types.size === 0;

		showGroupBar = false;
		if (skipRarity && skipTypes) showGroupBar = true;

		filtered = rows.filter((row) => {
			const r = skipRarity || _rarities.has(row.rarity);
			const t = skipTypes || _types.has(row.type);
			return r && t;
		});
	}

	function color(pity: number, rarity: number) {
		if (rarity === 3) return '#aaa';
		if (rarity === 4) return `rgba(255, 255, 255, ${(10 - pity) / 10 + 0.4})`;
		return `hsla(${((maxPity - pity) / maxPity) * 100}, 100%, 50%, 0.9)`;
	}

	onMount(async () => {
		rows = await db[banner.type].toArray();
		process();
	});

	$: showGuarantee = banner.type === 'character' || banner.type === 'lightcone';
	$: selectedRarities, filter();
	$: selectedTypes, filter();
</script>

<div class="flex items-center">
	<a href="/warp"><Icon icon={BackIcon} class="mr-2 text-white" height={24} /></a>
	<Title size="text-xl">
		{banner.type === 'standard' || banner.type === 'beginner'
			? banner.name
			: $t(`banner.${banner.type}`)}
	</Title>
</div>

{#if loading}
	<p class="text-white/80">Loading warp history...</p>
{:else if filtered.length === 0}
	<div
		class="mt-4 flex w-full max-w-xl items-center rounded-md border-2 border-dashed border-purple-300/50 bg-purple-300/5 px-8 py-4 text-white"
	>
		<img src="/images/quest.png" alt="" class="mr-2 inline h-8 w-8" />
		<p class="leading-none">This banner history is empty</p>
	</div>
	<p class="pl-8 text-lg text-white/80" />
{:else}
	<div class="mb-8 flex gap-4 pl-8">
		<Select options={rarities} bind:selected={selectedRarities} class="w-32" placeholder="Rarity" />
		<Select options={types} bind:selected={selectedTypes} class="w-40" placeholder="Type" />
	</div>
	<table class="ml-6">
		<tr class="sticky top-16 bg-dark/80 backdrop-blur-md">
			<th />
			<th class="pl-3 pr-5 text-left">Time</th>
			<th class="pr-5 text-center">Pity</th>
			<th class="pr-5 text-left" colspan="2">Name</th>
			<th class="pr-5 text-center">Rarity</th>
			<th class="text-left">Type</th>
			<th class="pr-5 text-center">#Roll</th>
			<th class="pr-5 text-center" />
		</tr>
		{#each filtered as row (row.id)}
			<tr class="rarity-{row.rarity}">
				<td class="relative">
					{#if showGroupBar && row.group}
						<div class="group select-none"><span>x10</span></div>
					{/if}
				</td>
				<td class="pl-3 pr-5 font-monospace text-white">
					{row.time}
				</td>
				<td class="pr-5 text-center" style="color: {color(row.pity, row.rarity)}">
					{row.pity}
					{#if row.rarity > 3 && showGuarantee}
						<Icon class="ml-1 inline" icon={starIcons[row.guaranteed]} />
					{/if}
				</td>
				<td class="pr-3 text-white">
					<img
						class="h-8 w-8"
						src="/images/{row.type === 'character'
							? 'characters-mini'
							: 'lightcones'}/{row.name}.png"
						alt=""
					/>
				</td>
				<td class="pr-5 text-white">{$t(`${row.type}.${row.name}`)}</td>
				<td class="pr-5 text-center text-white">{row.rarity}</td>
				<td class="pr-5 text-white">{$t(`common.${row.type}`)}</td>
				<td class="pr-5 text-center text-white">{row.roll}</td>
				<td class="text-white">
					<img
						class="h-8 w-auto"
						src="/images/banner-ticket/{banners[row.bannerCode].name} {row.bannerCode}.png"
						alt=""
					/>
				</td>
			</tr>
		{/each}
	</table>
{/if}

<style lang="postcss">
	th {
		@apply py-1 font-medium text-purple-200;
	}

	td {
		@apply border-t border-gray-700 py-0.5 leading-none;
	}

	.rarity-5 {
		@apply bg-gradient-to-r from-transparent via-5/40 via-40% to-transparent;
	}

	.rarity-4 {
		@apply bg-gradient-to-r from-transparent via-4/40 via-40% to-transparent;
	}

	.group {
		@apply absolute bottom-4 left-0 h-[335px] w-[1px] bg-white;
	}

	.group > span {
		@apply absolute right-1 top-[160px] -rotate-90 font-monospace text-xs text-white;
	}

	.group::after {
		content: '';
		@apply absolute bottom-0 left-0 h-[1px] w-2 bg-white;
	}

	.group::before {
		content: '';
		@apply absolute left-0 top-0 h-[1px] w-2 bg-white;
	}
</style>
