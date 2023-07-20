<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { t } from '$utils/translation';
	import LoadingIcon from '@iconify-icons/line-md/loading-twotone-loop';
	import ErrorIcon from '@iconify-icons/material-symbols/error-outline-rounded';
	import Icon from '@iconify/svelte';
	import { checkUrl } from '$utils/warp';

	const dispatch = createEventDispatcher<{ url: URL }>();

	let filename = 'data_2';
	let fileinput: HTMLInputElement;
	let hovered = false;
	let loading = 0;
	let error = '';

	function openFileInput() {
		fileinput.click();
	}

	function handleInput() {
		const file = fileinput.files?.[0];
		if (file === undefined) {
			error = 'empty_file';
			return;
		}

		processFile(file);
	}

	function handleFileInput(event: DragEvent) {
		event.preventDefault();

		if (event.dataTransfer?.items !== null) {
			const item = event.dataTransfer?.items[0];
			if (item?.kind === 'file') {
				const file = item.getAsFile();
				if (file === null) {
					error = 'empty_file';
					return;
				}

				processFile(file);
			}
			return;
		}

		const file = event.dataTransfer?.files[0];
		processFile(file);
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		hovered = true;
	}

	function handleDragLeave(event: DragEvent) {
		event.preventDefault();
		hovered = false;
	}

	async function processFile(file: File) {
		error = '';
		fileinput.value = '';
		loading = 1;
		let strings = '';

		try {
			strings = await file.text();
		} catch (err) {
			error = 'Error when reading the file!';
			console.error(err);
			loading = 0;
			return;
		}

		const matches = strings.matchAll(/(https.+?end_id=)/g);
		const urls = [...matches].reverse();
		if (urls.length === 0) {
			error = 'no_url_found';
			loading = 0;
			return;
		}

		let tempError = '';
		let url: URL;
		for (const match of urls) {
			try {
				url = await checkUrl(match[0]);
				loading = 0;
				dispatch('url', url);
				return;
			} catch (err) {
				tempError = (err as Error).message;
				if (tempError === 'connection_failed') {
					error = tempError;
					loading = 0;
					return;
				}
			}
			loading += 1;
		}

		error = tempError;
		loading = 0;
	}
</script>

{#if loading}
	<div class="flex w-full max-w-xl rounded-md bg-blue-300/5 p-8 text-white">
		<p class="leading-none">
			<Icon icon={LoadingIcon} class="mr-4 inline" height={32} />
			Checking the Warp History URL #{loading}
		</p>
	</div>
{:else}
	<div
		class="flex w-full max-w-xl cursor-pointer items-center justify-center rounded-md
  border-2 border-dashed bg-blue-300/5 px-8 py-8 duration-150 hover:border-gray-400 {hovered
			? 'border-gray-400'
			: 'border-gray-600'}"
		on:click={openFileInput}
		on:keypress={openFileInput}
		on:drop={handleFileInput}
		on:dragover={handleDragOver}
		on:dragleave={handleDragLeave}
	>
		<img class="mr-2 h-12 w-12" src="/images/file.png" alt="" />
		<p class="select text-xl text-white">
			{@html $t('warp.import.selectFile', { filename })}
		</p>
	</div>
{/if}
{#if error !== ''}
	<div
		class="mt-4 flex w-full max-w-xl rounded-md border-2 border-dashed border-red-300/50 bg-red-300/5 px-8 py-4 text-white"
	>
		<p class="leading-none">
			<Icon icon={ErrorIcon} class="mr-4 inline" height={32} />
			{error}
		</p>
	</div>
{/if}
<input class="hidden" type="file" bind:this={fileinput} on:change={handleInput} />
<p class="relative mb-2 mt-6 w-fit text-lg font-medium leading-none text-white">
	<img class="mr-1 inline h-6 w-6" src="/images/quest.png" alt="" />
	Where to find data_2 file?
	<span class="absolute bottom-[2px] right-0 h-[1px] w-[calc(100%-30px)] bg-space" />
</p>
<div class="relative flex flex-col pl-8 text-white">
	<span class="absolute left-0 top-2 ml-2 font-bold">1.</span>
	<p class="mt-2">Open the Warp History in the game first!</p>
</div>
<div class="relative flex flex-col pl-8 text-white">
	<span class="absolute left-0 top-2 ml-2 font-bold">2.</span>
	<p class="mt-2">After that open File Explorer, then go to:</p>
	<p class="highlighted">
		<span>StarRail Install Folder</span>\Games\StarRail_Data\webCaches\2.14.0.0\Cache\Cache_Data
	</p>
	<img
		class="mt-4 w-full max-w-xl rounded-md duration-150 hover:max-w-3xl"
		src="/images/import/datalocation.jpg"
		alt="Example"
	/>
</div>
<div class="relative flex flex-col pl-8 text-white">
	<span class="absolute left-0 top-2 ml-2 font-bold">3.</span>
	<p class="mt-2">Then drag and drop data_2 file to the box above</p>
</div>

<style lang="postcss">
	.select :global(span) {
		@apply px-1 font-medium text-purple-300;
	}

	.highlighted :global(span) {
		@apply rounded-md border border-white/10 bg-purple-300/30 px-1;
	}
</style>
