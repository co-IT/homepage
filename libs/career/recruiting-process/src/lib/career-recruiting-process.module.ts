import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareerI18nModule } from '@cp/career/i18n';
import { CareerUiModule } from '@cp/career/ui';
import { CareerRecruitingProcessComponent } from './career-recruiting-process.component';

@NgModule({
  imports: [
    CommonModule,
    CareerUiModule,
    CareerI18nModule,

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
