import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineParagraph } from './timeline-paragraph.model';

@Component({
  selector: 'cp-timeline-paragraph',
  templateUrl: './timeline-paragraph.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./timeline-paragraph.component.scss'],
})
export class TimelineParagraphComponent {
  @Input() value?: TimelineParagraph;
}
