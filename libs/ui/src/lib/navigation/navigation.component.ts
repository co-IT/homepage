import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { filter, map, tap } from 'rxjs/operators';
import { getCurrentRoutePath } from '../toolbar/get-current-route-path';
import { RouteInternal } from '../toolbar/routes-internal';

@Component({
  selector: 'cp-navigation',
  standalone: true,

  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private currentRoutePath$ = getCurrentRoutePath();
  @Input() routesInternal?: RouteInternal[];
  @Input() isOpen = false;
  @Output() routeChanged = new EventEmitter<RouteInternal>();

  ngOnInit(): void {
    this.emitCurrentRoute();
  }

  emitCurrentRoute() {
    this.currentRoutePath$
      .pipe(
        map((path) =>
          this.routesInternal?.find((route) => path.includes(route.path))
        ),
        filter((route) => !!route),
        tap((route) => this.routeChanged.emit(route))
      )
      .subscribe();
  }
}
