import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { PillComponent } from '../pill/pill.component';

@Component({
  selector: 'cp-job-offer-tile',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    CallToActionComponent,
    PillComponent,
  ],
  templateUrl: './job-offer-tile.component.html',
  styleUrls: ['./job-offer-tile.component.scss'],
})
export class JobOfferTileComponent {
  @Input() title?: string;
  @Input() url?: string;
  @Input() country?: string;
  @Input() city?: string;
  @Input() location?: string;
  @Input() tags: string[] = [];
}
