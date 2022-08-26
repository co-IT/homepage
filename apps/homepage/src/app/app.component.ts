import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderComponent,
  NavigationComponent,
  PageTitleComponent,
  RouteInternal,
  ScrollToTopButtonComponent,
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
    NavigationComponent,
    FooterComponent,
    PageTitleComponent,
    ToolbarComponent,
    ScrollToTopButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected routeRecentlyClicked?: RouteInternal;

  protected routesInternal: RouteInternal[] = [
    {
      path: '/start',
      text: this.transloco.translate('navigation.start'),
      title: 'landing-page.page-title',
      subtitle: 'landing-page.page-subtitle',
      isStartPage: true,
      imgSrc: 'assets/images/logo-hero.svg',
      displayType: 'link',
    },
    {
      path: '/solutions',
      text: this.transloco.translate('navigation.solutions'),
      title: 'solutions.page-title',
      subtitle: 'solutions.page-subtitle',
      displayType: 'link',
    },
    {
      path: '/premium',
      text: this.transloco.translate('navigation.premium'),
      title: 'premium.page-title',
      subtitle: 'premium.page-subtitle',
      displayType: 'link',
      hasTitlePrimaryBackground: true,
    },
    {
      path: '/career',
      text: this.transloco.translate('navigation.career'),
      title: 'career.page-title',
      subtitle: 'career.page-subtitle',
      displayType: 'link',
    },
    {
      path: '/about',
      text: this.transloco.translate('navigation.about'),
      title: 'about.page-title',
      subtitle: 'about.page-subtitle',
      displayType: 'link',
    },
    {
      path: '/contact',
      text: this.transloco.translate('navigation.contact'),
      title: 'contact.page-title',
      subtitle: 'contact.page-subtitle',
      displayType: 'button',
    },
    {
      path: '/privacy',
      text: this.transloco.translate('navigation.privacy'),
      title: 'privacy-page.title',
      subtitle: '',
      displayType: 'footer-link',
    },
    {
      path: '/imprint',
      text: this.transloco.translate('navigation.imprint'),
      title: 'imprint-page.title',
      subtitle: '',
      displayType: 'footer-link',
    },
  ];

  constructor(private transloco: TranslocoService) {}
}
