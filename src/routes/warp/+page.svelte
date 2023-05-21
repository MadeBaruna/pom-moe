<script lang="ts">
	import Button from '$components/Button.svelte';
	import Title from '$components/Title.svelte';
	import { banners } from '$data/banners';
	import { t } from '$utils/translation';
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Pom.moe - Warp Counter</title>
</svelte:head>

<div class="flex items-center">
	<Title>
		{$t('common.warp')}
	</Title>
	<a href="/warp/import">
		<Button class="ml-4 mt-1 text-2xl">
			<img class="mr-2 h-6 w-6" src="/icons/warp.png" alt="" />
			Import History</Button
		>
	</a>
</div>

<div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
	<Counter banner={banners.character[0]} />
	<Counter banner={banners.lightcone[0]} />
	<Counter banner={banners.standard[0]} />
	<Counter banner={banners.beginner[0]} />
</div>
