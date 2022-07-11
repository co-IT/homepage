import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
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
  { path: 'about', pathMatch: 'full', component: AboutPageComponent },
  {
    path: '**',
    redirectTo: '/welcome',
  },
];
