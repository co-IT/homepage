import { component$, useStyles$, useContextProvider, useStore } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { MenuContext } from "./components/common";
import type { MenuStateType } from "./components/common";
import globalStyles from "./global.css?inline";

export default component$(() => {
  useStyles$(globalStyles);
  const menuState = useStore<MenuStateType>({ isOpen: false });
  useContextProvider(MenuContext, menuState);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
