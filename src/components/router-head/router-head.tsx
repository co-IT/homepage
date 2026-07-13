import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { SEO_NOINDEX_CONTENT, parseSeoExcludedRoutes, routeMatchesAnyPattern } from '~/seo/excluded-routes';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const location = useLocation();
  const seoExcludedRoutes = parseSeoExcludedRoutes(import.meta.env.PUBLIC_SEO_EXCLUDED_ROUTES);
  const hasRouteRobotsMeta = head.meta.some(meta => meta.name?.toLowerCase() === 'robots');
  const shouldRenderRobotsMeta =
    routeMatchesAnyPattern(location.url.pathname, seoExcludedRoutes) && !hasRouteRobotsMeta;

  return (
    <>
      <title>{head.title}</title>

      <link rel='canonical' href={location.url.href} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      {shouldRenderRobotsMeta && <meta name='robots' content={SEO_NOINDEX_CONTENT} />}

      {head.meta.map((meta, key) => (
        <meta key={key} {...meta} />
      ))}

      {head.links.map((link, key) => (
        <link key={key} {...link} />
      ))}

      {head.styles.map((style, key) => {
        return (
          <style key={key} {...style.props}>
            {style.style}
          </style>
        );
      })}
    </>
  );
});
