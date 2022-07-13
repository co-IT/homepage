import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { filter, map, tap } from 'rxjs/operators';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { getCurrentRoutePath } from '../toolbar/get-current-route-path';
import { RouteInternal } from '../toolbar/routes-internal';
import { NavigationService } from './navigation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Hotkey, HotkeysModule, HotkeysService } from '@ngneat/hotkeys';

@UntilDestroy()
@Component({
  selector: 'cp-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule, CallToActionComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() routesInternal?: RouteInternal[];
  @Input() isOpen = false;
  @Output() routeChanged = new EventEmitter<RouteInternal>();
  isNavigationOpen$;
  private currentRoutePath$ = getCurrentRoutePath();

  constructor(private navigationService: NavigationService) {
    this.isNavigationOpen$ = navigationService.isOpen$.asObservable();
  }

  ngOnInit(): void {
    this.emitCurrentRoute();
  }

  routerLinkClick(route: RouteInternal | undefined) {
    this.routeChanged.emit(route);
    this.navigationService.setNavigationState(false);
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
