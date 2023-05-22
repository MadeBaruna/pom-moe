<script lang="ts">
	import type { KeyValueObject, Lightcone } from '$types';
	import { t } from '$utils/translation';
	import Icon from '@iconify/svelte';
	import XIcon from '@iconify-icons/mdi/multiply';

	export let lightcone: Lightcone;
	export let showTotal = false;
	export let total = 0;

	const bgColors: KeyValueObject = {
		3: 'rarity-3',
		4: 'rarity-4',
		5: 'rarity-5'
	};
</script>

<button class="rarity relative cursor-pointer pb-6 {bgColors[lightcone.rarity]}">
	<div class="background" />
	<img
		src={`/images/lightcones/${lightcone.id}.png`}
		alt={lightcone.name}
		class="relative h-auto w-28 md:w-32 {showTotal && total === 0 ? 'brightness-50' : ''}"
		width={128}
		height={128}
	/>
	<span
		class="absolute bottom-1 left-0 right-0 px-1 text-center text-sm font-semibold leading-none text-white"
		>{$t(`lightcone.${lightcone.id}`)}</span
	>
	<img
		src="/images/paths/{lightcone.path}.png"
		alt={lightcone.path}
		class="absolute left-1 top-1 h-8 w-8 rounded-full bg-black/20"
	/>
	{#if total > 0}
		<span class="absolute right-1 top-1 font-medium leading-none text-white/80"
			><Icon class="mb-0.5 inline" icon={XIcon} />{total}</span
		>
	{/if}
</button>

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

	.rarity-3 > .background {
		background: linear-gradient(
			to top,
			transparent 0%,
			theme(colors.3) 30%,
			theme(colors.3) 40%,
			transparent 80%
		);
		opacity: 30%;
	}
</style>
