import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallToActionComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { RecruitingTimelineEntryComponent } from '../recruiting-timeline-entry/recruiting-timeline-entry.component';
import { TimelineEntry as TimelineItem } from './time-line-entry.model';

@Component({
  selector: 'cp-recruiting-timeline',
  templateUrl: './recruiting-timeline.component.html',
  imports: [
    CommonModule,
    TranslocoModule,
    RecruitingTimelineEntryComponent,
    CallToActionComponent,
  ],
  standalone: true,
  styleUrls: ['./recruiting-timeline.component.scss'],
})
export class RecruitingTimelineComponent {
  entries: TimelineItem[] = [
    {
      heading: 'recruiting-process.timeline.documents.heading',
      text: 'recruiting-process.timeline.documents.content',
    },
    {
      heading: 'recruiting-process.timeline.cultural-fit.heading',
      text: 'recruiting-process.timeline.cultural-fit.content',
    },
    {
      heading: 'recruiting-process.timeline.meet.heading',
      text: 'recruiting-process.timeline.meet.content',
    },
    {
      heading: 'recruiting-process.timeline.exam.heading',
      text: 'recruiting-process.timeline.exam.content',
    },
    {
      heading: 'recruiting-process.timeline.contract.heading',
      text: 'recruiting-process.timeline.contract.content',
    },
  ];
}


