import { $, component$, useContext } from "@builder.io/qwik";
import { MenuContext } from '~/components/common';
import { WhiteMenuIcon } from "../icons";
import type { MenuStateType } from '~/components/common';

export const MobileMenuButton = component$(() => {
  const menuState = useContext<MenuStateType>(MenuContext);
  const openMenu = $(() => {
    menuState.isOpen = true;
  });
  return (
    <>
      {!menuState.isOpen && <div class="p-4 rounded-full bg-primary cursor-pointer right-6 bottom-4 z-50 shadow-md w-fit fixed sm:hidden hover:opacity-75" onClick$={() => openMenu()}>
        <WhiteMenuIcon />
        </div>}
    </>
  )
});