import 'server-only';

import { setI18n } from '@lingui/react/server';
import { allI18nInstances } from './appRouterI18n';
import { I18n } from '@lingui/core';
import { cookies } from 'next/headers';

type SupportedLocales = string;

export type PageLangParam = {
  params: Promise<{ lang: string }>;
};

export const getI18nInstance = (locale: SupportedLocales): I18n => {
  if (!allI18nInstances[locale]) {
    console.warn(`No i18n instance found for locale "${locale}"`);
  }
  return allI18nInstances[locale]! || allI18nInstances['en']!;
};

export const initLingui = (lang: string) => {
  const i18n = getI18nInstance(lang);
  setI18n(i18n);
  return i18n;
};

export const setServerI18n = async () => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('locale')?.value || 'en';

  const i18n = initLingui(lang);

  return { lang, i18n };
};
