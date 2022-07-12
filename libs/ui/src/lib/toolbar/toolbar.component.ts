import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { ToolbarIcon } from '../toolbar-icon/toolbar-icon';
import { ToolbarIconComponent } from '../toolbar-icon/toolbar-icon.component';

@Component({
  selector: 'cp-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    NavigationButtonComponent,
    ToolbarIconComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;

  toolbarIcons: ToolbarIcon[] = [
    {
      type: 'phone',
      src: 'tel:+4921935163052',
    },
    {
      type: 'maps',
      src: 'https://www.google.com/maps/place/co-IT.eu+GmbH/@49.005146,8.39661,15z/data=!4m5!3m4!1s0x0:0x2ccc0a1e2f9cab01!8m2!3d49.005146!4d8.39661',
      target: '_blank',
    },
    {
      type: 'mail',
      src: 'mailto:info@co-IT.eu',
    },
  ];
}
