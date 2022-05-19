import { ClassProvider, ValueProvider } from '@angular/core';
import {
  translocoConfig,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-http-loader.service';

export const provideTranslocoConfig: ValueProvider = {
  provide: TRANSLOCO_CONFIG,
  useValue: translocoConfig({
    availableLangs: ['de'],
    defaultLang: 'de',
    reRenderOnLangChange: true,
    prodMode: true,
  }),
};

export const provideTranslocoLoader: ClassProvider = {
  provide: TRANSLOCO_LOADER,
  useClass: TranslocoHttpLoader,
};
