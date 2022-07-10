import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TimelineLink } from './time-line-link.model';

@Component({
  selector: 'cp-recruiting-timeline-link',
  templateUrl: './recruiting-timeline-link.component.html',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  styleUrls: ['./recruiting-timeline-link.component.scss'],
})
export class RecruitingTimelineLinkComponent {
  @Input() link?: TimelineLink;
}
