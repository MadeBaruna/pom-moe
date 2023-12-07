// See https://kit.svelte.dev/docs/types#app

import type { bannerTypes } from '$data/banners';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

export type KeyValueObject = {
	[key: string]: string;
};

export type Character = {
	id: string;
	name: string;
	element: string;
	path: string;
	rarity: number;
};

export type Element = {
	id: string;
	name: string;
};
export type Elements = {
	[id: string]: Element;
};

export type Path = {
	id: string;
	name: string;
};
export type Paths = {
	[id: string]: Path;
};

export type Skill = {
	name: string;
	desc: string;
	values: number[][];
	format: string[];
};

export type Skills = {
	attack: Skill;
	skill: Skill;
	ultimate: Skill;
	talent: Skill;
	technique: Skill;
};

export type Stat = {
	atk: number[];
	def: number[];
	hp: number[];
	spd: number;
};

export type Ascension = Array<{
	cost: {
		name: string;
		amount: number;
	}[];
}>;

export type Lightcone = {
	id: string;
	name: string;
	path: string;
	rarity: number;
};

export type Achievement = {
	id: number;
	name: string;
	desc: string;
	rarity: number;
	version: number;
};

export type Achievements = {
	[id: string]: {
		name: string;
		achievements: Achievement[];
	};
};

export type AchievementChecklist = {
	category: string;
	id: number;
	checked: boolean;
};

export type Timeline = {
	name: string;
	start: string;
	end: string;
	color: string;
	image: string;
	pos: string;
	zoom: number;
	url: string;
	show: boolean;
	duration?: number;
	timezoneDependent?: true;
};

export type BannerType = (typeof bannerTypes)[number];
export type ItemType = 'character' | 'lightcone';

export type Banner = {
	code: number;
	type: BannerType;
	name: string;
	start: string;
	end: string;
	version: string;
	color: string;
	image: string;
	pos: string;
	zoom: number;
	featured5: string[];
	featured4: string[];
	timezoneDependent?: true;
};

export type BannerLocale = {
	id: string;
	name: string;
};

export type GachaResponse = {
	retcode: number;
	message: string;
	data: GachaData;
};

export type GachaData = {
	page: string;
	size: string;
	list: GachaItem[];
	region: string;
	region_time_zone: number;
};

export type GachaItem = {
	uid: string;
	gacha_id: string;
	gacha_type: string;
	item_id: string;
	count: string;
	time: string;
	name: string;
	lang: string;
	item_type: string;
	rank_type: string;
	id: string;
};

export type WarpItem = {
	id: string;
	bannerCode: number;
	itemId: string;
	name: string;
	time: string;
	type: ItemType;
	rarity: number;
	pity: number;
	guaranteed: number;
	raw: string;
};

export type ItemCount = {
	name: string;
	count: number;
};

export type BannerSummary = {
	banner: string;
	total: {
		all: number;
		4: number;
		5: number;
	};
	pity: {
		4: number;
		5: number;
	};
	up: {
		4: boolean;
		5: boolean;
	};
};

export type Option<T> = {
	value: T;
	label: string;
	image?: string;
};

export type Profile = {
	id: string;
	name: string;
	uid: string;
	timezone: number;
};
