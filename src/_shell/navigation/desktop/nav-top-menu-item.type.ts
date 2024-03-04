import type { MenuAd } from './nav-menu-ad.type';
import type { NavMenuItem } from './nav-menu-item.type';

export type NavTopMenuItem = {
  text: string;
  path?: string;
  items?: NavMenuItem[];
  ad?: MenuAd;
  isCta?: boolean;
};
