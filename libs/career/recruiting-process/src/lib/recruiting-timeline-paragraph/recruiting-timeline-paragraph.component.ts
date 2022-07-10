import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineParagraph } from './time-line-paragraph.model';

@Component({
  selector: 'cp-recruiting-timeline-paragraph',
  templateUrl: './recruiting-timeline-paragraph.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./recruiting-timeline-paragraph.component.scss'],
})
export class RecruitingTimelineParagraphComponent {
  @Input() value?: TimelineParagraph;
}
