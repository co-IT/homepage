import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-pill',
  standalone: true,
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent {
  @Input() text?: string;
}
