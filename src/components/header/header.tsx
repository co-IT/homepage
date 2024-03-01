import { component$ } from '@builder.io/qwik';
import { TopBar } from '../../_shell/top-bar/top-bar';
import { MobileMenuButton } from '../mobile-menu-button';
import { HeaderContentPage } from './header-content-page';
import { HeaderDefaultPage } from './header-default-page';
import { HeaderLandingPage } from './header-landing-page';
import type { HeaderProps } from './header.props';

export const Header = component$((props: HeaderProps) => {
  const headerHeight =
    props.type === 'default' ? 'lg:h-auto' : 'md:h-[60vh] lg:h-[90vh]';

  const headerBackgroundImage =
    props.type !== 'default'
      ? `background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.configuration.backgroundImage.source}");`
      : '';

  return (
    <header
      class={`bg-secondary-900 bg-cover bg-no-repeat md:bg-right-top ${headerHeight}`}
      style={headerBackgroundImage}
    >
      <TopBar />

      <div class='container mx-auto grid h-full gap-36'>
        <section class='flex flex-col items-center space-y-10 self-end text-center lg:mb-12'>
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
