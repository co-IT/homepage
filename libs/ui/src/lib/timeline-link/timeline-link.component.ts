import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineLink } from './timeline-link.model';

@Component({
  selector: 'cp-timeline-link',
  templateUrl: './timeline-link.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./timeline-link.component.scss'],
})
export class TimelineLinkComponent {
  @Input() value?: TimelineLink;
}
