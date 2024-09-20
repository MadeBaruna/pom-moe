<script lang="ts">
	import dayjs from 'dayjs';
	import localized from 'dayjs/plugin/localizedFormat';
	import { onMount } from 'svelte';

	dayjs.extend(localized);

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
	<p>
		{#if ended}
			Finished
		{:else if !started}
			Start in {duration}
		{:else}
			Ending in {duration}
		{/if}
	</p>
</div>
