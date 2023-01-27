import { createContext } from "@builder.io/qwik";

export interface MenuStateType {
  isOpen: boolean;
}

export const MenuContext = createContext<MenuStateType>('menu-context');