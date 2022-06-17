import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { filter, map, tap } from 'rxjs';
import { getCurrentRoutePath } from './get-current-route-path';
import { RouteInternal } from './routes-internal';

@Component({
  selector: 'cp-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  private currentRoutePath$ = getCurrentRoutePath();

  @Input() logoSrc?: string;
  @Input() logoAlt?: string;

  @Input() routesInternal?: RouteInternal[];

  @Output() routeChanged = new EventEmitter<RouteInternal>();

  ngOnInit(): void {
    this.emitCurrentRoute();
  }

  emitCurrentRoute() {
    this.currentRoutePath$
      .pipe(
        map((path) =>
          this.routesInternal?.find((route) => route.path === path)
        ),
        filter((route) => !!route),
        tap((route) => this.routeChanged.emit(route))
      )
      .subscribe();
  }
}
