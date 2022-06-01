import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('@cp/landing-page').then((m) => m.LandingPageModule),
  },
  {
    path: 'recruiting-process',
    loadChildren: () =>
      import('@cp/career/recruiting-process').then(
        (m) => m.CareerRecruitingProcessModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
