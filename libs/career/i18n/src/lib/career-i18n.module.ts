import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import {
  provideTranslocoConfig,
  provideTranslocoLoader,
} from './transloco-providers';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [TranslocoModule],
})
export class CareerI18nModule {
  static forRoot(): ModuleWithProviders<CareerI18nModule> {
    return {
      ngModule: CareerI18nModule,
      providers: [provideTranslocoConfig, provideTranslocoLoader],
    };
  }
}
