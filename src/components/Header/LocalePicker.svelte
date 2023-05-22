<script lang="ts">
	import { languages, locale } from '$utils/translation';
	import Icon from '@iconify/svelte';
	import ChevronDown from '@iconify-icons/mdi/chevron-down';
	import { setLocalStorageItem } from '$utils/db';

	function changeLocale(id: string) {
		locale.set(id);
		setLocalStorageItem('locale', id);
	}
</script>

<div class="group relative mt-8 cursor-pointer pl-6 md:mt-0">
	<div class="flex items-center opacity-70 duration-150 hover:opacity-100">
		<img class="h-8 w-8" src="/icons/language.png" alt="" />
		<span class="pl-2 font-semibold text-white">{languages[$locale]}</span>
		<Icon class="inline text-white" icon={ChevronDown} />
	</div>
	<div class="absolute left-0 hidden origin-top pt-5 ease-in-out group-hover:block md:-left-12">
		<div
			class="grid w-60 grid-cols-2 gap-2 rounded-md border border-white/5 bg-dark/30 px-2 py-2 font-semibold backdrop-blur-md"
		>
			{#each Object.entries(languages) as [id]}
				<button
					on:click={() => changeLocale(id)}
					class="py-1 text-white text-opacity-80 duration-150 hover:text-opacity-100"
					>{languages[id]}</button
				>
			{/each}
		</div>
	</div>
</div>
