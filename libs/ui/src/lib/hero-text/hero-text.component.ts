import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-hero-text',
  standalone: true,
  imports: [NgIf, TranslocoModule],
  templateUrl: './hero-text.component.html',
  styleUrls: ['./hero-text.component.scss'],
})
export class HeroTextComponent {
  @Input() text = '';
  @Input() emphasizedText = '';
  @Input() icon = '';
}
