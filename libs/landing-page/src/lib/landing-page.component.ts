import { Component } from '@angular/core';
import { HeaderComponent, PageTitleComponent, ToolbarComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-landing-page',
  standalone: true,
  imports: [
    TranslocoModule,
    PageTitleComponent,
    HeaderComponent,
    ToolbarComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
