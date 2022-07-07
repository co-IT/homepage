import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
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
    FooterComponent,
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
      text: this.transloco.translate('navigation.start'),
      title: 'landing-page.page-title',
      subtitle: 'landing-page.page-subtitle',
      isStartPage: true,
      imgSrc: 'assets/images/logo-hero.svg',
    },
    {
      path: '/solutions',
      text: this.transloco.translate('navigation.solutions'),
      title: 'solutions.page-title',
      subtitle: 'solutions.page-subtitle',
    },
    {
      path: '/recruiting-process',
      text: this.transloco.translate('navigation.career'),
      title: 'recruiting-process.page-title',
      subtitle: 'recruiting-process.page-subtitle',
    },
    {
      path: '/welcome/about',
      text: this.transloco.translate('navigation.about'),
      title: 'about.page-title',
      subtitle: 'about.page-subtitle',
    },
  ];

  constructor(private transloco: TranslocoService) {}
}
