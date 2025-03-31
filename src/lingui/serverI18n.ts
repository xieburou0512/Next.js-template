'use server-only'

import { setI18n } from '@lingui/react/server'
import { allI18nInstances } from './appRouterI18n'
import { cookies, headers } from 'next/headers'

const serverI18n = (lang: string) => {
	const i18n = allI18nInstances[lang]
	return {
		lang,
		i18n,
	}
}

export const setServerI18n = () => {
	const headersList = headers()
	const lang = cookies().get('locale')?.value || 'en'

	const { i18n } = serverI18n(lang)
	setI18n(i18n)

	return { i18n, lang }
}
