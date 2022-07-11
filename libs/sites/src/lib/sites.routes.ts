import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';

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
    path: '**',
    redirectTo: '/welcome',
  },
];
