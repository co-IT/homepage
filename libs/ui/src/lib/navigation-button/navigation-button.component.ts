import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-navigation-button',
  templateUrl: './navigation-button.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent {
  @Input() isOpen = false;
}
