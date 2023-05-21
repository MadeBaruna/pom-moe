import { browser } from '$app/environment';
import { loadTranslations, locale } from '$utils/translation';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const defaultLocale = browser ? navigator.languages[0].substring(0, 2) || 'en' : 'en';
	const initLocale = locale.get() || defaultLocale;
	await loadTranslations(initLocale, pathname);

	return {};
};
