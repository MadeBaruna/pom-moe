<script lang="ts">
	export let disabled = false;
</script>

<button {disabled} on:click class={$$restProps.class || ''}>
	<div class="background" />
	<slot />
</button>

<style lang="postcss">
	button {
		@apply relative z-[1] inline-flex items-center px-3 py-1 text-white;
	}

	button::before {
		content: '';
		@apply absolute inset-0 z-0 rounded-lg bg-space p-0.5 opacity-50;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

	.background {
		content: '';
		@apply absolute inset-0 z-0 rounded-lg bg-space p-0.5 opacity-0 duration-150;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

	button:hover .background {
		@apply bg-opacity-0 opacity-100;
	}

	button:disabled {
		@apply opacity-70 grayscale;
	}

	button:disabled:hover .background {
		@apply opacity-0;
	}
</style>
