import type { Timeline } from '$types';

const timeline: Array<Timeline[]> = [
	[
		{
			name: 'Garden of Plenty',
			start: '2024-03-16 04:00:00',
			end: '2024-03-23 03:59:00',
			image: 'Garden of Plenty.png',
			color: '#fec245',
			pos: '30%, -10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24773304',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'Planar Fissure',
			start: '2024-02-22 04:00:00',
			end: '2024-02-29 03:59:00',
			image: 'Planar Fissure.png',
			color: '#6262ff',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24773304',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Penacony Food Fest',
			start: '2024-03-06 12:00:00',
			end: '2024-03-18 03:59:00',
			image: 'Penacony Food Fest.png',
			color: '#ffcd73',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24773304',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'Realm of the Strange',
			start: '2024-01-26 04:00:00',
			end: '2024-02-02 03:59:00',
			image: 'Realm of the Strange.png',
			color: '#6a77f4',
			pos: '30%, -40%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/24300855',
			show: true
		},
		{
			name: 'Dreamjolt TV',
			start: '2024-02-29 12:00:00',
			end: '2024-03-25 03:59:00',
			image: 'Dreamjolt TV.png',
			color: '#e6ddad',
			pos: '0%, -25%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24773304',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'Planar Fissure',
			start: '2024-01-10 04:00:00',
			end: '2024-01-17 03:59:00',
			image: 'Planar Fissure.png',
			color: '#6a77f4',
			pos: '30%, -40%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/23764233',
			show: true
		},
		{
			name: 'Virtual Scentventure',
			start: '2024-01-17 12:00:00',
			end: '2024-02-05 03:59:00',
			image: 'Virtual Scentventure.png',
			color: '#7bd0fa',
			pos: '30%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24358259',
			show: true
		},
		{
			name: "Hanu's Prison Break",
			start: '2024-02-08 06:00:00',
			end: '2024-03-25 03:59:00',
			image: 'Hanus Prison Break.png',
			color: '#b1bfc4',
			pos: '0%, -25%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24773304',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'Critter Pick',
			start: '2023-12-27 06:00:00',
			end: '2024-02-05 03:59:00',
			image: 'Critter Pick.png',
			color: '#9abfff',
			pos: '40%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23804498',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Dreamchaser Bulletin',
			start: '2024-02-06 06:00:00',
			end: '2024-03-25 03:59:00',
			image: 'Dreamchaser Bulletin.png',
			color: '#e3d7c1',
			pos: '0%, -25%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24940901',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'A Lost Soul - Blade Warp Event',
			start: '2023-12-27 06:00:00',
			end: '2024-01-17 14:59:00',
			image: 'A Lost Soul 2018.jpg',
			color: '#7d90c3',
			pos: '-5%, 8%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23851896',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Nessun Dorma - Kafka Warp Event',
			start: '2024-01-17 12:00:00',
			end: '2024-02-05 14:59:00',
			image: 'Nessun Dorma 2020.jpg',
			color: '#bfa4ed',
			pos: '0%, 3%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24375691',
			show: true
		},
		{
			name: 'Epochal Spectrum - Dan Heng Warp Event',
			start: '2024-02-06 06:00:00',
			end: '2024-02-29 14:59:00',
			image: 'Epochal Spectrum 2022.jpg',
			color: '#b0e4e5',
			pos: '0%, 3%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24943079',
			show: true,
			timezoneDependent: true
		}
	],
	[
		{
			name: 'Floral Triptych - Ruan Mei Warp Event',
			start: '2023-12-27 06:00:00',
			end: '2024-01-17 14:59:00',
			image: 'Floral Triptych 2017.jpg',
			color: '#ccdde1',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23851896',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Panta Rhei - Dr. Ratio Warp Event',
			start: '2024-01-17 12:00:00',
			end: '2024-02-05 14:59:00',
			image: 'Panta Rhei 2019.jpg',
			color: '#89ebfc',
			pos: '0%, 3%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24375691',
			show: true
		},
		{
			name: 'Ripples in Reflection - Black Swan Warp Event',
			start: '2024-02-06 06:00:00',
			end: '2024-02-29 14:59:00',
			image: 'Ripples in Reflection 2021.jpg',
			color: '#d1b9ff',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24943079',
			show: true,
			timezoneDependent: true
		}
	],
	[
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-12-27 06:00:00',
			end: '2024-01-17 14:59:00',
			image: 'Brilliant Fixation 3017.jpg',
			color: '#e9e9e9',
			pos: '0%, -10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23851972',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2024-01-17 12:00:00',
			end: '2024-02-05 14:59:00',
			image: 'Brilliant Fixation 3019.jpg',
			color: '#a6bed4',
			pos: '0%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24375691',
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2024-02-06 06:00:00',
			end: '2024-02-29 14:59:00',
			image: 'Brilliant Fixation 3021.jpg',
			color: '#9d8fde',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24943321',
			show: true,
			timezoneDependent: true
		}
	],
	[
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2023-12-27 06:00:00',
			end: '2024-01-17 14:59:00',
			image: 'Bygone Reminiscence 3018.jpg',
			color: '#7d90c3',
			pos: '0%, 8%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23851972',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2024-01-17 12:00:00',
			end: '2024-02-05 14:59:00',
			image: 'Bygone Reminiscence 3020.jpg',
			color: '#e599af',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24375691',
			show: true
		},
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2024-02-06 06:00:00',
			end: '2024-02-29 14:59:00',
			image: 'Bygone Reminiscence 3022.jpg',
			color: '#9fc6bb',
			pos: '0%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/24943321',
			show: true,
			timezoneDependent: true
		}
	],
	[
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2023-12-27 06:00:00',
			end: '2024-02-05 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23807924',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2024-02-06 06:00:00',
			end: '2024-03-25 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23807924',
			timezoneDependent: true,
			show: true
		}
	]
];

export default timeline;
