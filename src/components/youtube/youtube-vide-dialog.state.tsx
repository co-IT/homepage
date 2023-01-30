import type { YouTubeVideo } from './model';

export interface YouTubeVideoDialogState {
  isOpen: boolean;
  videoPlaying: YouTubeVideo;
}
