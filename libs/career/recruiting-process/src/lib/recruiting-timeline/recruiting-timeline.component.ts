import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallToActionComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { RecruitingTimelineEntryComponent } from '../recruiting-timeline-entry/recruiting-timeline-entry.component';
import { TimelineEntry as TimelineItem } from '../recruiting-timeline-entry/time-line-entry.model';
import { RecruitingTimelineLinkComponent } from '../recruiting-timeline-link/recruiting-timeline-link.component';
import { TimelineLink } from '../recruiting-timeline-link/time-line-link.model';

@Component({
  selector: 'cp-recruiting-timeline',
  templateUrl: './recruiting-timeline.component.html',
  imports: [
    CommonModule,
    TranslocoModule,
    RecruitingTimelineEntryComponent,
    RecruitingTimelineLinkComponent,
    CallToActionComponent,
  ],
  standalone: true,
  styleUrls: ['./recruiting-timeline.component.scss'],
})
export class RecruitingTimelineComponent {
  entries: TimelineItem[] = [
    {
      heading: 'recruiting-process.process.1.heading',
      text: 'recruiting-process.process.1.text',
    },
    {
      heading: 'recruiting-process.process.2.heading',
      text: 'recruiting-process.process.2.text',
    },
    {
      heading: 'recruiting-process.process.3.heading',
      text: 'recruiting-process.process.3.text',
    },
    {
      heading: 'recruiting-process.process.4.heading',
      text: 'recruiting-process.process.4.text',
    },
    {
      heading: 'recruiting-process.process.5.heading',
      text: 'recruiting-process.process.5.text',
    },
    {
      heading: 'recruiting-process.process.6.heading',
      text: 'recruiting-process.process.6.text',
    }
  ];

  moreInformationLink: TimelineLink = {
    href: 'recruiting-process.process.link.href',
    text: 'recruiting-process.process.link.text',

  }
}


