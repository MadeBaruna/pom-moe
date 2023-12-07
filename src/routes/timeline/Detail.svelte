<script lang="ts">
	import type { Timeline } from '$types';
	import dayjs from 'dayjs';
	import localized from 'dayjs/plugin/localizedFormat';
	import { onMount } from 'svelte';

	dayjs.extend(localized);

	export let event: Timeline;
	export let start: dayjs.Dayjs;
	export let end: dayjs.Dayjs;

	let now = dayjs();
	let duration = 'Ending in';

	function updateDuration() {
		const diff = started ? end.diff(now) : start.diff(now);
		const dur = dayjs.duration(diff);

		if (diff < 86400000) {
			duration = dur.format('HH:mm:ss');
		} else {
			duration = `${Math.trunc(dur.asDays())}d ${dur.format('HH:mm:ss')}`;
		}
	}

	onMount(() => {
		updateDuration();

		const interval = setInterval(() => {
			now = dayjs();

			const diff = started ? end.diff(now) : start.diff(now);
			const dur = dayjs.duration(diff);

			if (diff < 86400000) {
				duration = dur.format('HH:mm:ss');
			} else {
				duration = `${Math.trunc(dur.asDays())}d ${dur.format('HH:mm:ss')}`;
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	$: started = now.isAfter(start);
	$: ended = now.isAfter(end);
</script>

<div>
	{#if event.image !== 'no-image.png'}
		<img class="mb-4 w-full rounded-md" src="/images/events/{event.image}" alt={event.name} />
	{/if}
	<h1 class="text-lg font-bold">{event.name}</h1>
	<p>{start.format('LLLL')} - {end.format('LLLL')}</p>
	<a href={event.url} target="_blank" class="text-blue-500 duration-150 hover:text-blue-300"
		>{event.url}</a
	>
	<p class="mt-4 w-fit rounded-md border border-white/10 bg-purple-300/5 px-2 py-1 text-white/90">
		{#if ended}
			Finished
		{:else if !started}
			Start in {duration}
		{:else}
			Ending in {duration}
		{/if}
	</p>
</div>
