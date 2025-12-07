import type { Metadata } from "next";
import "./globals.css";
import Provider from "./[lang]/provider";
import { PropsWithChildren } from "react";
import { PageLangParam } from "../lingui/initLingui";

export const metadata: Metadata = {
  title: "Xieburou ",
  description: "Xieburou",
};

export default async function RootLayout({ children,params }: PropsWithChildren<PageLangParam>) {
 const lang = (await params).lang;

  return (
    <html lang={lang} className={""}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
