import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownComponent } from '@cp/ui';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cp-privacy-page',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, TranslocoModule, RouterModule],
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.scss'],
})
@UntilDestroy()
export class PrivacyPageComponent implements OnInit {
  articles: { index: string; name: string }[] = [
    { index: '018', name: 'designation' },
    { index: '019', name: 'call-website' },
    { index: '020', name: 'contact' },
    { index: '021', name: 'advertisement' },
    { index: '022', name: 'cookies' },
    { index: '022', name: 'transfer' },
    { index: '022', name: 'changes' },
    { index: '022', name: 'subject-rights' },
    { index: '022', name: 'questions' },
    { index: '022', name: 'encryption' },
    { index: '022', name: 'youtube' },
  ];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private translocoService: TranslocoService
  ) {}

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
