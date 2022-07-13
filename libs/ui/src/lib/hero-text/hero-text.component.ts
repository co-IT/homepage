import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-hero-text',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './hero-text.component.html',
  styleUrls: ['./hero-text.component.scss'],
})
export class HeroTextComponent {
  /**
   * pass transloco i18n keys as *keys
   */
  @Input() textKey: string = '';
  @Input() emphasizedTextKey: string = '';
  @Input() icon: string = '';
}
