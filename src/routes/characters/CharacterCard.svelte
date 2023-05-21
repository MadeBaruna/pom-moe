<script lang="ts">
	import type { Character } from '$types';
	import { t } from '$utils/translation';
	import Icon from '@iconify/svelte';
	import XIcon from '@iconify-icons/mdi/multiply';

	export let character: Character;
	export let showTotal = false;
	export let total = 0;
</script>

<a
	href="/characters/{character.id}"
	class="rarity relative cursor-pointer {character.rarity === 5
		? 'rarity-5'
		: 'rarity-4'} {showTotal && total === 0 ? 'brightness-50' : ''}"
>
	<div class="background" />
	<img
		src={`/images/characters/${character.id}.png`}
		alt={character.name}
		class="relative h-auto w-28 md:w-32"
		width={374}
		height={512}
	/>
	<span
		class="absolute bottom-1 left-0 right-0 text-center text-lg font-semibold leading-none text-white"
		>{$t(`character.${character.id}`)}</span
	>
	{#if character.id !== 'trailblazer'}
		<img
			src="/images/elements/{character.element}.png"
			alt={character.element}
			class="absolute left-1 top-1 h-6 w-6"
		/>
		<img
			src="/images/paths/{character.path}.png"
			alt={character.path}
			class="absolute left-1 top-9 h-6 w-6 rounded-full bg-black/20"
		/>
	{/if}
	{#if total > 0}
		<span class="absolute right-1 top-1 font-medium text-white/80"
			><Icon class="mb-0.5 inline" icon={XIcon} />{total}</span
		>
	{/if}
</a>

<style lang="postcss">
	.background {
		content: '';
		@apply absolute bottom-0 left-0 right-0 top-0 duration-150;
	}

	.rarity:hover > .background {
		opacity: 50%;
	}

	.rarity-5 > .background {
		background: linear-gradient(
			to top,
			transparent 0%,
			theme(colors.5) 30%,
			theme(colors.5) 40%,
			transparent 80%
		);
		opacity: 30%;
	}

	.rarity-4 > .background {
		background: linear-gradient(
			to top,
			transparent 0%,
			theme(colors.4) 30%,
			theme(colors.4) 40%,
			transparent 80%
		);
		opacity: 30%;
	}
</style>
