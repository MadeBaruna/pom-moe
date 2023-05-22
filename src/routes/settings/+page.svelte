<script lang="ts">
	import Button from '$components/Button.svelte';
	import Select from '$components/Select.svelte';
	import Title from '$components/Title.svelte';
	import type { Option } from '$types';
	import { db, exportAll } from '$utils/db';
	import { getCurrentProfile, getProfiles } from '$utils/profile';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import DownloadIcon from '@iconify-icons/mdi/download';
	import Icon from '@iconify/svelte';

	let currentProfile: Option<string> = { value: 'default', label: 'default' };
	let profiles: Option<string>[] = [currentProfile];

	let servers: Option<number>[] = [
		{ value: 8, label: 'Asia / China' },
		{ value: 1, label: 'Europe' },
		{ value: -5, label: 'America' }
	];
	let currentServer = servers[0];

	function downloadData(data: string, name: string) {
		const fileLink = document.createElement('a');

		const filename = `${name}.json`;
		const dataStr = encodeURIComponent(data);

		fileLink.setAttribute('href', `data:text/json;charset=utf-8,${dataStr}`);
		fileLink.setAttribute('download', filename);
		document.body.appendChild(fileLink);
		fileLink.click();
	}

	async function exportData() {
		const data = await exportAll();
		const name = `pom-moe-export-${dayjs().format('YYYYMMDD')}`;
		downloadData(JSON.stringify(data), name);
	}

	function changeServer() {
		db.timezone.set(currentServer.value);
	}

	onMount(() => {
		const profileList = getProfiles();
		profiles = profileList.map((profile) => ({
			value: profile.id,
			label: `${profile.name} - UID: ${profile.uid}`
		}));

		const curr = getCurrentProfile();
		currentProfile = profiles.find((e) => e.value === curr.id) ?? currentProfile;
		currentServer = servers.find((e) => e.value === curr.timezone) ?? currentServer;
		// console.log(curr, currentProfile, currentServer);
	});
</script>

<Title>Settings</Title>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	<div class="rounded-md bg-black bg-opacity-30 p-4 ring-1 ring-white/5">
		<p class="mb-1 font-bold text-white">Profiles</p>
		<p class="mb-4 text-gray-200">If you have multiple accounts, you can separate them here</p>

		<p class="text-purple-300">Server</p>
		<Select
			options={servers}
			bind:selected={currentServer}
			placeholder="Select Server"
			on:change={changeServer}
		/>
		<p class="mt-2 text-purple-300">Current Profile</p>
		<Select options={profiles} bind:selected={currentProfile} placeholder="Select Profile" />
		<div class="mt-2 flex justify-end gap-2">
			<Button disabled>Delete</Button>
			<Button disabled>Add</Button>
			<Button disabled>Rename</Button>
		</div>
	</div>
	<div class="rounded-md bg-black bg-opacity-30 p-4 ring-1 ring-white/5">
		<p class="mb-4 font-bold text-white">Export & Import</p>
		<Button on:click={exportData} class="text-lg"
			><Icon class="mr-2" icon={DownloadIcon} /> Download Data</Button
		>
	</div>
</div>
