import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineParagraph } from './timeline-paragraph.model';

@Component({
  standalone: true,
  selector: 'cp-timeline-paragraph',
  imports: [NgIf],
  templateUrl: './timeline-paragraph.component.html',
  styleUrls: ['./timeline-paragraph.component.scss'],
})
export class TimelineParagraphComponent {
  @Input() value?: TimelineParagraph;
}
