import type { Article } from '~/components/article-section/model';

export interface PageContent {
  title: string;
  metaDescription: string;
  headerHeading: string;
  headerSubheading: string;
  backgroundImage: {
    source: string;
    alt: string;
  };
  contentHeading: string;
  contentText?: string;
  articles: Article[];
}
