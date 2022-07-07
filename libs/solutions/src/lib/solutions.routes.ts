import { Route } from '@angular/router';
import { SolutionsComponent } from './solutions.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: SolutionsComponent,
  },
];
