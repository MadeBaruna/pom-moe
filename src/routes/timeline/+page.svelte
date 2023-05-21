<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import timezone from 'dayjs/plugin/timezone';
	import Title from '$components/Title.svelte';
	import timeline from '$data/timeline';
	import Item from './Item.svelte';
	import Checkbox from '$components/Checkbox.svelte';
	import { getServer } from '$utils/time';

	dayjs.extend(duration);
	dayjs.extend(timezone);

	let centeredDiv: HTMLDivElement;
	let offset = 0;
	let pad = 0;

	const width = 30;
	const height = 36;
	const margin = 20;

	let now = dayjs();
	let today = dayjs().startOf('day');
	let start = today;
	let end = today;
	let dates: [number, string][] = [];
	let months: [string, number][] = [];

	let loading = true;

	let browserTimezone = '';
	let browserUtcOffset = 8;
	let utcOffset = 8;
	let server = 'Asia/China';
	let hourDiffFromAsia = 0;
	let hourDiffLocal = 0;

	function process() {
		const diffWithLocal = hourDiffFromAsia - hourDiffLocal;

		for (const events of timeline) {
			for (const event of events) {
				const _start = dayjs(event.start).add(
					event.timezoneDependent ? hourDiffLocal : diffWithLocal,
					'hour'
				);
				const _end = dayjs(event.end).add(diffWithLocal, 'hour');
				if (_start.isBefore(start)) start = _start;
				if (_end.isAfter(end)) end = _end;

				event.duration = _end.diff(_start, 'day', true);
			}
		}

		start = start.second(0).startOf('day').subtract(pad, 'days');
		end = end.startOf('day').add(pad, 'days');

		const dayTotal = Math.ceil(end.diff(start, 'day', true));
		const _months: { [key: string]: number } = {};
		dates = [...new Array(dayTotal)].map((_, i) => {
			const cur = start.add(i, 'day');

			const monthName = cur.format('MMMM');
			if (_months[monthName] === undefined) {
				_months[monthName] = 0;
			}
			_months[monthName]++;

			return [cur.date(), cur.format('dd')];
		});

		months = Object.entries(_months).map(([monthName, total]) => {
			return [monthName, total];
		});

		loading = false;
	}

	function transformScroll(event: WheelEvent) {
		if (!event.deltaY) {
			return;
		}

		const delta = Math.abs(event.deltaY);
		const dir = event.deltaY > 0 ? 1 : -1;
		(event.currentTarget as HTMLDivElement).scrollLeft += Math.max(delta, 100) * dir + event.deltaX;
		event.preventDefault();
	}

	onMount(() => {
		now = dayjs();
		browserTimezone = dayjs.tz.guess();
		browserUtcOffset = now.utcOffset() / 60;
		[utcOffset, server] = getServer();

		hourDiffFromAsia = 8 - utcOffset;
		hourDiffLocal = utcOffset - browserUtcOffset;

		offset = centeredDiv.offsetLeft;
		pad = Math.ceil(offset / width);
		process();

		const interval = setInterval(() => {
			now = dayjs();
		}, 1000);

		return () => clearInterval(interval);
	});

	$: totalHeight = (height + margin) * timeline.length + margin;
	$: nowOffset = now.diff(start, 'day', true) * width;
	$: hourDiffFromAsia = 8 - utcOffset;
	$: hourDiffLocal = utcOffset - browserUtcOffset;
</script>

<svelte:head>
	<title>Pom.moe - Timeline</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex w-full max-w-screen-xl items-center px-3">
		<div bind:this={centeredDiv} />
		<Title>Timeline</Title>
		<div class="flex-1" />
		<p class="leading-tight text-gray-400">{browserTimezone} - {server} Server</p>
	</div>
</div>
{#if !loading}
	<div class="overflow-x-auto" on:wheel={transformScroll}>
		<div class="relative pt-10" style="height: {totalHeight + 40}px">
			{#each dates as date, i}
				<div
					class="absolute w-[1px] select-none bg-white/20"
					style="margin-left: {width * i}px; height: {totalHeight}px"
				>
					<span class="absolute -left-2 -top-6 w-4 text-center text-gray-300">
						{date[0]}
					</span>
					<span class="absolute -left-2 -top-10 w-4 text-center text-sm text-gray-500">
						{date[1]}
					</span>
				</div>
			{/each}
			<div class="absolute top-0 flex select-none text-sm">
				{#each months as [month, length]}
					<div style="width: {length * width}px">
						<span
							class="sticky -ml-7 inline-block px-6 font-bold text-blue-300 backdrop-blur-xl"
							style="left: {offset - 20}px"
						>
							{month}
						</span>
					</div>
				{/each}
			</div>
			<div class="relative">
				{#each timeline as row, i}
					<div class="flex">
						{#each row as event, j}
							<Item
								prev={j > 0 ? row[j - 1] : null}
								next={j < row.length - 1 ? row[j + 1] : null}
								{now}
								{event}
								{width}
								{height}
								{margin}
								{start}
								{offset}
								{hourDiffFromAsia}
								{hourDiffLocal}
								row={i}
							/>
						{/each}
					</div>
				{/each}
			</div>
			<div class="absolute top-0 h-full w-[1px] bg-gray-200" style:left="{nowOffset}px">
				<span
					class="absolute -right-8 w-16 rounded-md bg-gray-200 text-center text-sm leading-tight"
				>
					{now.format('HH:mm:ss')}
				</span>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	::-webkit-scrollbar {
		height: 8px;
	}

	::-webkit-scrollbar-track {
		@apply bg-transparent;
		margin: 0 20px;
	}

	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.35);
		@apply rounded-xl;
	}
</style>
