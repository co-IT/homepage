import { Component } from '@angular/core';
import {
  HeaderComponent,
  PageTitleComponent,
  RouteInternal,
  ToolbarComponent,
} from '@cp/ui';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'cp-landing-page',
  standalone: true,
  imports: [
    TranslocoModule,
    PageTitleComponent,
    HeaderComponent,
    ToolbarComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  protected routesInternal: RouteInternal[] = [
    {
      path: '/welcome',
      text: this.transloco.translate('navigation.welcome'),
    },
    {
      path: '/recruiting-process',
      text: this.transloco.translate('navigation.career'),
    },
  ];

  constructor(private transloco: TranslocoService) {}
}
