import {
  component$,
  useContextProvider,
  useStore,
  useStyles$
} from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from '@builder.io/qwik-city';
import type { NavigationState } from './components/navigation/navigation.context';
import { NavigationContext } from './components/navigation/navigation.context';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);
  const menuState = useStore<NavigationState>({ isOpen: false });
  useContextProvider(NavigationContext, menuState);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <RouterHead />
      </head>
      <body lang='en'>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
