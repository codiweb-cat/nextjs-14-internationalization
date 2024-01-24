let locales = ['es', 'en'];

function getLocale(request) {
  const acceptLanguage = request.headers.get('Accept-Language');

  if (!acceptLanguage) {
    return 'es';
  }
  const requestLocales = acceptLanguage.split(',');
  for (let i = 0; i < requestLocales.length; i++) {
    const locale = requestLocales[i].split(';')[0].trim();
    if (locales.includes(locale)) {
      return locale;
    }
  }
  return 'es';
} 

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}