import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { RouteInternal } from './routes-internal';

@Component({
  selector: 'cp-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    NavigationButtonComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;

  @Input() routesInternal?: RouteInternal[];

  @Output() routeChanged = new EventEmitter<RouteInternal>();

  isNavigationOpen = false;

  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
  }
}
