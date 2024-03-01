import { component$, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <RouterHead />
      </head>
      <body lang='de'>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
