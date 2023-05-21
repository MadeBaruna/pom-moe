import { get } from 'svelte/store';
import { db } from './db';

const timeUtcOffset: { [offset: string]: string } = {
	'8': 'Asia/China',
	'1': 'Europe',
	'-5': 'America'
};

export function getServer(): [number, string] {
	const server = get(db.timezone);
	return [server, timeUtcOffset[server]];
}
