import { component$ } from '@builder.io/qwik';
import HeaderLandingPage from './header-landing-page';
import type { HeaderProps } from './header.props';

export default component$((props: HeaderProps) => {
  return (
    <>
      {props.type === 'landing-page' ? (
        <HeaderLandingPage {...props} />
      ) : (
        <div>unknown header type</div>
      )}
    </>
  );
});
