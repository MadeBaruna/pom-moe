<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import PasteIcon from '@iconify-icons/mdi/content-paste';
	import CopyIcon from '@iconify-icons/mdi/content-copy';
	import CheckIcon from '@iconify-icons/mdi/check';
	import { t } from '$utils/translation';
	import Button from '$components/Button.svelte';
	import ErrorIcon from '@iconify-icons/material-symbols/error-outline-rounded';

	const dispatch = createEventDispatcher<{ url: URL }>();

	let url = '';
	let scriptUrl = `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex "&{$((New-Object System.Net.WebClient).DownloadString('https://gist.githubusercontent.com/MadeBaruna/e017637fbc6c72d47d72ba42dfb2477b/raw/hsr_getlink.ps1'))}"`;
	let scriptSource = 'https://gist.github.com/MadeBaruna/e017637fbc6c72d47d72ba42dfb2477b';

	let copied = false;
	let error = '';

	function checkUrl() {
		error = '';
		if (!url.startsWith('https')) {
			error = 'invalid_url';
			return;
		}

		try {
			const u = new URL(url);
			dispatch('url', u);
		} catch (err) {
			error = 'invalid_url';
		}
	}

	async function paste() {
		url = '';
		try {
			const clip = await navigator.clipboard.readText();
			url = clip;
			checkUrl();
		} catch (err) {}
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(scriptUrl);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {}
	}
</script>

<div class="relative h-[116px] w-full max-w-xl">
	<textarea
		placeholder="Paste the Warp History URL here..."
		class="h-full w-full resize-none rounded-md border-2 border-dashed border-gray-600 bg-blue-300/5 p-4 text-white hover:border-gray-400"
		bind:value={url}
		on:input={checkUrl}
	/>
	<div class="absolute bottom-4 right-4">
		<Button on:click={() => paste()}>
			<Icon icon={PasteIcon} class="mr-2" />
			Paste
		</Button>
	</div>
</div>
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
<p class="relative mb-2 mt-6 w-fit text-lg font-medium leading-none text-white">
	<img class="mr-1 inline h-6 w-6" src="/images/quest.png" alt="" />
	How to get the Warp History URL?
	<span class="absolute bottom-[2px] right-0 h-[1px] w-[calc(100%-30px)] bg-space" />
</p>
<div class="relative flex flex-col pl-8 text-white">
	<span class="absolute left-0 top-2 ml-2 font-bold">1.</span>
	<p class="mt-2">Open the Warp History in the game first!</p>
</div>
<div class="relative flex flex-col pl-8 text-white">
	<span class="absolute left-0 top-2 ml-2 font-bold">2.</span>
	<p class="highlighted mt-2">Open Start, then search for <span>PowerShell</span></p>
	<img
		class="mb-4 mt-4 w-full max-w-xs rounded-md duration-150 hover:max-w-xl"
		src="/images/import/start.png"
		alt="Example"
	/>
</div>
<div class="relative flex flex-col pl-8 text-white">
	<span class="absolute left-0 top-2 ml-2 font-bold">3.</span>
	<p class="mt-2">Copy & paste the script below to the PowerShell window, then press Enter</p>
	<div class="relative max-w-3xl">
		<pre
			class="whitespace-pre-wrap break-all rounded-md border-2 border-dashed border-gray-600 bg-blue-300/5 px-2 py-1 pr-28 text-xs text-gray-300">{scriptUrl}</pre>
		<div class="absolute bottom-0 right-4 top-0 flex items-center">
			<Button on:click={() => copy()}>
				<Icon icon={copied ? CheckIcon : CopyIcon} class="mr-2" />
				Copy
			</Button>
		</div>
	</div>
	<p class="text-sm text-white/70">
		※ You can review the script <a
			target="_blank"
			class="text-blue-300/70 hover:text-blue-300"
			href={scriptSource}>here</a
		>
	</p>
	<img
		class="mb-4 mt-4 w-full max-w-lg rounded-md duration-150 hover:max-w-3xl"
		src="/images/import/powershell.png"
		alt="Example"
	/>
</div>

<style lang="postcss">
	.highlighted :global(span) {
		@apply rounded-md border border-white/10 bg-purple-300/30 px-1;
	}
</style>
