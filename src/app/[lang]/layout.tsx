import { LinguiClientProvider } from "@/lingui/LinguiClientProvider";
import {  setServerI18n } from "~/src/lingui/initLingui";
import Providers from "./providers";
import linguiConfig from "~/lingui.config";
import { PropsWithChildren } from "react";
import { allMessages } from "~/src/lingui/appRouterI18n";

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}
export default async function RootLayout({ children }: PropsWithChildren) {
  const { lang } = await setServerI18n();
  return (
    <>
      <LinguiClientProvider
        initialLocale={lang}
        initialMessages={allMessages[lang]}
      >
        <Providers>{children}</Providers>
      </LinguiClientProvider>
    </>
  );
}
