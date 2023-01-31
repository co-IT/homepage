import type { HeaderContentPageProps } from './header-content-page';
import type { HeaderDefaultPageProps } from './header-default-page';
import type { HeaderLandingPageProps } from './header-landing-page';

export type HeaderProps =
  | {
      type: 'landing-page';
      configuration: HeaderLandingPageProps;
    }
  | {
      type: 'content-page';
      configuration: HeaderContentPageProps;
    }
  | {
      type: 'default';
      configuration: HeaderDefaultPageProps;
    };
