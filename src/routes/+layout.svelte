<script lang="ts">
	import Header from '$components/Header/Header.svelte';
	import { page } from '$app/stores';
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { getLocalStorageItem } from '$utils/db';
	import { locale } from '$utils/translation';
	import Modal from 'svelte-simple-modal';
	import { modal } from '$utils/modal';
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import GithubIcon from '@iconify-icons/mdi/github';

	onMount(() => {
		const lang = getLocalStorageItem('locale');
		if (lang !== null) {
			locale.set(lang);
		}
	});
</script>

<Header />
<div class="flex min-h-screen flex-col items-center">
	<div class="w-full px-3 pt-20 {$page.route.id !== '/timeline' ? 'max-w-screen-xl' : ''}">
		<Modal
			show={$modal}
			unstyled
			closeButton={false}
			classBg="fixed top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center bg-black bg-opacity-30 z-50"
			classWindowWrap="relative max-h-full mx-2"
			classWindow="text-white relative w-full max-w-2xl max-h-full rounded-md p-4 shadow-md bg-dark/30 backdrop-blur-xl ring-1 ring-white/5"
			transitionWindow={fly}
			transitionWindowProps={{ y: 100, duration: 200 }}
		>
			<slot />
		</Modal>
	</div>
	<div class="flex-1" />
	<footer
		class="mt-4 flex w-full max-w-screen-xl items-center justify-between px-3 py-4 text-white/40"
	>
		<div>
			<p>Pom.moe is not affiliated with HoYoverse.</p>
			<p>
				Honkai: Star Rail, game content and materials are trademarks and copyrights of HoYoverse.
			</p>
		</div>
		<a
			href="https://github.com/MadeBaruna/pom-moe"
			class="duration-150 hover:text-white"
			target="_blank"
		>
			<Icon icon={GithubIcon} height={40} />
		</a>
	</footer>
</div>
