import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/recruiting-process',
  },
  {
    path: 'recruiting-process',
    loadChildren: () =>
      import('@cp/career/recruiting-process').then((m) => m.routes),
  },
];
