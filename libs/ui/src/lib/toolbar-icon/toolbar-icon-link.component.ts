import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarIconLink } from './toolbar-icon-link';

@Component({
  selector: 'cp-toolbar-icon',
  templateUrl: './toolbar-icon-link.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./toolbar-icon-link.component.scss'],
})
export class ToolbarIconLinkComponent {
  @Input() toolbarIconLink: ToolbarIconLink | undefined;

  getIconClass(type: string | undefined) {
    return `mdi ${type} mdi-24px mdi-offset-y`;
  }
}
