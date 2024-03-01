import type { JSXOutput } from '@builder.io/qwik';

export type NavMenuItem = {
  text: string;
  path?: string;
  isCategory?: boolean;
  description?: string;
  icon?: JSXOutput;
  items?: NavMenuItem[];
};
