import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownComponent } from '@cp/ui';

@Component({
  selector: 'cp-premium-page',
  standalone: true,
  imports: [TranslocoModule, MarkdownComponent],
  templateUrl: './premium-page.component.html',
  styleUrls: ['./premium-page.component.scss'],
})
export class PremiumPageComponent {}
