import type { Path, Paths } from '$types';
import defaultJson from './paths/en.json';
import { locale } from '$utils/translation';
import { writable } from 'svelte/store';

const paths = writable<Path[]>(Object.values(defaultJson));

locale.subscribe(async (value) => {
	if (value === undefined) return;
	const localeJson: Paths = (await import(`./paths/${value}.json`)).default;
	paths.set(Object.values(localeJson));
});

export default paths;
