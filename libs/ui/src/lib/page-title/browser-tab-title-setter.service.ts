import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  BrowserTabSettings,
  BROWSER_TAB_SETTINGS,
} from './browser-tab-title-settings.token';

@Injectable({ providedIn: 'root' })
export class BrowserTabTitleSetter {
  private separator: string;
  private prefix: string;

  constructor(
    private title: Title,
    @Inject(BROWSER_TAB_SETTINGS)
    { titleSeparator, titlePrefix }: BrowserTabSettings
  ) {
    this.separator = titleSeparator;
    this.prefix = titlePrefix;
  }

  set(newTitle: string): void {
    const title = this.prefix
      ? `${[this.prefix]} ${this.separator} ${newTitle}`
      : newTitle;

    this.title.setTitle(title);
  }
}
