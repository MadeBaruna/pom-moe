import characters, { ascensions } from '$data/characters';
import exp from '$data/exp';
import { get } from 'svelte/store';

const char = get(characters)[0];

export function calculateAscension(
	level: { from: number; to: number },
	ascension: { from: number; to: number }
) {
	console.log(char);
	const list = ascensions[char.id];

	let credit = 0;
	const items: { [item: string]: number } = {};
	for (let i = ascension.from - 1; i < ascension.to; i++) {
		const asc = list[i];
		for (const cost of asc.cost) {
			if (cost.name === 'credit') {
				credit += cost.amount;
				continue;
			}

			if (items[cost.name] === undefined) items[cost.name] = 0;
			items[cost.name] += cost.amount;
		}
	}

	let totalExp = 0;
	for (let i = level.from; i < level.to; i++) {
		totalExp += exp[i - 1];
	}

	credit += (Math.ceil(totalExp / 1000) * 1000) / 10;

	return {
		exp: totalExp,
		credit,
		items
	};
}
