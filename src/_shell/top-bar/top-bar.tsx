 
import { component$, useSignal } from '@builder.io/qwik';
import { Logo } from '~/components/logo';
import { DesktopMenu } from '../menu/desktop';
import { menuConfig } from '../menu/menu.config';
import { MobileMenu } from '../menu/mobile';

export const TopBar = component$(() => {
  const changeBgSig = useSignal(false);

  return (
    <>
      <div
        document:onScroll$={() => {
          changeBgSig.value = window.scrollY > 5;
        }}
        class={['fixed z-50 w-full p-3 transition duration-300', changeBgSig.value ? 'bg-secondary-950' : '']}
      >
        <section class='container mx-auto flex items-center justify-center'>
          <div class='mr-auto'>
            <Logo />
          </div>
          <div class='hidden lg:block'>
            <DesktopMenu config={menuConfig} />
          </div>
          <div class='lg:hidden'>
            <MobileMenu config={menuConfig} />
          </div>
        </section>
      </div>
    </>
  );
});
