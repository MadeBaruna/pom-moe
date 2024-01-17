import type { Timeline } from '$types';

const timeline: Array<Timeline[]> = [
	[
		{
			name: 'Boulder Town Martial Exhibition',
			start: '2023-12-06 12:00:00',
			end: '2023-12-25 03:59:00',
			image: 'Boulder Town Martial Exhibition.png',
			color: '#e19e7e',
			pos: '30%, -30%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/23404782',
			show: true
		},
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
		}
	],
	[
		{
			name: 'Planar Fissure',
			start: '2023-11-24 04:00:00',
			end: '2023-12-01 03:59:00',
			image: 'Planar Fissure.png',
			color: '#6a77f4',
			pos: '30%, -40%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22906842',
			show: true
		},
		{
			name: 'Stellar Shadowseeker',
			start: '2023-12-01 12:00:00',
			end: '2023-12-11 03:59:00',
			image: 'Stellar Shadowseeker.png',
			color: '#ffe9cd',
			pos: '30%, -40%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22906842',
			show: true
		},
		{
			name: 'Garden of Plenty',
			start: '2023-12-15 04:00:00',
			end: '2023-12-22 03:59:00',
			image: 'Garden of Plenty.png',
			color: '#f3cc4b',
			pos: '30%, -40%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/23288207',
			show: true
		},
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
		}
	],
	[
		{
			name: 'A Foxian Tale of the Haunted',
			start: '2023-11-15 06:00:00',
			end: '2023-12-25 03:59:00',
			image: 'A Foxian Tale of the Haunted.png',
			color: '#4ca0d2',
			pos: '30%, -30%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22976887',
			timezoneDependent: true,
			show: true
		},
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
		}
	],
	[
		{
			name: 'Contract Zero - Silver Wolf Warp Event',
			start: '2023-12-06 12:00:00',
			end: '2023-12-26 14:59:00',
			image: 'Contract Zero 2016.png',
			color: '#79b0f9',
			pos: '-5%, -8%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23404231',
			show: true
		},
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
		}
	],
	[
		{
			name: 'Bloom in Gloom - Huohuo Warp Event',
			start: '2023-11-15 06:00:00',
			end: '2023-12-06 11:59:00',
			image: 'Bloom in Gloom 2014.png',
			color: '#dcedc9',
			pos: '5%, -8%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22906842',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Thorns of Scented Crown - Argenti Warp Event',
			start: '2023-12-06 12:00:00',
			end: '2023-12-26 14:59:00',
			image: 'Thorns of Scented Crown 2015.png',
			color: '#e97762',
			pos: '5%, 8%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23404231',
			show: true
		},
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
		}
	],
	[
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-11-15 06:00:00',
			end: '2023-12-06 11:59:00',
			image: 'Brilliant Fixation 3014.png',
			color: '#cee6da',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22906842',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-12-06 12:00:00',
			end: '2023-12-26 14:59:00',
			image: 'Brilliant Fixation 3015.png',
			color: '#e9817d',
			pos: '0%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23404282',
			show: true
		},
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
		}
	],
	[
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2023-12-06 12:00:00',
			end: '2023-12-26 14:59:00',
			image: 'Bygone Reminiscence 3016.png',
			color: '#aa9ed8',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/23404282',
			show: true
		},
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
		}
	],
	[
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2023-11-15 06:00:00',
			end: '2023-12-25 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22956958',
			timezoneDependent: true,
			show: true
		},
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
		}
	]
];

export default timeline;
