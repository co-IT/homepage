import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-call-to-action-button',
  standalone: true,
  templateUrl: './call-to-action-button.component.html',
  styleUrls: ['./call-to-action-button.component.scss'],
})
export class CallToActionButtonComponent {
  @Input() icon?: string;
  @Input() text?: string;
}
