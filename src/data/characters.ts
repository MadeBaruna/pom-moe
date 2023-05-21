import type { Ascension, Character, Skills, Stat } from '$types';
import { addTranslations, locale } from '$utils/translation';
import { writable } from 'svelte/store';
import defaulCharacterJson from './characters/en.json';
import defaultSkillJson from './characters/skills/en.json';
import statsJson from './characters/stats/stats.json';
import ascensionJson from './characters/ascensions/ascensions.json';

type CharacterJson = { [key: string]: Character };
const defaultLocale: CharacterJson = defaulCharacterJson;

const characters = writable<Character[]>([]);
const skills = writable<{ [name: string]: Skills }>(defaultSkillJson);
const stats: { [name: string]: Stat } = statsJson;
const ascensions: { [name: string]: Ascension } = ascensionJson;

let currentLocale = 'en';

function load(json: CharacterJson, locale: string) {
	const list = Object.values(json).sort((a, b) => a.name.localeCompare(b.name));
	characters.set(list);

	const names = list.reduce((acc: { [key: string]: string }, item) => {
		acc[`character.${item.id}`] = item.name;
		return acc;
	}, {});

	addTranslations(
		{
			[locale]: names
		},
		{ [locale]: ['character'] }
	);
}

load(defaultLocale, 'en');

locale.subscribe(async (value) => {
	if (value === undefined || value === currentLocale) return;
	currentLocale = value;

	const localeJson: CharacterJson = (await import(`./characters/${value}.json`)).default;
	load(localeJson, value);

	const localeSkillJson: { [name: string]: Skills } = (
		await import(`./characters/skills/${value}.json`)
	).default;
	skills.set(localeSkillJson);
});

export default characters;
export { skills, stats, ascensions };
