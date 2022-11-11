import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'cp-card',
  standalone: true,
  imports: [NgIf, CallToActionComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() icon?: string;
  @Input() heading?: string;
  @Input() text?: string;
  @Input() actionText?: string;
  @Input() actionUrl?: string;
  @HostBinding('class.inverted') @Input() inverted = false;
}
