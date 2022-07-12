import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { ToolbarIconLink } from '../toolbar-icon/toolbar-icon-link';
import { ToolbarIconLinkComponent } from '../toolbar-icon/toolbar-icon-link.component';

@Component({
  selector: 'cp-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    NavigationButtonComponent,
    ToolbarIconLinkComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;

  toolbarIconLinks: ToolbarIconLink[] = [
    {
      icon: 'mdi-phone',
      href: 'tel:+4921935163052',
    },
    {
      icon: 'mdi-email-outline',
      href: 'mailto:info@co-IT.eu',
    },
    {
      icon: 'mdi-map',
      href: 'https://g.page/communicativeIT?share',
      target: '_blank',
    },
  ];
}
