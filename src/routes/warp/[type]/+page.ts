import { bannerTypes, banners } from '$data/banners';
import type { Banner, BannerType } from '$types';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const type = params.type as BannerType;
	if (!bannerTypes.includes(type)) {
		throw error(404, 'Not found');
	}

	const list = banners[type].reduce((acc, banner) => {
		acc[banner.code] = banner;
		return acc;
	}, {} as Record<number, Banner>);

	return { banners: list, banner: banners[type][0] };
};
