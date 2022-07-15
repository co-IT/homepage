import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@cp/sites').then((m) => m.routes),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/start',
  },
];
