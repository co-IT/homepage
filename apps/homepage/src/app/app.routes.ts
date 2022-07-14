import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'career',
    loadChildren: () =>
      import('@cp/career/recruiting-process').then((m) => m.routes),
  },
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
