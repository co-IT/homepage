import { Routes } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { CareerRecruitingProcessComponent } from './recruiting-process.component';

export const routes: Routes = [
  {
    path: '',
    component: CareerRecruitingProcessComponent,
    pathMatch: 'full',
  },
  {
    path: 'cinema/:videoId',
    component: CinemaComponent,
  },
];
