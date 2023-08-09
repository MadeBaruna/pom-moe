import type { Timeline } from '$types';

const timeline: Array<Timeline[]> = [
	[
		{
			name: 'Planar Fissure',
			start: '2023-08-02 04:00:00',
			end: '2023-08-09 03:59:00',
			image: 'Planar Fissure.png',
			color: '#6a77f4',
			pos: '20%, -20%',
			zoom: 1.5,
			url: 'https://www.hoyolab.com/article/20047496',
			show: true
		}
	],
	[
		{
			name: 'Everwinter City Museum Ledger of Curiosities',
			start: '2023-06-09 10:00:00',
			end: '2023-06-26 03:59:00',
			image: 'Everwinter City Museum Ledger of Curiosities.png',
			color: '#ebd8c0',
			pos: '0%, -30%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/18829148',
			show: true
		},
		{
			name: 'Stellar Flare',
			start: '2023-06-28 10:00:00',
			end: '2023-07-10 03:59:00',
			image: 'Stellar Flare.png',
			color: '#5b8fff',
			pos: '20%, -30%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/18829148',
			show: true
		},
		{
			name: 'Garden of Plenty',
			start: '2023-07-10 04:00:00',
			end: '2023-07-17 03:59:00',
			image: 'Garden of Plenty.png',
			color: '#e1b247',
			pos: '20%, -20%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/18829148',
			show: true
		},
		{
			name: 'Where Are You, Mystery Trotter?',
			start: '2023-07-28 12:00:00',
			end: '2023-08-14 03:59:00',
			image: 'Where Are You, Mystery Trotter.png',
			color: '#f1e7db',
			pos: '30%, -20%',
			zoom: 1.5,
			url: 'https://www.hoyolab.com/article/20432934',
			show: true
		},
		{
			name: 'Realm of the Strange',
			start: '2023-08-19 04:00:00',
			end: '2023-08-26 03:59:00',
			image: 'Realm of the Strange.png',
			color: '#70d2fd',
			pos: '30%, -30%',
			zoom: 1.5,
			url: 'https://www.hoyolab.com/article/20641646',
			show: true
		}
	],
	[
		{
			name: 'Starhunt Game',
			start: '2023-06-07 06:00:00',
			end: '2023-06-19 03:59:00',
			image: 'Starhunt Game.jpg',
			color: '#f3baff',
			pos: '0%, -25%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/19123084',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Lab Assistants In Position',
			start: '2023-06-19 10:00:00',
			end: '2023-07-03 03:59:00',
			image: 'Lab Assistants In Position.png',
			color: '#afbfff',
			pos: '5%, -5%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/19123084',
			show: true
		},
		{
			name: 'Tales of the Fantastic',
			start: '2023-07-21 12:00:00',
			end: '2023-08-07 03:59:00',
			image: 'Tales of the Fantastic.png',
			color: '#df9b61',
			pos: '0%, -50%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/20047496',
			show: true
		},
		{
			name: 'Underground Treasure Hunt',
			start: '2023-08-09 12:00:00',
			end: '2023-08-28 03:59:00',
			image: 'Underground Treasure Hunt.png',
			color: '#f0d397',
			pos: '20%, -15%',
			zoom: 1.7,
			url: 'https://www.hoyolab.com/article/20711907',
			show: true
		}
	],
	[
		{
			name: 'Gift of Odyssey	- Daily Login',
			start: '2023-06-07 06:00:00',
			end: '2023-07-18 03:59:00',
			image: 'Gift of Odyssey.png',
			color: '#fff7db',
			pos: '0%, -32%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/17953652',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Gift of Odyssey	- Daily Login',
			start: '2023-07-19 06:00:00',
			end: '2023-08-29 03:59:00',
			image: 'Gift of Odyssey.png',
			color: '#fff7db',
			pos: '0%, -32%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/20047496',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'Contract Zero - Silver Wolf Warp Event',
			start: '2023-06-07 06:00:00',
			end: '2023-06-28 11:59:00',
			image: 'Contract Zero 2005.png',
			color: '#8dd1f5',
			pos: '-10%, -2%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/19120091',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Laic Pursuit - Luocha Warp Event',
			start: '2023-06-28 12:00:00',
			end: '2023-07-18 14:59:49',
			image: 'Laic Pursuit 2006.png',
			color: '#f9f3e6',
			pos: '-10%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/19628987',
			show: true
		},
		{
			name: 'A Lost Soul - Blade Warp Event',
			start: '2023-07-19 06:00:00',
			end: '2023-08-09 11:59:00',
			image: 'A Lost Soul 2007.png',
			color: '#7d90c3',
			pos: '0%, 17%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/20114086',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Nessun Dorma - Kafka Warp Event',
			start: '2023-08-09 12:00:00',
			end: '2023-08-29 14:59:00',
			image: 'Nessun Dorma 2008.png',
			color: '#cba2df',
			pos: '0%, 12%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/20713096',
			show: true
		}
	],
	[
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-06-07 06:00:00',
			end: '2023-06-28 11:59:00',
			image: 'Brilliant Fixation 3005.png',
			color: '#c2aefd',
			pos: '-5%, -2%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/19120155',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-06-28 12:00:00',
			end: '2023-07-18 14:59:49',
			image: 'Brilliant Fixation 3006.png',
			color: '#d0d3ac',
			pos: '-5%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/19629089',
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-07-19 06:00:00',
			end: '2023-08-09 11:59:00',
			image: 'Brilliant Fixation 3007.png',
			color: '#8c9ba5',
			pos: '-5%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/20114188',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-08-09 12:00:00',
			end: '2023-08-29 14:59:00',
			image: 'Brilliant Fixation 3008.png',
			color: '#cc7f95',
			pos: '-5%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/20713150',
			show: true
		}
	],
	[
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2023-06-07 06:00:00',
			end: '2023-07-17 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/19122748',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2023-07-19 06:00:00',
			end: '2023-08-28 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/20049272',
			timezoneDependent: true,
			show: true
		}
	]
];

export default timeline;
