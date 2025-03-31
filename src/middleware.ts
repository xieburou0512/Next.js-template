import { type NextRequest, NextResponse, userAgent } from 'next/server'

import linguiConfig from '../lingui.config'
import { cookies } from 'next/headers'


const { locales } = linguiConfig

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const response = NextResponse.next()
	const { device } = userAgent(request)
	const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
	response.cookies.set('CORE_VIEWPORT', viewport)

	if (request.nextUrl.href.includes('bug=init')) {
		response.cookies.set('bug', 'init')
	} else if (request.nextUrl.href.includes('bug=remove')) {
		response.cookies.delete('bug')
	}

	if (['/twitter', '/discord', '/unsubscribe'].includes(pathname)) {
		return response
	}

	const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

	if (pathnameHasLocale) {
		const locale = pathname.split('/')[1]
		response.cookies.set('locale', locale || '')
		response.cookies.set('CORE_LANG', locale)
		return response
	}

	const locale = getRequestLocale()
	response.cookies.set('CORE_LANG', locale)

	request.nextUrl.pathname = `/${locale}${pathname}`
	return NextResponse.redirect(request.nextUrl)
}

function getRequestLocale(): string {
	const cookieStore = cookies()
	const activeLocale = `${cookieStore.get('locale')?.value || 'en'}`
	return activeLocale
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|js|mp4|mtl|obj|json|ttf|spline)$).*)'],
}
