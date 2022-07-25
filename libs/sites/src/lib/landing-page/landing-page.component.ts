import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { HeroLinkComponent, MarkdownComponent } from '@cp/ui';

@Component({
  selector: 'cp-landing-page',
  standalone: true,
  imports: [TranslocoModule, MarkdownComponent, HeroLinkComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
