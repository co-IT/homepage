import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik';
import type { MenuConfig, MenuEntryItem } from '../types';
import { CategoryItem } from './category-item';
import { NavMenuAd } from './nav-menu-ad';
import { ShevronIcon } from './shevron.icon';

import styles from './desktop-menu.css?inline';

type DesktopMenuProps = {
  config: MenuConfig;
};

export const DesktopMenu = component$(({ config }: DesktopMenuProps) => {
  useStyles$(styles);

  return (
    <>
      <div class='flex'>
        <ul class='flex gap-12'>
          {config.items.map(item => {
            return (
              <li key={item.text} class='flex items-center font-semibold text-white'>
                {item.items && <MenuPopoverLink item={item} />}
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
});

export type MenuPopoverLinkProps = {
  item: MenuEntryItem;
};

export const MenuPopoverLink = component$<MenuPopoverLinkProps>(({ item }) => {
  const isOpenSig = useSignal(false);
  const closeTimeoutSig = useSignal<number>();

  const openMenu$ = $(() => {
    window.clearTimeout(closeTimeoutSig.value);
    isOpenSig.value = true;
  });

  const scheduleCloseMenu$ = $(() => {
    window.clearTimeout(closeTimeoutSig.value);
    closeTimeoutSig.value = window.setTimeout(() => {
      isOpenSig.value = false;
    }, 100);
  });

  return (
    <div
      class='desktop-menu-item'
      onPointerEnter$={openMenu$}
      onPointerLeave$={scheduleCloseMenu$}
      onFocus$={openMenu$}
      onBlur$={scheduleCloseMenu$}
    >
      <div
        class={`flex items-center font-semibold ${isOpenSig.value ? 'text-primary' : 'text-white hover:text-primary'}`}
      >
        {item.path ? <a href={item.path}>{item.text}</a> : <span>{item.text}</span>}
        <span class='pl-2'>
          <ShevronIcon
            class={`ease font-bold transition-transform duration-300 ${
              isOpenSig.value ? 'rotate-180 transform text-primary' : ''
            }`}
          />
        </span>
      </div>

      <div
        class={`desktop-menu-panel w-full transition-opacity duration-150 ${
          isOpenSig.value ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        onPointerEnter$={openMenu$}
        onPointerLeave$={scheduleCloseMenu$}
      >
        <div class='desktop-menu-content bg-white shadow-xl'>
          <ul class='min-w-0 p-10'>
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
      </div>
    </div>
  );
});
