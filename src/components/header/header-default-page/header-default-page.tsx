import { $, component$, useContext } from '@builder.io/qwik';
import type { NavigationState } from '~/components/navigation/navigation.context';
import { NavigationContext } from '~/components/navigation/navigation.context';
import { HeadingSegmentWhite } from '../../heading-segment';
import { MenuIcon } from '../../icons';
import { Logo } from '../../logo/logo';
import type { HeaderDefaultPageProps } from './header-default-page.props';

export const HeaderDefaultPage = component$((props: HeaderDefaultPageProps) => {
  const menuState = useContext<NavigationState>(NavigationContext);
  const openMenu = $(() => {
    menuState.isOpen = true;
  });

  return (
    <header class='bg-secondary-900 mb-8'>
      <div class='container mx-auto grid grid-rows-3'>
        <section class='flex justify-center md:justify-between pt-6 h-fit'>
          <Logo />

          <div
            class='hidden md:block flex-row gap-x-4 my-auto cursor-pointer hover:opacity-75'
            onClick$={() => openMenu()}
          >
            <MenuIcon />
          </div>
        </section>
        <section></section>
        <section class='flex flex-col space-y-10 pb-16 text-center'>
          <h1 class='font-bold text-2xl md:text-5xl'>
            <HeadingSegmentWhite text={props.heading} />
          </h1>
        </section>
      </div>
    </header>
  );
});
