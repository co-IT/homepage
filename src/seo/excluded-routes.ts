export const SEO_NOINDEX_CONTENT = 'noindex,nofollow';

export const parseSeoExcludedRoutes = (routes: string | undefined) =>
  routes
    ?.split(/[\n,]/)
    .map(route => route.trim())
    .filter(route => route.length > 0) ?? [];

const normalizePathname = (pathname: string) => {
  if (pathname === '/') {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

export const routeMatchesPattern = (route: string, pattern: string) => {
  if (pattern === '/*') {
    return true;
  }

  const normalizedRoute = normalizePathname(route);

  if (pattern.endsWith('*')) {
    return normalizedRoute.startsWith(pattern.slice(0, -1));
  }

  return normalizedRoute === normalizePathname(pattern);
};

export const routeMatchesAnyPattern = (route: string, patterns: readonly string[]) =>
  patterns.some(pattern => routeMatchesPattern(route, pattern));
