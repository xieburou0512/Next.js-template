import { type NextRequest, NextResponse, userAgent } from 'next/server';

import linguiConfig from '../lingui.config';

const { locales } = linguiConfig;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  response.cookies.set({
    name: 'CORE_VIEWPORT',
    value: viewport,
    path: '/',
  });

  if (request.nextUrl.href.includes('bug=init')) {
    response.cookies.set({
      name: 'bug',
      value: 'init',
      path: '/',
    });
  } else if (request.nextUrl.href.includes('bug=remove')) {
    response.cookies.delete('bug');
  }
  // 检查路径是否包含语言前缀
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];
    // 设置语言相关的 cookie
    response.cookies.set({
      name: 'locale',
      value: locale || '',
      path: '/',
    });
    response.cookies.set({
      name: 'CORE_LANG',
      value: locale || 'en',
      path: '/',
    });
    return response;
  }

  // 获取请求的语言设置
  const locale = getRequestLocale(request);
  response.cookies.set({
    name: 'CORE_LANG',
    value: locale,
    path: '/',
  });

  // 重定向到带有语言前缀的路径
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// 从请求头中获取语言设置
function getRequestLocale(request: NextRequest): string {
  // 1. 先检查 cookie
  const cookieLocale = request.cookies.get('locale')?.value;

  // 2. 然后检查 Accept-Language 头
  const acceptLanguage = request.headers.get('accept-language');
  const preferredLocale = acceptLanguage?.split(',')[0]?.split('-')[0];

  // 3. 默认语言
  const defaultLocale = 'en';

  // 4. 验证是否在支持的语言列表中
  const locale = cookieLocale || preferredLocale || defaultLocale;

  // 确保 locale 是支持的语言
  if (locales.includes(locale as any)) {
    return locale;
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|js|mp4|mtl|obj|json|ttf|spline)$).*)',
  ],
};
