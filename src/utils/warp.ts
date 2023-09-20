import { bannersMap } from '$data/banners';
import type {
	BannerSummary,
	BannerType,
	GachaItem,
	GachaResponse,
	ItemType,
	WarpItem
} from '$types';
import { post } from '$utils/api';
import { db } from './db';
import { slugify } from './slugify';

const itemType: { [key: string]: ItemType } = {
	Character: 'character',
	'Light Cone': 'lightcone'
};

export async function checkUrl(url: string) {
	let u: URL;
	try {
		u = new URL(url);
	} catch (err) {
		console.log(err);
		throw new Error('invalid_url');
	}

	try {
		const { data, error } = await post<GachaResponse, { url: string }>('/warp', { url });
		if (error) {
			throw new Error(error.message);
		}

		if (data.retcode === -101) {
			throw new Error('expired');
		}

		if (data.retcode !== 0) {
			throw new Error(data.message);
		}

		return u;
	} catch (err) {
		console.log(err);
		throw new Error('connection_failed');
	}
}

async function processWarps(banner: BannerType, warps: GachaItem[]) {
	const saved = await db[banner].toArray();
	const itemCount = (await db.items.toArray()).reduce((acc, item) => {
		acc.set(item.name, item.count);
		return acc;
	}, new Map<string, number>());

	const pity = {
		4: 0,
		5: 0
	};

	const total = {
		4: 0,
		5: 0
	};

	const up = {
		4: false,
		5: false
	};

	let currentPity = 1;
	let guaranteed = 0;
	// 0 = los 50:50
	// 1 = win 50:50
	// 2 = guaranteed

	for (const warp of saved) {
		const bannerCode = Number(warp.bannerCode);
		const currentBanner = bannersMap[bannerCode];

		pity[4]++;
		pity[5]++;

		if (warp.rarity === 4) {
			currentPity = pity[4];
			pity[4] = 0;
			total[4]++;

			if (up[4]) {
				guaranteed = 2;
				up[4] = false;
			} else if ((currentBanner?.featured4 ?? []).includes(warp.name)) {
				guaranteed = 1;
				up[4] = false;
			} else {
				guaranteed = 0;
				up[4] = true;
			}
		} else if (warp.rarity === 5) {
			currentPity = pity[5];
			pity[5] = 0;
			total[5]++;

			if (up[5]) {
				guaranteed = 2;
				up[5] = false;
			} else if ((currentBanner?.featured5 ?? []).includes(warp.name)) {
				guaranteed = 1;
				up[5] = false;
			} else {
				guaranteed = 0;
				up[5] = true;
			}
		}

		warp.pity = currentPity;
		warp.guaranteed = guaranteed;
	}

	const warpItems = [];
	for (const warp of warps) {
		const bannerCode = Number(warp.gacha_id);
		const currentBanner = bannersMap[bannerCode];

		const name = slugify(warp.name);
		itemCount.set(name, (itemCount.get(name) ?? 0) + 1);

		pity[4]++;
		pity[5]++;

		if (warp.rank_type === '4') {
			currentPity = pity[4];
			pity[4] = 0;
			total[4]++;

			if (up[4]) {
				guaranteed = 2;
				up[4] = false;
			} else if ((currentBanner?.featured4 ?? []).includes(name)) {
				guaranteed = 1;
				up[4] = false;
			} else {
				guaranteed = 0;
				up[4] = true;
			}
		} else if (warp.rank_type === '5') {
			currentPity = pity[5];
			pity[5] = 0;
			total[5]++;

			if (up[5]) {
				guaranteed = 2;
				up[5] = false;
			} else if ((currentBanner?.featured5 ?? []).includes(name)) {
				guaranteed = 1;
				up[5] = false;
			} else {
				guaranteed = 0;
				up[5] = true;
			}
		}

		const item: WarpItem = {
			id: warp.id,
			bannerCode: bannerCode,
			itemId: warp.item_id,
			name,
			time: warp.time,
			type: itemType[warp.item_type] as ItemType,
			rarity: Number(warp.rank_type),
			pity: currentPity,
			guaranteed,
			raw: JSON.stringify(warp)
		};
		warpItems.push(item);
	}

	const summary: BannerSummary = {
		banner,
		total: {
			all: saved.length + warpItems.length,
			4: total[4],
			5: total[5]
		},
		pity: {
			4: pity[4],
			5: pity[5]
		},
		up: {
			4: up[4],
			5: up[5]
		}
	};

	await db[banner].bulkPut(saved);
	await db[banner].bulkAdd(warpItems);
	await db.items.bulkPut([...itemCount].map(([name, count]) => ({ name, count })));
	await db.bannerSummary.put(summary);
}

export async function processBannerData(banners: Map<BannerType, GachaItem[]>) {
	for (const [banner, warps] of banners) {
		await processWarps(banner, warps);
	}
}
