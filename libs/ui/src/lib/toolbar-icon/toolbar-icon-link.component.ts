import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ToolbarIconLink } from './toolbar-icon-link';

@Component({
  standalone: true,
  selector: 'cp-toolbar-icon',
  imports: [NgIf],
  templateUrl: './toolbar-icon-link.component.html',
  styleUrls: ['./toolbar-icon-link.component.scss'],
})
export class ToolbarIconLinkComponent {
  @Input() toolbarIconLink: ToolbarIconLink | undefined;

  getIconClass(type: string | undefined) {
    return `mdi ${type} mdi-24px mdi-offset-y`;
  }
}
