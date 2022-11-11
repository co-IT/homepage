import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { MarkdownComponent } from '@cp/ui';
import { Video } from '../models';

@Component({
  selector: 'cp-cinema-player',
  templateUrl: './cinema-player.component.html',
  standalone: true,
  imports: [NgIf, YouTubePlayerModule, MarkdownComponent],
  styleUrls: ['./cinema-player.component.scss'],
})
export class CinemaPlayerComponent {
  @Input() video: Video | undefined;
}
