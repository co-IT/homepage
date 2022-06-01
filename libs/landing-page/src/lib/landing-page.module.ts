import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareerUiModule } from '@cp/career/ui';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    CareerUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingPageComponent },
    ]),
  ],
  declarations: [LandingPageComponent],
})
export class LandingPageModule {}
