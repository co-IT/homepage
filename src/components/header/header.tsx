import { component$ } from '@builder.io/qwik';
import HeaderContentPage from './header-content-page/header-content-page';
import HeaderLandingPage from './header-landing-page/header-landing-page';
import type { HeaderProps } from './header.props';

export const Header = component$((props: HeaderProps) => {
  return (
    <>
      {props.type === 'landing-page' ? (
        <HeaderLandingPage {...props.configuration} />
      ) : props.type === 'content-page' ? (
        <HeaderContentPage {...props.configuration} />
      ) : (
        <div>unknown header type</div>
      )}
    </>
  );
});
