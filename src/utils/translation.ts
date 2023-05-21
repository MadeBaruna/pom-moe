import type { KeyValueObject } from '$types';
import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

export const languages: KeyValueObject = {
	'zh-CN': '中文(简体)',
	'zh-Hant': '中文(繁體)',
	en: 'English',
	fr: 'Français',
	de: 'Deutsch',
	ja: '日本語',
	ko: '한국어',
	th: 'ภาษาไทย',
	vi: 'Tiếng Việt',
	id: 'Indonesia',
	es: 'Español',
	pt: 'Português',
	ru: 'Русский'
};

type Params = {
	filename: string;
};

const config: Config<Params> = {
	initLocale: 'en',
	fallbackLocale: 'en',
	loaders: [
		...Object.entries(languages).map(([locale]) => ({
			locale,
			key: 'common',
			loader: async () => await import(`../locales/common/${locale}.json`)
		})),
		{
			locale: 'en',
			key: '',
			loader: async () => await import('../locales/strings/en.json')
		}
	]
};

export const { t, locale, locales, loading, loadTranslations, addTranslations } = new i18n(config);
