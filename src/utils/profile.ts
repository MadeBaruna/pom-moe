import type { Profile } from '$types';
import { get } from 'svelte/store';
import { db, getLocalStorageItem } from './db';
import { setLocalStorageItem } from './db';

export function getCurrentProfile() {
	const id = db.id;
	const uid = get(db.uid) ?? '';
	const timezone = get(db.timezone) ?? 8;
	return { id, uid, timezone };
}

export function getProfiles() {
	const data = getLocalStorageItem('profiles');
	const list = data ? JSON.parse(data) : ['default'];

	const profiles: Profile[] = [];
	for (const id of list) {
		const name = getLocalStorageItem(`${id}-name`) ?? 'default';
		const uid = getLocalStorageItem(`${id}-uid`) ?? '';
		const timezone = getLocalStorageItem(`${id}-timezone`) ?? '8';
		profiles.push({ id, name, uid, timezone: Number(timezone) });
	}

	return profiles;
}

export function addProfile(name: string) {
	const id = crypto.randomUUID();

	const profiles = getProfiles();
	profiles.push({ id, name, uid: '', timezone: 8 });

	setLocalStorageItem('profiles', JSON.stringify(profiles));
}
