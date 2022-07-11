import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'cp-navigation-button',
  templateUrl: './navigation-button.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent {
  isOpen = false;

  constructor(public navigationService: NavigationService) {
    navigationService.isOpen$
      .pipe(tap((isOpen) => (this.isOpen = isOpen)))
      .subscribe();
  }

  toggleNavigation(isOpen: boolean) {
    this.navigationService.setNavigationState(isOpen);
  }
}
