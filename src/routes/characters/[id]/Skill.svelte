<script lang="ts">
	import type { Skill } from '$types';
	import { formatValue } from '$utils/format';
	import Icon from '@iconify/svelte';
	import ChevronDown from '@iconify-icons/mdi/chevron-down';
	import { slide } from 'svelte/transition';

	export let skill: Skill;
	export let character: string;
	export let type: string;

	let showScaling = false;
	let showedValueOffset = 7;
	if (type === 'attack') showedValueOffset = 4;

	let len = Math.max(...skill.values.map((v) => v.length));
	let values: number[][] = [];
	let formats: string[] = [];
	for (let i = 0; i < skill.values.length; i++) {
		if (skill.values[i].length < len) continue;
		values.push(skill.values[i]);
		formats.push(skill.format[i]);
	}
</script>

<div
	class="flex flex-col items-center rounded-md bg-black bg-opacity-30 p-4 text-white ring-1 ring-white/5"
>
	<img src="/images/skills/{character}/{type}.png" alt="" class="mb-2 h-16 w-16" />
	<h2 class="text-xl font-bold">{skill.name}</h2>
	<p class="mb-2 text-gray-400">{type}</p>
	<p>
		{@html skill.desc
			.replace(/\\n/g, '<br>')
			.replace(
				/>{(\d)}/g,
				(_, match) =>
					` class="relative skill-value">{${match}}<span class="value-tooltip">${skill.values[
						match - 1
					]
						.map((e) => `<span>${formatValue(e, skill.format[match - 1])}</span>`)
						.join('')}</span>`
			)
			.replace(/{(\d)}/g, (_, match) => {
				const index = Number(match) - 1;
				return formatValue(
					skill.values[index][Math.max(skill.values[index].length - showedValueOffset, 0)],
					skill.format[index]
				);
			})}
	</p>
	<div class:flex-1={!showScaling} />
	{#if type !== 'technique'}
		<button
			class="mt-4 flex select-none items-center self-start text-gray-400"
			on:click={() => (showScaling = !showScaling)}
		>
			Show Level Scaling <Icon class="ml-1" icon={ChevronDown} height={24} />
		</button>
	{/if}
	{#if showScaling}
		<div class="mt-4 w-full rounded-md border border-gray-700" transition:slide>
			<table class="w-full">
				{#each { length: len } as _, i}
					<tr>
						<td class="w-0 whitespace-nowrap">LVL {i + 1}</td>
						{#each formats as format, j}
							<td class="text-right">{formatValue(values[j][i], format)}</td>
						{/each}
					</tr>
				{/each}
			</table>
		</div>
	{/if}
</div>

<style lang="postcss">
	td {
		@apply border-b border-l border-gray-700 px-2 py-1 first:border-l-0;
	}

	tr:last-child td {
		@apply border-b-0;
	}

	:global(.skill-value:hover > .value-tooltip) {
		@apply block columns-3 gap-0;
	}

	:global(.value-tooltip) {
		@apply absolute left-0 top-5 z-20 hidden -translate-x-1/2 rounded-md bg-dark/50 py-1 text-right ring-1 ring-white/5 backdrop-blur-xl;
	}

	:global(.value-tooltip > span) {
		@apply block px-2;
	}
</style>
