import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';
import { routeMatchesAnyPattern } from '../../src/seo/excluded-routes';

type FilterSitemapPluginOptions = {
  excludedRoutes: readonly string[];
  sitemapPath?: string;
};

export const filterSitemapPlugin = ({
  excludedRoutes,
  sitemapPath = 'dist/sitemap.xml'
}: FilterSitemapPluginOptions): Plugin => {
  return {
    name: 'filter-sitemap',
    enforce: 'post',
    apply: 'build',
    closeBundle: {
      sequential: true,
      async handler() {
        const absoluteSitemapPath = resolve(process.cwd(), sitemapPath);

        try {
          const sitemapXml = await fs.readFile(absoluteSitemapPath, 'utf8');
          const filteredSitemapXml = sitemapXml.replace(/<url>\s*<loc>([^<]+)<\/loc>\s*<\/url>\s*/g, (entry, loc) => {
            const url = new URL(loc);

            if (routeMatchesAnyPattern(url.pathname, excludedRoutes)) {
              return '';
            }

            return entry;
          });

          if (filteredSitemapXml !== sitemapXml) {
            await fs.writeFile(absoluteSitemapPath, filteredSitemapXml, 'utf8');
          }
        } catch (error) {
          if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
            return;
          }

          throw error;
        }
      }
    }
  };
};
