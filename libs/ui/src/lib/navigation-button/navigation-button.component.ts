import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cp-navigation-button',
  templateUrl: './navigation-button.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent {
  @Input() isOpen = false;
  @Output() navigationToggle = new EventEmitter<boolean>();

  isNavigationOpen = false;
  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
    this.navigationToggle.emit(this.isNavigationOpen);
  }
}
