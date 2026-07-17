import type { ArticleSectionBlock } from '~/components/article-section/model';

export interface PageContent {
  title: string;
  metaDescription: string;
  headerHeading: string;
  headerSubheading: string;
  headerTeaser?: string;
  backgroundImage: {
    source: string;
    alt: string;
  };
  contentHeading?: string;
  contentText?: string;
  articles: ArticleSectionBlock[];
}
