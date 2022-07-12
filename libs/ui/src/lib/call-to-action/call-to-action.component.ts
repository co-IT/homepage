import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cp-call-to-action',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent {
  @Input() icon?: string;
  @Input() text?: string;
  @Input() href?: string | null = null;
  @Input() internalRouterLink: string[] | null = null;
  @Input() fullWidth = false;
  @Input() target?: string = '_blank';
}
