import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeaderComponent,
  PageTitleComponent,
  RouteInternal,
  ToolbarComponent,
} from '@cp/ui';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'cp-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    HeaderComponent,
    PageTitleComponent,
    ToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected routeRecentlyClicked?: RouteInternal;

  protected routesInternal: RouteInternal[] = [
    {
      path: '/welcome',
      text: this.transloco.translate('navigation.welcome'),
      title: 'landing-page.page-title',
      subtitle: 'landing-page.page-subtitle',
      isStartPage: true,
    },
    {
      path: '/recruiting-process',
      text: this.transloco.translate('navigation.career'),
      title: 'recruiting-process.page-title',
      subtitle: 'recruiting-process.page-subtitle',
    },
  ];

  constructor(private transloco: TranslocoService) {}
}
