import { component$ } from '@builder.io/qwik';
import { MobileMenuButton } from '../mobile-menu-button';
import { HeaderContentPage } from './header-content-page';
import { HeaderDefaultPage } from './header-default-page';
import { HeaderLandingPage } from './header-landing-page';
import type { HeaderProps } from './header.props';

export const Header = component$((props: HeaderProps) => {
  return (
    <>
      {props.type === 'landing-page' ? (
        <HeaderLandingPage {...props.configuration} />
      ) : props.type === 'content-page' ? (
        <HeaderContentPage {...props.configuration} />
      ) : (
        <HeaderDefaultPage {...props.configuration} />
      )}
      <MobileMenuButton />
    </>
  );
});
