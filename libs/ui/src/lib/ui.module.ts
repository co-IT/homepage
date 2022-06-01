import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserTabTitleSetter } from './page-title/browser-tab-title-setter.service';
import {
  BrowserTabSettings,
  browserTabSettingsDefault,
  BROWSER_TAB_SETTINGS,
} from './page-title/browser-tab-title-settings.token';
import { PageTitleComponent } from './page-title/page-title.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageTitleComponent, TimelineComponent],
  exports: [PageTitleComponent, TimelineComponent],
})
export class UiModule {
  static forRoot(configuration: {
    browserTab: BrowserTabSettings;
  }): ModuleWithProviders<UiModule> {
    return {
      ngModule: UiModule,
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
