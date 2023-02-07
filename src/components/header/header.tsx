import { $, component$, useContext } from '@builder.io/qwik';
import { MenuIcon } from '../icons';
import { Logo } from '../logo';
import { MobileMenuButton } from '../mobile-menu-button';
import type { NavigationState } from '../navigation/navigation.context';
import { NavigationContext } from '../navigation/navigation.context';
import { HeaderContentPage } from './header-content-page';
import { HeaderDefaultPage } from './header-default-page';
import { HeaderLandingPage } from './header-landing-page';
import type { HeaderProps } from './header.props';

export const Header = component$((props: HeaderProps) => {
  const menuState = useContext<NavigationState>(NavigationContext);
  const openMenu = $(() => (menuState.isOpen = true));

  const headerBackgrundImage =
    props.type !== 'default'
      ? `background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.configuration.backgroundImage.source}");`
      : '';

  return (
    <header
      class='bg-secondary-900 bg-cover bg-no-repeat sm:max-h-max md:bg-right-top lg:h-[75vh]'
      style={headerBackgrundImage}
    >
      <div class='container mx-auto grid gap-36 lg:h-full'>
        <section class='flex h-fit justify-center pt-6 md:justify-between md:px-6'>
          <Logo></Logo>

          <div
            class='my-auto hidden cursor-pointer flex-row gap-x-4 hover:opacity-75 md:block'
            onClick$={() => openMenu()}
          >
            <MenuIcon />
          </div>
        </section>
        <section class='flex flex-col items-center space-y-10 text-center lg:mb-12 lg:self-end'>
          {props.type === 'landing-page' ? (
            <HeaderLandingPage {...props.configuration} />
          ) : props.type === 'content-page' ? (
            <HeaderContentPage {...props.configuration} />
          ) : (
            <HeaderDefaultPage {...props.configuration} />
          )}
        </section>
      </div>
      <MobileMenuButton />
    </header>
  );
});
