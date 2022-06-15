import { ValueProvider } from '@angular/core';
import {
  BrowserTabSettings,
  browserTabSettingsDefault,
  BROWSER_TAB_SETTINGS,
} from './page-title/browser-tab-title-settings.token';

export function configureCareerUI(configuration: {
  browserTab: BrowserTabSettings;
}): ValueProvider {
  return {
    provide: BROWSER_TAB_SETTINGS,
    useValue: {
      ...browserTabSettingsDefault,
      ...configuration.browserTab,
    },
  };
}
