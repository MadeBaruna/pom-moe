import type { Element } from '$types';
import type { Elements } from '$types';
import defaultJson from './elements/en.json';
import { locale } from '$utils/translation';
import { writable } from 'svelte/store';

const elements = writable<Element[]>(Object.values(defaultJson));

locale.subscribe(async (value) => {
	if (value === undefined) return;
	const localeJson: Elements = (await import(`./elements/${value}.json`)).default;
	elements.set(Object.values(localeJson));
});

export default elements;
