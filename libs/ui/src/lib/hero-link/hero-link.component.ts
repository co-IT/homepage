import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-hero-link',
  standalone: true,
  templateUrl: './hero-link.component.html',
  styleUrls: ['./hero-link.component.scss'],
})
export class HeroLinkComponent {
  @Input() url = '#';
  @Input() text = '';
}
