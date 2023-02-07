import type { YouTubeVideo } from './model';

export interface YouTubeVideoDialogState {
  videoPlayingHasPredecessor: boolean;
  videoPlayingHasSuccessor: boolean;
  videoPlayingDescriptionMarkdown: string;
  videoPlaying: YouTubeVideo;
}
