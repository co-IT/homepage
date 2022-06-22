import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ArticleComponent,
  CallToActionComponent,
  PageTitleComponent,
  VideoTileComponent,
} from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    MarkdownModule,
    CallToActionComponent,
 PageTitleComponent,
    ArticleComponent,
    VideoTileComponent,
  ],
  templateUrl: './career-recruiting-process.component.html',
  styleUrls: ['./career-recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {
  videos = {
    why: {
      heading: 'recruiting-process.video.why.heading',
      videos: [
        {
          title: 'recruiting-process.video.why.founding',
          id: 'IZIduzPH9oU',
        },
        {
          title: 'recruiting-process.video.why.values',
          id: 'ChBHRdP2WNE',
        },
        {
          title: 'recruiting-process.video.why.orientation',
          id: 'n26k-IpzZAY',
        },
        {
          title: 'recruiting-process.video.why.solutions',
          id: '7trxOOr9Oys',
        },
        {
          title: 'recruiting-process.video.why.change',
          id: 'v9KlP83Y73I',
        },
        {
          title: 'recruiting-process.video.why.understand-people',
          id: 'kQBu_XUbRpQ',
        },
        {
          title: 'recruiting-process.video.why.origin',
          id: 'DE65AUyFI6E',
        },
      ],
    },
    how: {
      heading: 'recruiting-process.video.how.heading',
      videos: [
        {
          title: 'recruiting-process.video.how.your-development',
          id: 'ES6SMX18Zgs',
        },
        {
          title: 'recruiting-process.video.how.comrades',
          id: 'eeRmNqLyhZM',
        },
        {
          title: 'recruiting-process.video.how.higher-goal',
          id: 'HkKkJ-rBG0I',
        },
        {
          title: 'recruiting-process.video.how.leadership',
          id: 'k2TDf0F3KI0',
        },
        {
          title: 'recruiting-process.video.how.customer-orientation',
          id: 'iy5X7MVtIoI',
        },
        {
          title: 'recruiting-process.video.how.networking',
          id: 'pqDwg2ny4fY',
        },
      ],
    },
    what: {
      heading: 'recruiting-process.video.what.heading',
      videos: [
        {
          title: 'recruiting-process.video.what.salary-1',
          id: '2AceUlURmwY',
        },
        {
          title: 'recruiting-process.video.what.salary-2',
          id: 'klWORYu1AKI',
        },
        {
          title: 'recruiting-process.video.what.salary-3',
          id: 'MOEhmbz-1UY',
        },
        {
          title: 'recruiting-process.video.what.contract',
          id: '2AceUlURmwY',
        },
      ],
    },
  };
}
