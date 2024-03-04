/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from '@builder.io/qwik';
import { Logo } from '~/components/logo';
import { DesktopMenu } from '../menu/desktop';
import { menuConfig } from '../menu/menu.config';
import { MobileMenu } from '../menu/mobile';

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
          'fixed z-50 w-full p-3 transition duration-300',
          changeBgSig.value ? 'bg-secondary-950' : ''
        ]}
      >
        <section ref={ref} class='container mx-auto flex justify-center'>
          <div class='mr-auto'>
            <Logo />
          </div>
          <div class='hidden md:block'>
            <DesktopMenu config={menuConfig} menuAnchorRef={ref} />
          </div>
          <div class='md:hidden'>
            <MobileMenu config={menuConfig} />
          </div>
        </section>
      </div>
    </>
  );
});
