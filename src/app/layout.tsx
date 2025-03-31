import type { Metadata } from "next";
import "./globals.css";
import { setServerI18n } from "@/lingui/serverI18n";
import Provider from "./[lang]/provider";

export const metadata: Metadata = {
  title: "Xieburou ",
  description: "Xieburou",
};
type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: Readonly<Props>) {
  const { lang } = await setServerI18n();

  return (
    <html lang={lang} className={""}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
