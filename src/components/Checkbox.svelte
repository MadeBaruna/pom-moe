<script lang="ts">
	import Icon from '@iconify/svelte';
	import CheckBold from '@iconify-icons/mdi/check-bold';

	export let checked = false;
</script>

<div class="relative flex items-center justify-center">
	{#if checked}
		<Icon icon={CheckBold} class="pointer-events-none absolute text-white" width={24} />
	{/if}
	<input
		type="checkbox"
		bind:checked
		on:change
		class="h-6 w-6 appearance-none rounded-md ring-4 duration-150 hover:ring-blue-300/60 {checked
			? 'bg-blue-300/60 ring-blue-300/60'
			: 'ring-white/60'}"
	/>
</div>
