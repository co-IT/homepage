import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-card',
  standalone: true,
  imports: [CommonModule, CallToActionComponent],
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
