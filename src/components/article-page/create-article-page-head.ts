import type { DocumentHead } from '@builder.io/qwik-city';
import type { PageContent } from './model';

export const createArticlePageHead = (page: PageContent): DocumentHead => ({
  title: page.title,
  meta: [
    {
      name: 'description',
      content: page.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: page.backgroundImage,
        heading: page.headerHeading,
        headingAccent: page.headerSubheading
      }
    }
  }
});
