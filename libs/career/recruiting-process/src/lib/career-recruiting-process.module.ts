import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareerUiModule } from '@cp/career/ui';
import { CareerRecruitingProcessComponent } from './career-recruiting-process.component';

@NgModule({
  imports: [
    CommonModule,
    CareerUiModule,

    RouterModule.forChild([
      {
        path: '',
        component: CareerRecruitingProcessComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  declarations: [CareerRecruitingProcessComponent],
})
export class CareerRecruitingProcessModule {}
