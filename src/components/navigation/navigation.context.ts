import { createContextId } from '@builder.io/qwik';

export interface NavigationState {
  isOpen: boolean;
}

export const NavigationContext =
  createContextId<NavigationState>('navigation-context');
