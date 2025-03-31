'use client'

import { useLingui } from '@lingui/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Bg from '@/assets/stardust/bg.png'
// import useUserInfo from '../../hooks/service/useUserInfo'

export default function Body({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const { i18n } = useLingui()


	useEffect(() => {
		document.body.className = i18n.locale === 'en' ? 'font-poppins' : 'family'
	}, [i18n.locale])
	if (pathname.startsWith(`/${i18n.locale}/bounty/details`) || pathname.startsWith(`/${i18n.locale}/bounty`)) return children

	return (
		<>
			<div className="tail-layout-body">{children}</div>
		</>
	)
}
