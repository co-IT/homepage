import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MarkdownComponent, YoutubeService } from '@cp/ui';

@Component({
  selector: 'cp-solutions',
  standalone: true,
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MarkdownComponent,
    TranslocoModule,
  ],
  templateUrl: './solutions-page.component.html',
  styleUrls: ['./solutions-page.component.scss'],
})
export class SolutionsPageComponent implements OnInit {
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.loadIFrameApi();
  }
}
