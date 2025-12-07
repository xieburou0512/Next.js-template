import { formatter } from '@lingui/format-po'

/** @type {import('@lingui/conf').LinguiConfig} */
export default {
	locales: ['en', 'zh-Hans'],
	sourceLocale: 'en',
	fallbackLocales: {
		default: 'en'
	},
	catalogs: [
		{
			path: 'src/locales/{locale}',
			include: ['src/']
		}
	],
	format: formatter({
		lineNumbers: false,
		origins: false,
		printLinguiId: true,
	}),
}
