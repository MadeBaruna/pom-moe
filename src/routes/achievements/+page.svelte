<script lang="ts">
	import Checkbox from '$components/Checkbox.svelte';
	import Input from '$components/Input.svelte';
	import Title from '$components/Title.svelte';
	import achievements from '$data/achievements';
	import type { AchievementChecklist } from '$types';
	import { db } from '$utils/db';
	import { debounce } from '$utils/debounce';
	import { t } from '$utils/translation';
	import { onMount } from 'svelte';

	let category = '1';
	let list = $achievements[category].achievements;
	let filtered = list;
	let filter = '';
	let total = 0;
	let jadeTotal = 0;
	let checkedTotal = 0;
	let checkedJadeTotal = 0;
	let categoryTotal: { [categoryId: string]: number } = {};

	const reward = [0, 5, 10, 20];
	const checked: { [id: number]: boolean } = {};

	function calculateTotal() {
		for (const [categoryId, ach] of Object.entries($achievements)) {
			categoryTotal[categoryId] = 0;
			for (const a of ach.achievements) {
				total++;
				jadeTotal += reward[a.rarity];
				if (checked[a.id]) {
					checkedJadeTotal += reward[a.rarity];
					categoryTotal[categoryId] += 1;
					checkedTotal += 1;
				}
			}
		}
	}

	function updateFiltered() {
		filtered = list.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
	}

	function changeCategory(id: string) {
		category = id;
		list = $achievements[category].achievements;
		updateFiltered();
	}

	async function getLocalData() {
		const data = await db.achievements.toArray();
		for (const item of data) {
			checked[item.id] = item.checked;
		}
	}

	function toggle(id: number, reward: number) {
		checked[id] = !checked[id];
		if (checked[id]) {
			categoryTotal[category] += 1;
			checkedTotal += 1;
			checkedJadeTotal += reward;
		} else {
			categoryTotal[category] -= 1;
			checkedTotal -= 1;
			checkedJadeTotal -= reward;
		}

		db.achievements.put({
			category,
			id,
			checked: checked[id]
		});
	}

	const search = debounce(() => {
		updateFiltered();
	}, 500);

	onMount(async () => {
		await getLocalData();
		calculateTotal();

		const unsub = achievements.subscribe(() => {
			changeCategory(category);
		});

		return () => unsub();
	});

	$: filter, search();
</script>

<svelte:head>
	<title>Pom.moe - Achievements</title>
</svelte:head>

<div class="flex items-center">
	<Title>{$t('common.achievement')}</Title>
	<div class="ml-4">
		<p
			class="mt-1 rounded-md border border-white/10 bg-purple-300/30 px-2 text-2xl font-medium text-white"
		>
			{checkedTotal} / {total}
		</p>
	</div>
	<div class="ml-4">
		<p
			class="mt-1 flex items-center rounded-md border border-white/10 bg-purple-300/30 px-2 text-2xl font-medium text-white"
		>
			{checkedJadeTotal} / {jadeTotal}
			<img src="/images/stellar_jade.png" alt="Stellar Jade" class="ml-2 h-6 w-6" />
		</p>
	</div>
</div>

<div class="flex h-full gap-2">
	<div class="sticky top-16 flex h-screen flex-col gap-2 overflow-y-auto px-1 pt-2">
		<Input placeholder="Search..." bind:value={filter} />
		{#each Object.entries($achievements) as [id, categories]}
			<button
				class="flex cursor-pointer items-center rounded-md bg-white/10 px-4 py-2 leading-tight hover:bg-white/20 {id ===
				category
					? 'bg-blue-300/20 ring-1 ring-purple-300 hover:bg-purple-300/20'
					: ''}"
				on:click={() => changeCategory(id)}
			>
				<img src="/images/achievements/{id}.png" alt="icon" class="mr-2 h-12 w-12" />
				<div class="text-left">
					<p class="text-white">{categories.name}</p>
					<p class="mt-1 inline-block rounded-md bg-white/50 px-2 text-black/80">
						{categoryTotal[id] ?? 0}/{categories.achievements.length}
					</p>
				</div>
			</button>
		{/each}
	</div>
	<div class="flex flex-1 flex-col gap-2 pt-2">
		{#each filtered as item}
			<div
				class="flex items-center rounded-md bg-white/10 px-4 py-2 leading-tight hover:bg-white/20"
			>
				<div>
					<p class="font-semibold text-white">
						{item.name}
						<span
							class="absolute ml-1 mt-0.5 rounded-md bg-4/30 px-2 text-xs font-normal text-white/80"
							>v{item.version}</span
						>
					</p>
					<p class="whitespace-pre-line text-white/80">{@html item.desc.replace(/\\n/, '<br/>')}</p>
				</div>
				<div class="flex-1" />
				<p class="mr-1 text-white/80">{reward[item.rarity]}</p>
				<img src="/images/stellar_jade.png" alt="stellar jade" class="mr-4 h-6 w-6" />
				<Checkbox
					on:change={() => toggle(item.id, reward[item.rarity])}
					checked={checked[item.id]}
				/>
			</div>
		{/each}
	</div>
</div>
