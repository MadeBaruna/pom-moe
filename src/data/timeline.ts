import type { Timeline } from '$types';

const timeline: Array<Timeline[]> = [
	[
		{
			name: 'Realm of the Strange',
			start: '2023-11-03 04:00:00',
			end: '2023-11-10 03:59:00',
			image: 'Realm of the Strange.png',
			color: '#729de6',
			pos: '30%, -30%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22522972',
			show: true
		}
	],
	[
		{
			name: 'Planar Fissure',
			start: '2023-09-15 04:00:00',
			end: '2023-09-22 03:59:00',
			image: 'Planar Fissure.png',
			color: '#5456ff',
			pos: '20%, -50%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/21614666',
			show: true
		},
		{
			name: 'Garden of Plenty',
			start: '2023-10-02 04:00:00',
			end: '2023-10-09 03:59:00',
			image: 'Garden of Plenty.png',
			color: '#fbd230',
			pos: '30%, -50%',
			zoom: 1,
			url: 'https://www.hoyolab.com/article/21613902',
			show: true
		},
		{
			name: 'Planar Fissure',
			start: '2023-10-20 04:00:00',
			end: '2023-10-27 03:59:00',
			image: 'Planar Fissure.png',
			color: '#6a77f4',
			pos: '30%, -40%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22183093',
			show: true
		},
		{
			name: 'Planar Infinity',
			start: '2023-10-27 12:00:00',
			end: '2023-11-13 03:59:00',
			image: 'Planar Infinity.png',
			color: '#bd98f1',
			pos: '30%, -30%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22556498',
			show: true
		}
	],
	[
		{
			name: 'Aurum Alley',
			start: '2023-08-31 12:00:00',
			end: '2023-09-18 03:59:00',
			image: 'Aurum Alley.png',
			color: '#a6bfe6',
			pos: '20%, -20%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/21264669',
			show: true
		},
		{
			name: 'Space Station Task Force',
			start: '2023-09-25 04:00:00',
			end: '2023-10-09 03:59:00',
			image: 'Space Station Task Force Tmp.png',
			color: '#92d6e7',
			pos: '30%, -30%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/21613902',
			show: true
		},
		{
			name: 'Aetherium Wars',
			start: '2023-10-11 06:00:00',
			end: '2023-11-13 03:59:00',
			image: 'Aetherium Wars.png',
			color: '#a2c2fd',
			pos: '30%, -10%',
			zoom: 1.2,
			url: 'https://www.hoyolab.com/article/22227545',
			timezoneDependent: true,
			show: true
		}
	],
	[
		{
			name: 'Butterfly on Swordtip - Seele Warp Event',
			start: '2023-10-27 12:00:00',
			end: '2023-11-14 14:59:00',
			image: 'Butterfly on Swordtip 2013.jpg',
			color: '#dfb6ff',
			pos: '5%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22556268',
			show: true
		}
	],
	[
		{
			name: 'Epochal Spectrum - Dan Heng • Imbibitor Lunae Warp Event',
			start: '2023-08-30 06:00:00',
			end: '2023-09-20 11:59:00',
			image: 'Epochal Spectrum 2009.png',
			color: '#7fb7b8',
			pos: '-5%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/21244006',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Foreseen, Foreknown, Foretold - Fu Xuan Warp Event',
			start: '2023-09-20 12:00:00',
			end: '2023-10-10 14:59:00',
			image: 'Foreseen, Foreknown, Foretold 2010.png',
			color: '#e2a6cc',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/21723945',
			show: true
		},
		{
			name: 'Gentle Eclipse of the Moon - Jingliu Warp Event',
			start: '2023-10-11 06:00:00',
			end: '2023-10-27 11:59:00',
			image: 'Gentle Eclipse of the Moon 2011.png',
			color: '#51aaff',
			pos: '5%, 13%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22226154',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Sunset Clause - Topaz & Numby Warp Event',
			start: '2023-10-27 12:00:00',
			end: '2023-11-14 14:59:00',
			image: 'Sunset Clause 2012.jpg',
			color: '#c1c4f8',
			pos: '5%, 3%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22556268',
			show: true
		}
	],
	[
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-08-30 06:00:00',
			end: '2023-09-20 11:59:00',
			image: 'Brilliant Fixation 3009.png',
			color: '#cff3ea',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/21244077',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-09-20 12:00:00',
			end: '2023-10-10 14:59:00',
			image: 'Brilliant Fixation 3010.png',
			color: '#fbc6e6',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/21244077',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-10-11 06:00:00',
			end: '2023-10-27 11:59:00',
			image: 'Brilliant Fixation 3011.png',
			color: '#c6d2ff',
			pos: '0%, 0%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22226154',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Brilliant Fixation - Light Cone Warp Event',
			start: '2023-10-27 12:00:00',
			end: '2023-11-14 14:59:00',
			image: 'Brilliant Fixation 3012.jpg',
			color: '#f7f6fd',
			pos: '0%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22556268',
			show: true
		}
	],
	[
		{
			name: 'Bygone Reminiscence - Light Cone Warp Event',
			start: '2023-10-27 12:00:00',
			end: '2023-11-14 14:59:00',
			image: 'Bygone Reminiscence 3013.jpg',
			color: '#dfb6ff',
			pos: '0%, 5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/22556268',
			show: true
		}
	],
	[
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2023-08-30 06:00:00',
			end: '2023-10-09 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/21197343',
			timezoneDependent: true,
			show: true
		},
		{
			name: 'Nameless Honor - Battle Pass',
			start: '2023-10-11 06:00:00',
			end: '2023-11-13 03:59:00',
			image: 'Nameless Honor.png',
			color: '#ff9d92',
			pos: '30%, -5%',
			zoom: 2,
			url: 'https://www.hoyolab.com/article/21995336',
			timezoneDependent: true,
			show: true
		}
	]
];

export default timeline;
