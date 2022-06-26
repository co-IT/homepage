import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ArticleComponent,
  CallToActionComponent,
  PageTitleComponent,
  VideoTileComponent,
} from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';
import { CareerRecruitingProcessVideoRepository } from './career-recruiting-process-video.repository';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    MarkdownModule,
    CallToActionComponent,
    PageTitleComponent,
    ArticleComponent,
    VideoTileComponent,
  ],
  providers: [CareerRecruitingProcessVideoRepository],
  templateUrl: './career-recruiting-process.component.html',
  styleUrls: ['./career-recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {
  videos: any;
  constructor(repository: CareerRecruitingProcessVideoRepository) {
    this.videos = repository.videos;
  }
}
