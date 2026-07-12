import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';
import { getOrigin } from './get-origin';
import { robotsTxtPlugin } from './robots-txt-plugin';

const sitemapExcludedPaths = new Set([
  '/kontrakte/',
  '/cyber/cyber-portal/',
  '/cyber/cyber-portal/allianz/',
  '/cyber/cyber-portal/gesundheitswesen/',
  '/cyber/ihre-marke/',
  '/cyber/phishing/',
  '/cyber/allianz/',
  '/cyber/cyber-lounge/',
  '/produkte/passwort-manager/',
  '/cyber/cyber-portal/release-notes/'
]);

const normalizePathname = (pathname: string) => {
  const trimmed = pathname.trim();
  if (trimmed === '' || trimmed === '/') {
    return '/';
  }

  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
};

const filterSitemapPlugin = () => {
  return {
    name: 'filter-sitemap-entries',
    enforce: 'post' as const,
    apply: 'build' as const,
    closeBundle: {
      sequential: true,
      async handler() {
        const sitemapPath = resolve(process.cwd(), 'dist', 'sitemap.xml');
        let sitemap: string;

        try {
          sitemap = await fs.readFile(sitemapPath, 'utf8');
        } catch {
          return;
        }

        const filtered = sitemap
          .replace(/<url><loc>(.*?)<\/loc><\/url>/g, (fullMatch, loc) => {
            try {
              const pathname = normalizePathname(new URL(loc).pathname);
              return sitemapExcludedPaths.has(pathname) ? '' : fullMatch;
            } catch {
              return fullMatch;
            }
          })
          .replace(/\n{2,}/g, '\n');

        if (filtered !== sitemap) {
          await fs.writeFile(sitemapPath, filtered, 'utf8');
        }
      }
    }
  };
};

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
      }),
      robotsTxtPlugin({
        userAgent: '*',
        sitemap: `${origin}/sitemap.xml`
      }),
      filterSitemapPlugin()
    ]
  };
});
