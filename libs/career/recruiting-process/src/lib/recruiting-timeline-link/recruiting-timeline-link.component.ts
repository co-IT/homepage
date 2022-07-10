import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineLink } from './time-line-link.model';

@Component({
  selector: 'cp-recruiting-timeline-link',
  templateUrl: './recruiting-timeline-link.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./recruiting-timeline-link.component.scss'],
})
export class RecruitingTimelineLinkComponent {
  @Input() value?: TimelineLink;
}
