import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

const toDisallowPath = (route: string) => route.replace('*', '');

type RobotsTxtPluginOptions = {
  userAgent: string;
  excludedRoutes: readonly string[];
  robotsPath?: string;
  sitemapURL: string;
};

export const robotsTxtPlugin = ({
  userAgent,
  excludedRoutes,
  robotsPath = 'dist/robots.txt',
  sitemapURL
}: RobotsTxtPluginOptions): Plugin => {
  return {
    name: 'robots-txt',
    enforce: 'post',
    apply: 'build',
    closeBundle: {
      sequential: true,
      async handler() {
        const absoluteRobotsPath = resolve(process.cwd(), robotsPath);
        const disallowedPaths = excludedRoutes.map(toDisallowPath).filter(route => route.length > 0);
        const disallowLines = disallowedPaths.map(route => `Disallow: ${route}`);
        const allowLine = disallowedPaths.includes('/') ? undefined : 'Allow: /';
        const rules = [allowLine, ...disallowLines].filter(Boolean).join('\n');
        const robots = `User-agent: ${userAgent}
${rules}

Sitemap: ${sitemapURL}
`;

        await fs.writeFile(absoluteRobotsPath, robots, 'utf8');
      }
    }
  };
};
