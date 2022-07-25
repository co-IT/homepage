import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-markdown',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent {
  @Input() src: string | undefined;

  constructor(private router: Router) {}

  async handleClick(event: MouseEvent) {
    const target = event.target;

    if (!target || target.constructor !== HTMLAnchorElement) return;

    const anchorElement = target as HTMLAnchorElement;

    if (anchorElement.href.startsWith(location.origin)) {
      event.preventDefault();

      await this.router.navigateByUrl(anchorElement.pathname);
    }
  }
}
