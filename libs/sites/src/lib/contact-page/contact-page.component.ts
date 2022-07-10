import { Component } from '@angular/core';
import { CallToActionComponent, CardComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  imports: [CardComponent, TranslocoModule, CallToActionComponent],
})
export class ContactPageComponent {}
