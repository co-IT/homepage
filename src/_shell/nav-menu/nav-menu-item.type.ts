import type { JSXNode } from '@builder.io/qwik';

export type NavMenuItem = {
  text: string;
  path?: string;
  isCategory?: boolean;
  description?: string;
  icon?: JSXNode;
  items?: NavMenuItem[];
};
