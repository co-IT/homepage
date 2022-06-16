import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { RouteInternal } from './routes-internal';

@Component({
  selector: 'cp-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;
  @Input() routesInternal?: RouteInternal[];
}
