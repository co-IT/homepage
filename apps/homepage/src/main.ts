import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  provideTranslocoConfig,
  provideTranslocoLoader,
} from '@cp/career/i18n';
import { configureCareerUI } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),

    importProvidersFrom(RouterModule.forRoot(routes)),

    importProvidersFrom(TranslocoModule),

    provideTranslocoConfig,

    provideTranslocoLoader,

    importProvidersFrom(MarkdownModule.forRoot()),

    configureCareerUI({
      browserTab: { titlePrefix: 'co-IT', titleSeparator: '-' },
    }),
  ],
}).catch((err) => console.error(err));
