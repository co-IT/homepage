import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LandingPageComponent } from './landing-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'about', pathMatch: 'full', component: AboutPageComponent },
];
