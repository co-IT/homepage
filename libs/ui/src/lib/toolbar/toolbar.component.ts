import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesInternal } from './routes-internal';

@Component({
  selector: 'cp-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;
  @Input() routesInternal?: RoutesInternal[];
}
