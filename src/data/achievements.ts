import type { Achievements } from '$types';
import { locale } from '$utils/translation';
import { writable } from 'svelte/store';
import defaultJson from './achievements/en.json';

const achievements = writable<Achievements>(defaultJson);

locale.subscribe(async (value) => {
	if (value === undefined) return;
	const achievementsJson: Achievements = (await import(`./achievements/${value}.json`)).default;
	achievements.set(achievementsJson);
});

export default achievements;
