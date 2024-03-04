/* eslint-disable qwik/valid-lexical-scope */
import {
  component$,
  useSignal,
  useStyles$,
  type Signal
} from '@builder.io/qwik';
import { Popover, PopoverTrigger } from '@qwik-ui/headless';
import type { MenuConfig, MenuEntryItem } from '../types';
import { CategoryItem } from './category-item';
import { NavMenuAd } from './nav-menu-ad';
import { ShevronIcon } from './shevron.icon';

import styles from './desktop-menu.css?inline';

type DesktopMenuProps = {
  config: MenuConfig;
  menuAnchorRef: Signal<HTMLElement | undefined>;
};

export const DesktopMenu = component$(
  ({ config, menuAnchorRef }: DesktopMenuProps) => {
    return (
      <>
        <div class='flex'>
          <ul class='flex gap-12'>
            {config.items.map((item, index) => {
              return (
                <li
                  key={item.text}
                  class='flex items-center font-semibold text-white'
                >
                  {item.items && (
                    <MenuPopoverLink
                      index={index}
                      item={item}
                      menuAnchorRef={menuAnchorRef}
                    />
                  )}
                  {!item.items && (
                    <a
                      href={item.path}
                      class={
                        item.isCta
                          ? 'border-2 border-primary px-6 py-2 text-sm text-primary hover:bg-primary hover:text-secondary-950'
                          : 'hover:text-primary'
                      }
                    >
                      {item.text}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
);

export type MenuPopoverLinkProps = {
  item: MenuEntryItem;
  index: number;
  menuAnchorRef: Signal<HTMLElement | undefined>;
};

export const MenuPopoverLink = component$<MenuPopoverLinkProps>(
  ({ index, item, menuAnchorRef }) => {
    useStyles$(styles);

    const isOpenedSig = useSignal(false);
    return (
      <>
        <PopoverTrigger
          popovertarget={`nav-menu-popover-${index}`}
          class={`flex items-center font-semibold ${
            isOpenedSig.value ? 'text-primary' : 'text-white hover:text-primary'
          }`}
        >
          {item.text}
          <span class='pl-2'>
            <ShevronIcon
              class={`ease font-bold transition-transform duration-500 ${
                isOpenedSig.value ? 'rotate-180 transform text-primary' : ''
              }
              `}
            />
          </span>
        </PopoverTrigger>

        <Popover
          id={`nav-menu-popover-${index}`}
          floating={true}
          anchorRef={menuAnchorRef}
          gutter={12}
          onToggle$={event => {
            isOpenedSig.value = event.newState === 'open';
          }}
          class='listbox desktop-menu-opacity-transition container w-full'
        >
          <div class='flex justify-between'>
            <ul class='flex basis-10/12 gap-10 p-10'>
              {item.items!.map(item => {
                return (
                  <li key={item.text}>
                    {item.isCategory && <CategoryItem category={item} />}
                    {!item.isCategory && (
                      <>
                        {item.icon ? <span>{item.icon}</span> : null}
                        {item.text}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
            {item.ad && <NavMenuAd ad={item.ad} />}
          </div>
        </Popover>
      </>
    );
  }
);
