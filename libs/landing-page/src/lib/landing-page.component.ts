import { Component } from '@angular/core';
import { PageTitleComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-landing-page',
  standalone: true,
  imports: [TranslocoModule, PageTitleComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
