import type { Article } from '~/components/article-section/model';
import type { PageContent } from '~/components/article-page';

const placeholderImage = '/img/common/placeholder.svg';

export const createImage = (
  topic: string,
  src = placeholderImage
): Article['image'] => ({
  src,
  alt:
    src === placeholderImage
      ? `Platzhalterbild für ${topic}`
      : `Bild zu ${topic}`
});

export const createBackgroundImage = (
  topic: string,
  source = placeholderImage
): PageContent['backgroundImage'] => ({
  source,
  alt:
    source === placeholderImage
      ? `Platzhalterbild für ${topic}`
      : `Hintergrundbild zu ${topic}`
});
