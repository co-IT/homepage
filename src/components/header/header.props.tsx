import type { HeaderContentPageProps } from './header-content-page/header-content-page.props';
import type { HeaderLandingPageProps } from './header-landing-page/header-landing-page.props';

export type HeaderProps =
  | {
      type: 'landing-page';
      configuration: HeaderLandingPageProps;
    }
  | {
      type: 'content-page';
      configuration: HeaderContentPageProps;
    };
