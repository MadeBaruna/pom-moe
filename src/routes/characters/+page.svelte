<script lang="ts">
	import CharacterCard from './CharacterCard.svelte';
	import Title from '$components/Title.svelte';
	import characters from '$data/characters';
	import elements from '$data/elements';
	import paths from '$data/paths';
	import { t } from '$utils/translation';
	import { onMount } from 'svelte';
	import { db } from '$utils/db';

	let list = $characters;
	let filter: { elements: { [key: string]: boolean }; paths: { [key: string]: boolean } } = {
		elements: {
			...$elements.reduce<{ [key: string]: boolean }>((prev, cur) => {
				prev[cur.id] = true;
				return prev;
			}, {})
		},
		paths: {
			...$paths.reduce<{ [key: string]: boolean }>((prev, cur) => {
				prev[cur.id] = true;
				return prev;
			}, {})
		}
	};

	let showTotal = false;
	let total: Record<string, number> = {
		trailblazer: 7,
		'dan-heng': 1,
		'march-7th': 1,
		serval: 1,
		natasha: 1,
		asta: 1,
		herta: 1,
		qingue: 1
	};

	function filterList() {
		list = $characters.filter(
			(c) => (filter.elements[c.element] && filter.paths[c.path]) || c.id === 'trailblazer'
		);
	}

	function toggleFilter(type: 'elements' | 'paths', id: string) {
		const current = Object.values(filter[type]);
		const trueCount = current.filter((e) => e).length;

		filter[type][id] = !filter[type][id];

		if (trueCount === current.length) {
			for (const key in filter[type]) {
				filter[type][key] = false || key === id;
			}
		} else if (trueCount === 1 && !filter[type][id]) {
			for (const key in filter[type]) {
				filter[type][key] = true;
			}
		}

		filterList();
	}

	async function getCount() {
		const count = await db.items.toArray();
		showTotal = count.length > 0;
		for (const item of count) {
			total[item.name] = total[item.name] ?? 0;
			total[item.name] += item.count;
		}
	}

	onMount(() => {
		const unsub = characters.subscribe(() => {
			filterList();
		});
		getCount();

		return () => unsub();
	});
</script>

<svelte:head>
	<title>Pom.moe - Characters</title>
</svelte:head>

<Title>{$t('common.character')}</Title>
<div class="mb-4 flex flex-col gap-8 md:flex-row">
	<div class="flex justify-center gap-2 md:justify-normal">
		{#each $elements as element}
			<button
				class="duration-150 hover:opacity-80 {filter.elements[element.id] ? '' : 'opacity-30'}"
				on:click={() => toggleFilter('elements', element.id)}
			>
				<img
					class="inline-block h-8 w-8"
					width={32}
					height={32}
					src="/images/elements/{element.id}.png"
					alt={element.name}
				/>
			</button>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-normal">
		{#each $paths as path}
			<button
				class="duration-150 hover:opacity-80 {filter.paths[path.id] ? '' : 'opacity-30'}"
				on:click={() => toggleFilter('paths', path.id)}
			>
				<img
					class="inline-block h-8 w-8"
					width={32}
					height={32}
					src="/images/paths/{path.id}.png"
					alt={path.name}
				/>
				<span class="inline-block pl-0.5 text-sm leading-none text-white/80">{path.name}</span>
			</button>
		{/each}
	</div>
</div>
<div class="flex flex-wrap justify-center gap-2 md:justify-normal md:gap-3">
	{#each list as character (character.id)}
		<CharacterCard {character} {showTotal} total={total[character.id] ?? 0} />
	{/each}
</div>
