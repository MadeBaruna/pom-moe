import type { Banner, BannerLocale, BannerType } from '$types';
import defaultJson from './banners/en.json';
import { addTranslations, locale } from '$utils/translation';

export const bannerTypes = ['character', 'lightcone', 'standard', 'beginner'] as const;

type BannerLocaleJson = { [key: string]: BannerLocale };
const defaultLocale: BannerLocaleJson = defaultJson;

function load(json: BannerLocaleJson, locale: string) {
	const names = Object.values(json).reduce((acc: { [key: string]: string }, item) => {
		acc[`banner.${item.id}`] = item.name;
		return acc;
	}, {});

	addTranslations(
		{
			[locale]: names
		},
		{ [locale]: ['banner'] }
	);
}

load(defaultLocale, 'en');

locale.subscribe(async (value) => {
	if (value === undefined) return;
	const localeJson: BannerLocaleJson = (await import(`./banners/${value}.json`)).default;
	load(localeJson, value);
});

export const maxPities: { [key in BannerType]: number } = {
	character: 90,
	lightcone: 80,
	standard: 90,
	beginner: 50
};

export type Banners = {
	[key in BannerType]: [Banner, ...Banner[]];
};

export const banners: Banners = {
	character: [
		{
			code: 2003,
			type: 'character',
			name: 'Butterfly on Swordtip',
			start: '2023-04-26 06:00:00',
			end: '2023-05-17 17:59:00',
			color: '#dfb6ff',
			version: '1.0',
			image: 'Butterfly on Swordtip 2003.png',
			pos: '60% 0%',
			zoom: 1.1,
			featured5: ['seele'],
			featured4: ['hook', 'pela', 'natasha'],
			timezoneDependent: true
		},
		{
			code: 2004,
			type: 'character',
			name: 'Swirl of Heavenly Spear',
			start: '2023-05-17 18:00:00',
			end: '2023-06-06 14:59:00',
			color: '#fdfdfb',
			version: '1.0',
			image: 'Swirl of Heavenly Spear 2004.png',
			pos: '83% 0%',
			zoom: 1.1,
			featured5: ['jing-yuan'],
			featured4: ['tingyun', 'sushang', 'march-7th']
		},
		{
			code: 2005,
			type: 'character',
			name: 'Contract Zero',
			start: '2023-06-07 06:00:00',
			end: '2023-06-28 11:59:00',
			color: '#8dd1f5',
			version: '1.1',
			image: 'Contract Zero 2005.png',
			pos: '83% 0%',
			zoom: 1.1,
			featured5: ['silver-wolf'],
			featured4: ['dan-heng', 'asta', 'serval'],
			timezoneDependent: true
		},
		{
			code: 2006,
			type: 'character',
			name: 'Laic Pursuit',
			start: '2023-06-28 12:00:00',
			end: '2023-07-18 14:59:49',
			color: '#f9f3e6',
			version: '1.1',
			image: 'Laic Pursuit 2006.png',
			pos: '83% 0%',
			zoom: 1.1,
			featured5: ['luocha'],
			featured4: ['yukong', 'pela', 'qingque']
		},
		{
			code: 2007,
			type: 'character',
			name: 'A Lost Soul',
			start: '2023-07-19 06:00:00',
			end: '2023-08-09 11:59:00',
			color: '#7d90c3',
			version: '1.2',
			image: 'A Lost Soul 2007.png',
			pos: '55% 20%',
			zoom: 1.2,
			featured5: ['blade'],
			featured4: ['arlan', 'sushang', 'natasha'],
			timezoneDependent: true
		},
		{
			code: 2008,
			type: 'character',
			name: 'Nessun Dorma',
			start: '2023-08-09 12:00:00',
			end: '2023-08-29 14:59:00',
			color: '#7d90c3',
			version: '1.2',
			image: 'Nessun Dorma 2008.png',
			pos: '55% 20%',
			zoom: 1.2,
			featured5: ['kafka'],
			featured4: ['luka', 'sampo', 'serval']
		}
	],
	lightcone: [
		{
			code: 3003,
			type: 'lightcone',
			name: 'Brilliant Fixation',
			start: '2023-04-26 06:00:00',
			end: '2023-05-17 17:59:00',
			color: '#dfb6ff',
			version: '1.0',
			image: 'Brilliant Fixation 3003.png',
			pos: '70% 8%',
			zoom: 1.2,
			featured5: ['in-the-night'],
			featured4: ['the-moles-welcome-you', 'good-night-and-sleep-well', 'post-op-conversation'],
			timezoneDependent: true
		},
		{
			code: 3004,
			type: 'lightcone',
			name: 'Brilliant Fixation',
			start: '2023-05-17 18:00:00',
			end: '2023-06-06 14:59:00',
			color: '#fff9d2',
			version: '1.0',
			image: 'Brilliant Fixation 3004.png',
			pos: '70% 8%',
			zoom: 1.2,
			featured5: ['before-dawn'],
			featured4: ['planetary-rendezvous', 'only-silence-remains', 'day-one-of-my-new-life']
		},
		{
			code: 3005,
			type: 'lightcone',
			name: 'Brilliant Fixation',
			start: '2023-06-07 06:00:00',
			end: '2023-06-28 11:59:00',
			color: '#c2aefd',
			version: '1.1',
			image: 'Brilliant Fixation 3005.png',
			pos: '70% 8%',
			zoom: 1.2,
			featured5: ['incessant-rain'],
			featured4: ['subscribe-for-more', 'memories-of-the-past', 'make-the-world-clamor'],
			timezoneDependent: true
		},
		{
			code: 3006,
			type: 'lightcone',
			name: 'Brilliant Fixation',
			start: '2023-06-28 12:00:00',
			end: '2023-07-18 14:59:49',
			color: '#d0d3ac',
			version: '1.1',
			image: 'Brilliant Fixation 3006.png',
			pos: '70% 8%',
			zoom: 1.2,
			featured5: ['echoes-of-the-coffin'],
			featured4: ['good-night-and-sleep-well', 'geniuses-repose', 'dance-dance-dance'],
			timezoneDependent: true
		},
		{
			code: 3007,
			type: 'lightcone',
			name: 'Brilliant Fixation',
			start: '2023-07-19 06:00:00',
			end: '2023-08-09 11:59:00',
			color: '#8c9ba5',
			version: '1.1',
			image: 'Brilliant Fixation 3007.png',
			pos: '70% 8%',
			zoom: 1.2,
			featured5: ['the-unreachable-side'],
			featured4: ['a-secret-vow', 'shared-feeling', 'swordplay']
		},
		{
			code: 3008,
			type: 'lightcone',
			name: 'Brilliant Fixation',
			start: '2023-08-09 12:00:00',
			end: '2023-08-29 14:59:00',
			color: '#8c9ba5',
			version: '1.2',
			image: 'Brilliant Fixation 3008.png',
			pos: '70% 0%',
			zoom: 1.2,
			featured5: ['patience-is-all-you-need'],
			featured4: [
				'resolution-shines-as-pearls-of-sweat',
				'eyes-of-the-prey',
				'the-birth-of-the-self'
			]
		}
	],
	standard: [
		{
			code: 1001,
			type: 'standard',
			name: 'Stellar Warp',
			start: '2023-04-26 06:00:00',
			end: '2100-12-31 00:00:00',
			color: '#dfb6ff',
			version: '1.0',
			image: 'Stellar Warp.png',
			pos: '100% 0%',
			zoom: 1.1,
			featured5: [],
			featured4: []
		}
	],
	beginner: [
		{
			code: 4001,
			type: 'beginner',
			name: 'Departure Warp',
			start: '2023-04-26 06:00:00',
			end: '2100-12-31 00:00:00',
			color: '#dfb6ff',
			version: '1.0',
			image: 'Departure Warp.png',
			pos: '85% 0%',
			zoom: 1.2,
			featured5: [],
			featured4: []
		}
	]
};

export const bannersMap: { [x: number]: Banner | undefined } = Object.values(banners)
	.flat()
	.reduce((acc, item) => {
		acc[item.code] = item;
		return acc;
	}, {} as { [key: number]: Banner });
