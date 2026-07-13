import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';
import { getOrigin } from './get-origin';
import { robotsTxtPlugin } from './robots-txt-plugin';

const sitemapExcludedPaths = ['/kontrakte/', '/cyber/*', '/produkte/passwort-manager/'] as const;

export default extendConfig(baseConfig, () => {
  const origin = getOrigin();

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
        //exclude: [...sitemapExcludedPaths]
      }),
      robotsTxtPlugin({
        userAgent: '*',
        sitemap: `${origin}/sitemap.xml`
      })
    ]
  };
});
