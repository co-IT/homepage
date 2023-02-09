import { createContext } from '@builder.io/qwik';

export interface NavigationState {
  isOpen: boolean;
}

export const NavigationContext =
  createContext<NavigationState>('navigation-context');
