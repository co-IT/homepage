import type { YouTubeVideo } from './model';

export interface YouTubeVideoDialogState {
  open: boolean;
  videoPlayingHasPredecessor: boolean;
  videoPlayingHasSuccessor: boolean;
  videoPlayingDescriptionMarkdown: string;
  videoPlaying: YouTubeVideo;
}
