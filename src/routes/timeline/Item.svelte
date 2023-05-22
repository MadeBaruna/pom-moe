<script lang="ts">
	import type { Timeline } from '$types';
	import { open } from '$utils/modal';
	import type { Dayjs } from 'dayjs';
	import dayjs from 'dayjs';
	import Detail from './Detail.svelte';

	export let event: Timeline;
	export let next: Timeline | null = null;
	export let prev: Timeline | null = null;
	export let width: number;
	export let margin: number;
	export let height: number;
	export let offset: number;
	export let row: number;
	export let hourDiffFromAsia: number = 0;
	export let hourDiffLocal: number = 0;
	export let start: Dayjs;
	export let now: Dayjs;

	const diffWithLocal = hourDiffFromAsia - hourDiffLocal;

	const _width = width * (event.duration ?? 0);
	const _start = dayjs(event.start).add(
		event.timezoneDependent ? hourDiffLocal : diffWithLocal,
		'hour'
	);
	const _end = dayjs(event.end).add(diffWithLocal, 'hour');
	const _offset = _start.diff(start, 'day', true) * width;
	const _top = row * (height + margin);

	const nextDiff = next !== null ? dayjs(next.start).diff(_end, 'hour') : Number.MAX_VALUE;
	const nextNearby = nextDiff < 48;
	const prevDiff = prev !== null ? _start.diff(prev.end, 'hour') : Number.MAX_VALUE;
	const prevNearby = prevDiff < 48;

	let duration = '';
	function updateDuration() {
		const diff = started ? _end.diff(now) : _start.diff(now);
		const dur = dayjs.duration(diff);

		if (diff < 86400000) {
			duration = dur.format('HH:mm:ss');
		} else {
			duration = `${Math.trunc(dur.asDays())}d ${dur.hours()}h`;
		}
	}

	function openDetail() {
		open(Detail, { event, start: _start, end: _end });
	}

	$: started = now.isAfter(_start);
	$: now, updateDuration();
	$: afterNow = now.isBefore(_end);
</script>

<div
	class="absolute cursor-pointer"
	style:min-width="{_width}px"
	style:margin-top="{margin}px"
	style:margin-left="{_offset}px"
	style:height="{height}px"
	style:top="{_top}px"
	on:click={openDetail}
	on:keydown
>
	<div
		class="absolute bottom-0 top-0 flex w-full items-center overflow-hidden pl-4 text-base font-medium"
		class:rounded-r-md={!nextNearby}
		class:rounded-l-md={!prevNearby}
		class:separator={prevNearby}
		style:background-color="{event.color}dd"
	>
		<div class="flex-1" />
		<div class="image dragg select-none overflow-clip">
			<img
				draggable="false"
				src="/images/events/{event.image}"
				alt={event.name}
				style="--zoom: {event.zoom}; --pos: {event.pos};"
			/>
		</div>
	</div>
	<div class="sticky inline-flex h-full items-center" style="left: {offset}px;">
		<span
			class="name left-0 pl-4 pr-4 font-medium text-black/90 md:pl-10"
			style:--color="{event.color}dd"
		>
			{event.name}
		</span>
	</div>
	{#if afterNow && (started || !prevNearby)}
		<div
			class="absolute bottom-0 top-0 z-20 flex items-center {started
				? 'right-0'
				: 'left-0'} {nextNearby
				? 'translate-x-1/2'
				: started
				? 'translate-x-[120%]'
				: '-translate-x-[120%]'}"
		>
			<div
				class="rounded-md bg-white/70 px-1 text-sm font-medium leading-tight text-black backdrop-blur-md"
			>
				{duration}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.image {
		@apply relative h-full w-full max-w-[300px];
		mask-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0) 30%,
			rgba(0, 0, 0, 1) 60%,
			rgba(0, 0, 0, 1)
		);
	}

	img {
		@apply absolute block;
		transform: scale(var(--zoom)) translate(var(--pos));
	}

	.separator {
		box-shadow: inset 1px 0 black;
	}

	.name {
		text-shadow: var(--color) -1px -1px 4px, var(--color) 1px -1px 4px, var(--color) -1px 1px 4px,
			var(--color) 1px 1px 4px, var(--color) 0 0 10px;
	}
</style>
