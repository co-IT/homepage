import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MarkdownComponent, YoutubeService } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-solutions',
  standalone: true,
  imports: [
    YouTubePlayerModule,
    MarkdownComponent,
    TranslocoModule,
  ],
  templateUrl: './solutions-page.component.html',
  styleUrls: ['./solutions-page.component.scss'],
})
export class SolutionsPageComponent implements OnInit {
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.loadIFrameApi();
  }
}
