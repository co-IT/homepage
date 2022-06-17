import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-footer',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() logoSrc?: string;
  @Input() logoAlt?: string;
}
