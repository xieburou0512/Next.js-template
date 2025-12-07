'use server-only'

import { setI18n } from '@lingui/react/server'
import { allI18nInstances } from './appRouterI18n'
import { cookies, headers } from 'next/headers'
import { I18n } from '@lingui/core'
type SupportedLocales = string

export type PageLangParam = {
	params: Promise<{ lang: string }>
}

export const getI18nInstance = (locale: SupportedLocales): I18n => {
	if (!allI18nInstances[locale]) {
		console.warn(`No i18n instance found for locale "${locale}"`)
	}
	return allI18nInstances[locale]! || allI18nInstances['en']!
}


export const initLingui = (lang: string) => {
	const i18n = getI18nInstance(lang)
	setI18n(i18n)
	return i18n
}
