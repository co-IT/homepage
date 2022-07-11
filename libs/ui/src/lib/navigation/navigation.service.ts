import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  isOpen$ = new Subject<boolean>();

  setNavigationState(isOpen: boolean) {
    this.isOpen$.next(isOpen);
  }
}
