import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BrowserTabTitleSetter } from './browser-tab-title-setter.service';

@Component({
  selector: 'cp-page-title[title][subtitle]',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent implements OnChanges {
  @Input() title = '';
  @Input() subtitle = '';

  constructor(private browserTabTitleSetter: BrowserTabTitleSetter) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTitleInBrowser(changes['title'].currentValue);
  }

  updateTitleInBrowser(newTitle: unknown) {
    if (!newTitle || typeof newTitle !== 'string') return;

    this.browserTabTitleSetter.set(newTitle);
  }
}
