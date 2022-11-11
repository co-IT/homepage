import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarkdownComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-about-page',
  standalone: true,
  imports: [TranslocoModule, MarkdownComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
