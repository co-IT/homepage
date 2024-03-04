import type { MenuAd } from './menu-ad.type';
import type { MenuItem } from './menu-item.type';

export type MenuEntryItem = {
  text: string;
  path?: string;
  items?: MenuItem[];
  ad?: MenuAd;
  isCta?: boolean;
};
