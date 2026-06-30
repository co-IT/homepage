import type { Article } from '~/components/article-section/model';
import type { PageContent } from '~/components/article-page';

const placeholderImage = '/img/common/placeholder.svg';

export const createImage = (topic: string): Article['image'] => ({
  src: placeholderImage,
  alt: `Platzhalterbild für ${topic}`
});

export const createBackgroundImage = (
  topic: string
): PageContent['backgroundImage'] => ({
  source: placeholderImage,
  alt: `Platzhalterbild für ${topic}`
});
