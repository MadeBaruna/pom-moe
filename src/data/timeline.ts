import type { Timeline } from '$types';

const timeline: Array<Timeline[]> = [
	[
		{
			name: 'The Legend of Galactic Baseballer',
			start: '2024-05-29 12:00:00',
			end: '2024-06-17 03:59:00',
			image: 'The Legend of Galactic Baseballer.png',
			color: '#edce76',
			pos: '30%, -25%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/27977689',
			show: true
		},
		{
			name: 'Planar Fissure',
			start: '2024-06-28 04:00:00',
			end: '2024-04-05 03:59:00',
			image: 'Planar Fissure.png',
			color: '#6262ff',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29896988',
			show: true
		},
		{
			name: 'Realm of the Strange',
			start: '2024-07-19 04:00:00',
			end: '2024-07-26 03:59:00',
			image: 'Realm of the Strange.png',
			color: '#6262ff',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29896988',
			show: true
		}
	],
	[
		{
			name: 'All About Boothill...',
			start: '2024-05-17 04:00:00',
			end: '2024-06-03 03:59:00',
			image: 'AllAboutBoothill.png',
			color: '#466cf1',
			pos: '30%, -25%',
			zoom: 1.5,
			url: 'https://www.hoyolab.com/article/27977689',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Stellar Shimmer',
			start: '2024-07-05 12:00:00',
			end: '2024-07-29 03:59:00',
			image: 'Stellar Shimmer.png',
			color: '#466cf1',
			pos: '30%, -25%',
			zoom: 1.5,
			url: 'https://www.hoyolab.com/article/29896988',
			show: true
		}
	],
	[
		{
			name: 'Clockie: Dreamjoy Memoir',
			start: '2024-05-08 06:00:00',
			end: '2024-06-17 03:59:00',
			image: 'Clockie Dreamjoy Memoir.png',
			color: '#d5d3d2',
			pos: '30%, -25%',
			zoom: 1.5,
			url: 'https://www.hoyolab.com/article/28207325',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Origami Bird Clash',
			start: '2024-06-21 12:00:00',
			end: '2024-07-29 03:59:00',
			image: 'Origami Bird Clash.png',
			color: '#6daffb',
			pos: '30%, -50%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/29896988',
			show: true
		}
	],
	[
		{
			name: 'Sunset Clause - Topaz & Numby Warp Event',
			start: '2024-05-08 06:00:00',
			end: '2024-05-29 11:59:00',
			image: 'Sunset Clause 2030.jpg',
			color: '#c1c4f8',
			pos: '0%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/28251947',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Foreseen, Foreknown, Foretold - Fu Xuan Warp Event',
			start: '2024-05-29 12:00:00',
			end: '2024-06-18 15:00:00',
			image: 'Foreseen, Foreknown, Foretold 2032.jpg',
			color: '#e2a6cc',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29127114',
			show: true
		},
		{
			name: 'Floral Triptych - Ruan Mei Warp Event',
			start: '2024-06-19 06:00:00',
			end: '2024-07-10 11:59:00',
			image: 'Floral Triptych 2034.jpg',
			color: '#ccdde1',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29992036',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Thorns of Scented Crown - Argenti Warp Event',
			start: '2024-07-10 12:00:00',
			end: '2024-07-30 15:00:00',
			image: 'Thorns of Scented Crown 2036.jpg',
			color: '#e97762',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29896988',
			show: true
		}
	],
	[
		{
			name: 'Just Intonation - Robin Warp Event',
			start: '2024-05-08 06:00:00',
			end: '2024-05-29 11:59:00',
			image: 'Just Intonation 2029.jpg',
			color: '#ff6934',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/28251947',
			show: true,
			timezoneDependent: true
		},
		{
			name: "Dusty Trail's Lone Star - Boothill Warp Event",
			start: '2024-05-29 12:00:00',
			end: '2024-06-18 15:00:00',
			image: "Dusty Trail's Lone Star 2031.jpg",
			color: '#f1f1ef',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29127114',
			show: true
		},
		{
			name: 'Firefull Flyshine - Firefly Warp Event',
			start: '2024-06-19 06:00:00',
			end: '2024-07-10 11:59:00',
			image: 'Firefull Flyshine 2033.jpg',
			color: '#dcffe5',
			pos: '-5%, -2%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29992036',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Lien on Life, Lease on Fate - Jade Warp Event',
			start: '2024-07-10 12:00:00',
			end: '2024-07-30 15:00:00',
			image: 'Lien on Life, Lease on Fate 2035.jpg',
			color: '#d89bde',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29896988',
			show: true
		}
	],
	[
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2024-05-08 06:00:00',
			end: '2024-05-29 11:59:00',
			image: 'Brilliant Fixation 3029.jpg',
			color: '#c99ae4',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/28252074',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2024-05-29 12:00:00',
			end: '2024-06-18 15:00:00',
			image: 'Brilliant Fixation 3031.jpg',
			color: '#cac3bb',
			pos: '0%, 10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29127114',
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2024-06-19 06:00:00',
			end: '2024-07-10 11:59:00',
			image: 'Brilliant Fixation 3033.jpg',
			color: '#a3d1aa',
			pos: '0%, 10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29992142',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2024-07-10 12:00:00',
			end: '2024-07-30 15:00:00',
			image: 'Brilliant Fixation 3035.jpg',
			color: '#d89bde',
			pos: '0%, 10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29992142',
			show: true
		}
	],
	[
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2024-05-08 06:00:00',
			end: '2024-05-29 11:59:00',
			image: 'Bygone Reminiscence 3030.jpg',
			color: '#f7f6fd',
			pos: '0%, 10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/28252074',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2024-05-29 12:00:00',
			end: '2024-06-18 15:00:00',
			image: 'Bygone Reminiscence 3032.jpg',
			color: '#fbc6e6',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29127114',
			show: true
		},
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2024-06-19 06:00:00',
			end: '2024-07-10 11:59:00',
			image: 'Bygone Reminiscence 3034.jpg',
			color: '#e9e9e9',
			pos: '0%, -10%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29992142',
			show: true,
			timezoneDependent: true
		},
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2024-07-10 12:00:00',
			end: '2024-07-30 15:00:00',
			image: 'Bygone Reminiscence 3036.jpg',
			color: '#e97762',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29127114',
			show: true
		}
	],
	[
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2024-05-08 06:00:00',
			end: '2024-06-17 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/28163838',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2024-06-19 06:00:00',
			end: '2024-07-29 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/29897602',
			timezoneDependent: true,
			show: true
		}
	]
];

export default timeline;
