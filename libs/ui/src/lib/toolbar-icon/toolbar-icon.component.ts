import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarIcon } from './toolbar-icon';

@Component({
  selector: 'cp-toolbar-icon',
  templateUrl: './toolbar-icon.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./toolbar-icon.component.scss'],
})
export class ToolbarIconComponent {
  @Input() toolbarIcon: ToolbarIcon | undefined;

  getSource(type: string | undefined) {
    return `/assets/icons/${type}.svg`;
  }
}
