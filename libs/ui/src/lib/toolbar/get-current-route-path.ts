import { inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

/**
 * Provides the current path being active in the application.
 * Waits until navigation has finished to read the URL.
 */
export function getCurrentRoutePath(): Observable<string> {
  return inject(Router).events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((navigationEnd) => navigationEnd.url)
  );
}
