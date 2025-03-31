import { LinguiClientProvider } from '@/lingui/LinguiClientProvider'
import { setServerI18n } from '@/lingui/serverI18n'
import Providers from './providers'
type Props = {
	children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<Props>) {
	const { i18n, lang } = await setServerI18n()

	return (
		<>
			<LinguiClientProvider initialLocale={lang} initialMessages={i18n.messages}>
				<Providers>{children}</Providers>
			</LinguiClientProvider>
		</>
	)
}
