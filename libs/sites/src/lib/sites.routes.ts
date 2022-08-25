import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';

export const routes: Routes = [
  { path: 'start', pathMatch: 'full', component: LandingPageComponent },
  {
    path: 'contact',
    component: ContactPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'solutions',
    component: SolutionsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'premium',
    component: PremiumPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'career',
    component: CareerPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'cinema/:videoId',
    component: CinemaPageComponent,
  },
  { path: 'about', pathMatch: 'full', component: AboutPageComponent },
  { path: 'privacy', pathMatch: 'full', component: PrivacyPageComponent },
  {
    path: '**',
    redirectTo: '/start',
  },
];
