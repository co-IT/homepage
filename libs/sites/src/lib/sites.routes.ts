import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/welcome',
  },
];
