import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';
import { CallToActionComponent, HeroLinkComponent } from '@cp/ui';

@Component({
  selector: 'cp-landing-page',
  standalone: true,
  imports: [TranslocoModule, MarkdownModule, HeroLinkComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
