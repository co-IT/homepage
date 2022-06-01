import { InjectionToken } from '@angular/core';

export interface BrowserTabSettings {
  titlePrefix: string;
  titleSeparator: string;
}

export const BROWSER_TAB_SETTINGS = new InjectionToken<BrowserTabSettings>(
  'BrowserTabTitleSettings'
);

export const browserTabSettingsDefault: BrowserTabSettings = {
  titlePrefix: '',
  titleSeparator: '-',
};
