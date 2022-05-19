import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserTabTitleSetter } from './page-title/browser-tab-title-setter.service';
import {
  BrowserTabSettings,
  browserTabSettingsDefault,
  BROWSER_TAB_SETTINGS,
} from './page-title/browser-tab-title-settings.token';
import { PageTitleComponent } from './page-title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent],
})
export class CareerUiModule {
  static configure(configuration: {
    browserTab: BrowserTabSettings;
  }): ModuleWithProviders<CareerUiModule> {
    return {
      ngModule: CareerUiModule,
      providers: [
        BrowserTabTitleSetter,
        {
          provide: BROWSER_TAB_SETTINGS,
          useValue: {
            ...browserTabSettingsDefault,
            ...configuration.browserTab,
          },
        },
      ],
    };
  }
}
