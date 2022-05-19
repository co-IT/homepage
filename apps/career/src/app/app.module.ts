import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CareerUiModule } from '@cp/career/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CareerUiModule.configure({
      browserTab: { titlePrefix: 'co-IT', titleSeparator: '-' },
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
