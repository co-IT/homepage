import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
  {
    path: 'welcome',
    loadChildren: () => import('@cp/landing-page').then((m) => m.routes),
  },
  {
    path: 'recruiting-process',
    loadChildren: () =>
      import('@cp/career/recruiting-process').then((m) => m.routes),
  },
  {
    path: 'solutions',
    loadChildren: () => import('@cp/solutions').then((m) => m.routes),
  },
];
