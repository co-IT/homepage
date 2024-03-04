import type { JSXOutput } from '@builder.io/qwik';

export type MenuItem = {
  text: string;
  path?: string;
  isCategory?: boolean;
  description?: string;
  icon?: JSXOutput;
  items?: MenuItem[];
};
