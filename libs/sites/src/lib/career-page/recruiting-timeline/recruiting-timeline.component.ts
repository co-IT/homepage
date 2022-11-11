import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import {
  CallToActionComponent,
  TimelineParagraph,
  TimelineParagraphComponent
} from '@cp/ui';

import {
  TranslateParams,
  TranslocoModule,
  TranslocoService
} from '@ngneat/transloco';

@Component({
  selector: 'cp-recruiting-timeline',
  templateUrl: './recruiting-timeline.component.html',
  imports: [
    NgFor,
    TranslocoModule,
    TimelineParagraphComponent,
    CallToActionComponent,
  ],
  standalone: true,
  styleUrls: ['./recruiting-timeline.component.scss'],
})
export class RecruitingTimelineComponent {
  constructor(private transloco: TranslocoService) { }

  paragraphs: TimelineParagraph[] = [
    {
      heading: this.t('recruiting.process.1.heading'),
      text: this.t('recruiting.process.1.text'),
    },
    {
      heading: this.t('recruiting.process.2.heading'),
      text: this.t('recruiting.process.2.text'),
    },
    {
      heading: this.t('recruiting.process.3.heading'),
      text: this.t('recruiting.process.3.text'),
    },
    {
      heading: this.t('recruiting.process.4.heading'),
      text: this.t('recruiting.process.4.text'),
    },
    {
      heading: this.t('recruiting.process.5.heading'),
      text: this.t('recruiting.process.5.text'),
    },
    {
      heading: this.t('recruiting.process.6.heading'),
      text: this.t('recruiting.process.6.text'),
    },
  ];

  private t(key: TranslateParams) {
    return this.transloco.translate(key);
  }
}
