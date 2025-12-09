import type { Metadata } from "next";
import "./globals.css";
import Provider from "./[lang]/provider";
import { PropsWithChildren } from "react";
import { setServerI18n } from "../lingui/initLingui";

export const metadata: Metadata = {
  title: "Xieburou ",
  description: "Xieburou",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const { lang } = await setServerI18n();

  return (
    <html lang={lang} className={""}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
