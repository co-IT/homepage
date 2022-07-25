import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownComponent } from '@cp/ui';

@Component({
  selector: 'cp-about-page',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MarkdownComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
