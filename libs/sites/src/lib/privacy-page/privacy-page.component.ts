import { NgFor, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownComponent } from '@cp/ui';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cp-privacy-page',
  standalone: true,
  imports: [NgFor, MarkdownComponent, TranslocoModule, RouterModule],
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.scss'],
})
@UntilDestroy()
export class PrivacyPageComponent implements OnInit {
  articles: string[] = [
    'designation',
    'call-website',
    'contact',
    'advertisement',
    'cookies',
    'transfer',
    'changes',
    'subject-rights',
    'questions',
    'encryption',
    'youtube',
  ];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    this.route.fragment
      .pipe(
        filter((fragment) => !!fragment),
        untilDestroyed(this)
      )
      .subscribe((fragment) => this.viewportScroller.scrollToAnchor(fragment!));
  }

  getFilePath(name: string) {
    return this.translocoService.translate(`privacy-page.${name}.src`);
  }
  getHeading(name: string) {
    return this.translocoService.translate(`privacy-page.${name}.heading`);
  }
}
