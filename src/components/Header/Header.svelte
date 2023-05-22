<script>
	import { onMount } from 'svelte';
	import HeaderButton from './HeaderButton.svelte';
	import LocalePicker from './LocalePicker.svelte';
	import ChevronDown from '@iconify-icons/mdi/chevron-down';
	import XIcon from '@iconify-icons/mdi/multiply';
	import MenuIcon from '@iconify-icons/tabler/menu-2';
	import { t } from '$utils/translation';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	let showBorder = false;
	let open = false;

	function checkScroll() {
		showBorder = window.scrollY > 50;
	}

	function close() {
		open = false;
	}

	onMount(() => {
		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('scroll', checkScroll);
		};
	});
</script>

<div
	class="fixed top-0 z-50 w-full border-b backdrop-blur-md duration-150 {open
		? 'h-full bg-dark/60'
		: 'h-16'} {showBorder ? 'border-white/5 bg-dark/30' : 'border-transparent'}"
/>
<div class="fixed top-0 z-50 hidden h-16 w-full items-center justify-center md:flex">
	<div class="flex h-full w-full max-w-screen-xl items-center px-3">
		<a class="relative ml-10 select-none pb-2 font-semibold text-white" href="/">
			<img src="/icons/logo.png" alt="logo" class="absolute -left-10 h-10 w-auto opacity-80" />
			<span class="text-2xl">Pom</span>
			<span
				class="absolute -bottom-1 left-3.5 whitespace-nowrap bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-100 bg-clip-text text-transparent"
				>.moe</span
			>
			<span
				class="absolute -right-14 top-2 z-20 ml-5 rounded-md bg-yellow-100 px-1 text-xs text-black"
				>BETA</span
			>
		</a>
		<div class="flex-1" />
		<HeaderButton label={$t('common.warp')} icon="warp.png" target="/warp" />
		<HeaderButton label={$t('common.character')} icon="character.png" target="/characters" />
		<HeaderButton label="Timeline" icon="timeline.png" target="/timeline" />
		<div class="group relative cursor-pointer py-1 pl-6">
			<div class="flex items-center opacity-70 duration-150 hover:opacity-100">
				<img class="h-8 w-8" src="/icons/database.png" alt="" />
				<span class="pl-2 font-semibold text-white">Database</span>
				<Icon class="inline text-white" icon={ChevronDown} />
			</div>
			{#if ['lightcones', 'achievements'].includes($page.url.pathname.split('/')[1])}
				<div class="absolute -right-2 bottom-2 h-4 w-[1px] rounded-full bg-yellow-100" />
				<div
					class="absolute -right-2 bottom-2 h-[1px] w-full max-w-[calc(100%-4rem)] rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-100"
				/>
			{/if}
			<div class="absolute hidden origin-top pt-5 ease-in-out group-hover:block">
				<div
					class="flex w-[140%] flex-col items-start gap-2 rounded-md border border-white/5 bg-dark/30 py-2 font-semibold backdrop-blur-md"
				>
					<HeaderButton label={$t('common.lightcone')} icon="lightcone.png" target="/lightcones" />
					<HeaderButton
						label={$t('common.achievement')}
						icon="achievement.png"
						target="/achievements"
					/>
				</div>
			</div>
		</div>
		<div class="relative">
			<HeaderButton label={$t('menu.planner')} icon="planner.png" target="/planner" />
			<span class="absolute right-0 top-0 rounded-sm bg-yellow-100/70 px-1 text-xs leading-none"
				>SOON</span
			>
		</div>
		<LocalePicker />
		<HeaderButton iconOnly icon="settings.png" target="/settings" />
	</div>
</div>
<div class="fixed top-0 z-50 flex h-16 w-full items-center justify-between md:hidden">
	<a class="relative ml-16 select-none pb-2 font-semibold text-white" href="/">
		<img src="/icons/logo.png" alt="logo" class="absolute -left-10 h-10 w-auto opacity-80" />
		<span class="text-2xl">Pom</span>
		<span
			class="absolute -bottom-1 left-3.5 whitespace-nowrap bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-100 bg-clip-text text-transparent"
			>.moe</span
		>
		<span
			class="absolute -right-14 top-4 z-20 ml-5 rounded-md bg-yellow-100 px-1 text-xs text-black"
			>BETA</span
		>
	</a>
	<button class="mr-4 rounded-md p-3" on:click={() => (open = !open)}>
		<Icon class="text-white" icon={open ? XIcon : MenuIcon} height={24} />
	</button>
</div>
{#if open}
	<div class="fixed top-24 z-50 flex flex-col justify-start gap-4 px-8">
		<HeaderButton {close} label={$t('common.warp')} icon="warp.png" target="/warp" />
		<HeaderButton
			{close}
			label={$t('common.character')}
			icon="character.png"
			target="/characters"
		/>
		<HeaderButton {close} label={$t('menu.timeline')} icon="timeline.png" target="/timeline" />
		<HeaderButton
			{close}
			label={$t('common.lightcone')}
			icon="lightcone.png"
			target="/lightcones"
		/>
		<HeaderButton
			{close}
			label={$t('common.achievement')}
			icon="achievement.png"
			target="/achievements"
		/>
		<HeaderButton {close} label={$t('common.settings')} icon="settings.png" target="/settings" />
		<LocalePicker />
	</div>
{/if}
