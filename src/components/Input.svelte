<script lang="ts">
	export let value: string = '';
	export let placeholder: string = '';
	export let type: 'text' | 'number' | 'password' | 'email' | 'tel' | 'date' = 'text';
	export let min = '';
	export let max = '';

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<input
	on:change
	on:input
	bind:value
	use:typeAction
	class="h-10 w-full rounded-md bg-transparent px-4 text-white outline-none ring-1 ring-purple-300/50
	 duration-150 focus:ring-purple-300 {type}"
	{placeholder}
	{min}
	{max}
/>

<style lang="postcss">
	input.date {
		position: relative;
	}

	input.date::-webkit-calendar-picker-indicator {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		padding: 0;
		color: transparent;
		background: transparent;
	}
</style>
