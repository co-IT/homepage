import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

type RobotsTxtPluginOptions = {
  userAgent: string;
  sitemap: string;
};

export const robotsTxtPlugin = ({ userAgent, sitemap }: RobotsTxtPluginOptions): Plugin => {
  return {
    name: 'robots-txt',
    enforce: 'post',
    apply: 'build',
    closeBundle: {
      sequential: true,
      async handler() {
        const robotsPath = resolve(process.cwd(), 'dist', 'robots.txt');
        const robots = `User-agent: ${userAgent}

Sitemap: ${sitemap}
`;

        await fs.writeFile(robotsPath, robots, 'utf8');
      }
    }
  };
};
