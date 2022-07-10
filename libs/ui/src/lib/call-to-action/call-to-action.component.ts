import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-call-to-action',
  standalone: true,
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent {
  @Input() icon?: string;
  @Input() text?: string;
  @Input() href?: string;
  @Input() fullWidth = false;
}
