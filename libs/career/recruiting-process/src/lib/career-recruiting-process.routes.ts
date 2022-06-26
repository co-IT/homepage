import { Routes } from '@angular/router';
import { CareerRecruitingProcessComponent } from './career-recruiting-process.component';
import { CinemaComponent } from './cinema/cinema.component';

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
