import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class ToolbarComponent implements OnInit {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;
  @Input() routesInternal?: RouteInternal[];

  @Output() routeClicked = new EventEmitter<RouteInternal>();

  ngOnInit(): void {
    this.emitRouteBeingTheStartPage();
  }
  emitRouteBeingTheStartPage() {
    const startPage = this.routesInternal?.find((route) => route.isStartPage);

    if (!startPage) return;

    this.routeClicked.emit(startPage);
  }
}
