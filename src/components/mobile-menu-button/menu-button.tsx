import { $, component$, useContext } from '@builder.io/qwik';
import type { NavigationState } from '~/components/navigation/navigation.context';
import { NavigationContext } from '~/components/navigation/navigation.context';
import { WhiteMenuIcon } from '../icons';

export const MobileMenuButton = component$(() => {
  const menuState = useContext<NavigationState>(NavigationContext);
  const openMenu = $(() => {
    menuState.isOpen = true;
  });
  return (
    <>
      {!menuState.isOpen && (
        <div
          class='p-4 rounded-full bg-primary cursor-pointer right-6 bottom-12 z-50 shadow-md w-fit fixed sm:hidden hover:opacity-75'
          onClick$={() => openMenu()}
        >
          <WhiteMenuIcon />
        </div>
      )}
    </>
  );
});
