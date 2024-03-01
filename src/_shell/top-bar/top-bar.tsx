/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from '@builder.io/qwik';
import { Logo } from '~/components/logo';
import { NavMenu } from '../nav-menu/nav-menu';
import { MobileNavigation } from '../navigation/mobile/mobile-navigation';
import { navigationConfig } from '../navigation/navigation.config';

export const TopBar = component$(() => {
  const ref = useSignal<HTMLElement>();
  const changeBgSig = useSignal(false);

  return (
    <>
      <div
        document:onScroll$={() => {
          changeBgSig.value = window.scrollY > 5;
        }}
        class={[
          'fixed z-10 w-full p-3 transition duration-300',
          changeBgSig.value ? 'bg-secondary-950' : ''
        ]}
      >
        <section ref={ref} class='container mx-auto flex w-full items-center'>
          <div class='mr-auto'>
            <Logo />
          </div>
          <NavMenu config={navigationConfig} menuAnchorRef={ref} />
          <MobileNavigation config={navigationConfig} />
        </section>
      </div>
    </>
  );
});
