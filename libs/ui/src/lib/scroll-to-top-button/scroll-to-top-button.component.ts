import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'cp-scroll-to-top-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss'],
  animations: [
    trigger('scrollToTopButton', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(2em)' }),
        animate('0.2s', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.2s', style({ opacity: 0, transform: 'translateY(2em)' })),
      ]),
    ]),
  ],
})
export class ScrollToTopButtonComponent {
  showButton = false;

  constructor(private scroller: ViewportScroller) { }

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.showButton = window.scrollY > 550;
  }

  scrollToTop() {
    this.scroller.scrollToPosition([0, 0]);
  }
}
