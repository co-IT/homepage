import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { Video } from '../models';
import { MarkdownComponent } from '@cp/ui';

@Component({
  selector: 'cp-cinema-player',
  templateUrl: './cinema-player.component.html',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, MarkdownComponent],
  styleUrls: ['./cinema-player.component.scss'],
})
export class CinemaPlayerComponent {
  @Input() video: Video | undefined;
}
