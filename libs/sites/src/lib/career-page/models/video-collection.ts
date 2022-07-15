import { Video } from '../../cinema-page/models';

export interface VideoCollectionGrouped {
  [key: string]: VideoCollection;
}

export interface VideoCollection {
  heading: string;
  appearance: 'blue' | 'green' | 'orange';
  videos: Video[];
}
