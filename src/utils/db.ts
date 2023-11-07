import { browser } from '$app/environment';
import type { AchievementChecklist, BannerSummary, ItemCount, WarpItem } from '$types';
import Dexie, { type Table } from 'dexie';
import { writable } from 'svelte/store';
import { debounce } from './debounce';

export function getLocalStorageItem(key: string) {
	if (!browser) return null;
	return localStorage.getItem(key);
}

export function setLocalStorageItem(key: string, value: string) {
	if (!browser) return null;
	return localStorage.setItem(key, value);
}

const setUpdatedTime = debounce(() => {
	if (!browser) return null;
	return localStorage.setItem('updated', new Date().getTime().toString());
}, 1000);

Dexie.on('storagemutated', setUpdatedTime);

export class Database extends Dexie {
	id = 'default';

	character!: Table<WarpItem>;
	lightcone!: Table<WarpItem>;
	standard!: Table<WarpItem>;
	beginner!: Table<WarpItem>;
	items!: Table<ItemCount>;
	bannerSummary!: Table<BannerSummary>;
	achievements!: Table<AchievementChecklist>;

	timezone = writable(8);
	uid = writable('');

	constructor(id: string) {
		super(`pom_${id}`);
		this.id = id;

		this.timezone.set(Number(getLocalStorageItem(`${id}-timezone`) ?? 8));
		this.timezone.subscribe((value) => {
			setLocalStorageItem(`${id}-timezone`, value.toString());
		});

		this.uid.set(getLocalStorageItem(`${id}-uid`) ?? '');
		this.uid.subscribe((value) => {
			setLocalStorageItem(`${id}-uid`, value);
		});

		this.version(1).stores({
			character: 'id, name, bannerId, bannerCode, time, rarity',
			lightcone: 'id, name, bannerId, bannerCode, time, rarity',
			standard: 'id, name, bannerId, bannerCode, time, rarity',
			beginner: 'id, name, bannerId, bannerCode, time, rarity',
			items: 'name',
			bannerSummary: 'banner',
			achievements: 'id, category'
		});
	}
}

const active = getLocalStorageItem('active') ?? 'default';
export let db: Database = new Database(active);

export function changeActive(id: string) {
	localStorage.setItem('active', id);
	db = new Database(id);
}

async function exportDb(dbname: string) {
	const currentDb = new Database(dbname);
	const tables = currentDb.tables;

	const data: { [key: string]: unknown[] } = {};

	for (const table of tables) {
		data[table.name] = await table.toArray();
	}

	return data;
}

export async function exportAll() {
	const data: { [key: string]: unknown } = {};

	data['default'] = await exportDb('default');

	return data;
}

export async function importDb(data: object, dbname: string = 'default',) {
	const currentDb = new Database(dbname);
	const tables = currentDb.tables;

	for (const table of tables) {
		await table.clear();
	}

	for (const [key, entry] of Object.entries(data[dbname])) {
		let table = currentDb[key];

		for (const tableItem of entry) {
			table.put(tableItem);
			// throw new Error();
		}
	}

	alert('Import finished!');
}
