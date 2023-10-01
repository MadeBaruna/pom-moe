import characters from '$data/characters';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const load = ({ params }) => {
	const id = params.id;

	const character = get(characters).find((c) => c.id === id);
	if (character === undefined) {
		throw error(404, 'Not found');
	}

	return { id };
};
