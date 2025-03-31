'use client'
import { useLingui } from '@lingui/react'
import { setCookie } from 'cookies-next'
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = LinkProps & {
	children?: React.ReactNode
	className?: string
}

export const LinguiLink = ({ href, children, ...props }: Props) => {
	const { i18n } = useLingui()
	return (
		<Link href={`/${i18n.locale}${href}`} {...props}>
			{children}
		</Link>
	)
}

export const useChangeLang = () => {
	const { i18n } = useLingui()
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const changeLang = (lang: string) => {
		if (i18n.locale !== lang) {
			const _pathname = pathname.replace(`/${i18n.locale}`, `/${lang}`)
			const url = `${_pathname}?${searchParams}`
			router.replace(url)
			setCookie('locale', lang)
		}
	}

	return changeLang
}
