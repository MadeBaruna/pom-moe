<script lang="ts" context="module">
	declare function f<T extends boolean>(x: T): T extends false ? number : Set<number>;
</script>

<script lang="ts">
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import ChevronIcon from '@iconify-icons/mdi/chevron-down';
	import CheckIcon from '@iconify-icons/mdi/check';
	import Icon from '@iconify/svelte';
	import type { Option } from '$types';

	const dispatch = createEventDispatcher();

	let updating = false;
	afterUpdate(() => (updating = false));

	export let placeholder = '';
	export let options: Option<unknown>[] = [];
	export let selected: Option<unknown>[] | Option<unknown> | null = null;

	let multiple = Array.isArray(selected);

	let state = new Set<number>();
	if (selected !== null && !Array.isArray(selected)) {
		const currentVal = selected.value;
		state.add(options.findIndex((e) => e.value === currentVal));
	}

	let container: HTMLDivElement;
	let focused = false;
	let hoveredIndex = -1;
	let label = '';
	let icon: string | undefined = undefined;

	function setFocused(status: boolean) {
		focused = status;
	}

	function select(index: number) {
		updating = true;

		if (multiple) {
			if (state.has(index)) {
				state.delete(index);
			} else {
				state.add(index);
			}
			state = state;
			selected = options.filter((_, i) => state.has(i));

			return;
		}

		state.clear();
		state.add(index);
		state = state;

		selected = options[index];
		updateLabel();

		dispatch('change');

		focused = false;
	}

	function onHover(index: number) {
		hoveredIndex = index;
	}

	function updateLabel() {
		label = '';
		icon = '';

		if (multiple && state.size >= 2) {
			label = `${state.size} ${placeholder}`;
		} else if (state.size >= 1) {
			const curr = options[state.values().next().value];
			label = curr?.label;
			icon = curr?.image;
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		if (!focused) return;
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				hoveredIndex = hoveredIndex === options.length - 1 ? 0 : hoveredIndex + 1;
				break;
			case 'ArrowUp':
				event.preventDefault();
				hoveredIndex = hoveredIndex === 0 ? options.length - 1 : hoveredIndex - 1;
				break;
			case 'Enter':
				event.preventDefault();
				if (hoveredIndex >= 0 && hoveredIndex < options.length) select(hoveredIndex);
				break;
			case 'Escape':
				event.preventDefault();
				focused = false;
				hoveredIndex = -1;
				break;
		}
	}

	function onWindowClick(event: MouseEvent) {
		if (!container || container.contains(event.target as Node)) return;
		focused = false;
		hoveredIndex = -1;
	}

	function onSelectedChange() {
		if (updating) return;

		if (selected !== null && !Array.isArray(selected)) {
			const currentVal = selected.value;
			state.clear();
			state.add(options.findIndex((e) => e.value === currentVal));
		}

		updateLabel();
	}

	$: selected, onSelectedChange();
</script>

<svelte:window on:click={onWindowClick} on:keydown={onKeyDown} />
<div class="relative {$$restProps.class || ''}" bind:this={container}>
	<button
		class="flex h-10 w-full items-center justify-between rounded-md bg-transparent px-4 text-left text-white outline-none ring-1 ring-purple-300/50
duration-150 focus:ring-purple-300"
		on:click={(e) => setFocused(true)}
	>
		{#if label === ''}
			{placeholder}
		{:else}
			<span class="flex items-center">
				{#if icon}
					<img src={icon} class="mr-4 inline h-8 w-8" alt="" />
				{/if}
				<span class="whitespace-nowrap leading-none">
					{label}
				</span>
			</span>
		{/if}
		<Icon icon={ChevronIcon} class="ml-2" height={24} />
	</button>
	{#if focused}
		<div class="absolute z-50 w-full pt-2 text-white" on:mouseleave={() => onHover(-1)}>
			<div
				class="flex flex-col overflow-hidden rounded-md bg-white/5 p-2 ring-1 ring-white/20 backdrop-blur-md"
			>
				{#each options as option, index}
					<button
						on:click={() => select(index)}
						on:mouseenter={() => onHover(index)}
						class="flex h-10 select-none items-center whitespace-nowrap rounded-md bg-purple-300 px-2 text-left duration-150 {hoveredIndex ===
						index
							? 'bg-opacity-80 text-dark'
							: 'bg-opacity-0'}
							{multiple && state.has(index) ? 'selected' : ''}"
					>
						{#if option.image}
							<img src={option.image} class="mr-4 inline h-8 w-8" alt="" />
						{/if}
						<span class="label flex-1 leading-none">
							{option.label}
						</span>
						<span class="icon hidden">
							<Icon icon={CheckIcon} height={16} />
						</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.selected .icon {
		@apply block;
	}

	.selected .label {
		@apply font-semibold;
	}
</style>
