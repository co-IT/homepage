import { Component } from '@angular/core';
import { ArticleComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'cp-landing-page',
  standalone: true,
  imports: [TranslocoModule, MarkdownModule, ArticleComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
