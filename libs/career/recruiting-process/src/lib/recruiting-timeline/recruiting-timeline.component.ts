import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallToActionComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { RecruitingTimelineEntryComponent } from '../recruiting-timeline-entry/recruiting-timeline-entry.component';

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
  entries = [
    {
      header: 'recruiting-process.timeline.documents.heading',
      content: 'recruiting-process.timeline.documents.content',
    },
    {
      header: 'recruiting-process.timeline.cultural-fit.heading',
      content: 'recruiting-process.timeline.cultural-fit.content',
    },
    {
      header: 'recruiting-process.timeline.meet.heading',
      content: 'recruiting-process.timeline.meet.content',
    },
    {
      header: 'recruiting-process.timeline.exam.heading',
      content: 'recruiting-process.timeline.exam.content',
    },
    {
      header: 'recruiting-process.timeline.contract.heading',
      content: 'recruiting-process.timeline.contract.content',
    },
  ];
}
