import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import { parseSeoExcludedRoutes } from '../../src/seo/excluded-routes';
import baseConfig from '../../vite.config';
import { filterSitemapPlugin } from './filter-sitemap-plugin';
import { getOrigin } from './get-origin';
import { robotsTxtPlugin } from './robots-txt-plugin';

export default extendConfig(baseConfig, () => {
  const origin = getOrigin();
  const seoExcludedRoutes = parseSeoExcludedRoutes(process.env.PUBLIC_SEO_EXCLUDED_ROUTES);

  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan']
      }
    },
    plugins: [
      staticAdapter({
        origin
      }),
      filterSitemapPlugin({
        excludedRoutes: seoExcludedRoutes,
        sitemapPath: 'dist/sitemap.xml'
      }),
      robotsTxtPlugin({
        userAgent: '*',
        //excludedRoutes: seoExcludedRoutes,
        excludedRoutes: [],
        robotsPath: 'dist/robots.txt',
        sitemapURL: `${origin}/sitemap.xml`
      })
    ]
  };
});
