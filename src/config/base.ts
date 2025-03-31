export const locales = ['en', 'zh-Hans'] as const

export type LocaleKey = (typeof locales)[number]
