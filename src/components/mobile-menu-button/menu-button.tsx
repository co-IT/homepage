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
          class='fixed right-6 bottom-12 z-50 w-fit cursor-pointer rounded-full bg-primary p-4 shadow-md hover:opacity-75 sm:hidden'
          onClick$={() => openMenu()}
        >
          <WhiteMenuIcon />
        </div>
      )}
    </>
  );
});
