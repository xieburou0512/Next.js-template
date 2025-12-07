import { LinguiClientProvider } from "@/lingui/LinguiClientProvider";
import { initLingui, PageLangParam } from "~/src/lingui/initLingui";
import Providers from "./providers";
import linguiConfig from "~/lingui.config";
import { PropsWithChildren } from "react";
import { allMessages } from "~/src/lingui/appRouterI18n";

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}
export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PageLangParam>) {
  const lang = (await params).lang;
  initLingui(lang);
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
