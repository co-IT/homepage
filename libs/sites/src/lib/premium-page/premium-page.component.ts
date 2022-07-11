import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'cp-premium-page',
  standalone: true,
  imports: [TranslocoModule, MarkdownModule],
  templateUrl: './premium-page.component.html',
  styleUrls: ['./premium-page.component.scss'],
})
export class PremiumPageComponent {}
