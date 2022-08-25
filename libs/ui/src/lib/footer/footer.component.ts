import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map, tap } from 'rxjs/operators';
import { getCurrentRoutePath } from '../toolbar/get-current-route-path';
import { RouteInternal } from '../toolbar/routes-internal';

@Component({
  selector: 'cp-footer',
  standalone: true,
  imports: [CommonModule, TranslocoModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
@UntilDestroy()
export class FooterComponent implements OnInit {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;
  @Input() routesInternal?: RouteInternal[];
  @Output() routeChanged = new EventEmitter<RouteInternal>();
  private currentRoutePath$ = getCurrentRoutePath();

  ngOnInit() {
    this.emitCurrentRoute();
  }

  get footerRoutes(): RouteInternal[] {
    return (
      this.routesInternal?.filter(
        (route) => route.displayType === 'footer-link'
      ) || []
    );
  }

  routerLinkClick(route: RouteInternal | undefined) {
    this.routeChanged.emit(route);
  }

  emitCurrentRoute() {
    this.currentRoutePath$
      .pipe(
        map((path) =>
          this.routesInternal?.find((route) => path.includes(route.path))
        ),
        filter((route) => !!route),
        tap((route) => this.routeChanged.emit(route)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
