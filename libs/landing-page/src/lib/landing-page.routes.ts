import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
];
