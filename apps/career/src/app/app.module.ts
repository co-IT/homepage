import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CareerI18nModule } from '@cp/career/i18n';
import { CareerUiModule } from '@cp/career/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CareerI18nModule.forRoot(),
    CareerUiModule.forRoot({
      browserTab: { titlePrefix: 'co-IT', titleSeparator: '-' },
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
