import { component$ } from '@builder.io/qwik';
import { ArticleSection } from '~/components/article-section';
import { Section } from '~/components/section';
import type { PageContent } from './model';

interface ArticlePageProps {
  page: PageContent;
}

export const ArticlePage = component$(({ page }: ArticlePageProps) => {
  return (
    <Section>
      <div class='mx-auto mb-10 max-w-4xl text-center md:mb-12'>
        <h2 class='text-2xl font-bold leading-8 text-secondary-900 md:text-3xl md:leading-10'>{page.contentHeading}</h2>
        {page.contentText && (
          <p class='mt-6 text-base font-normal leading-7 text-black opacity-80 md:text-lg md:leading-8'>
            {page.contentText}
          </p>
        )}
      </div>

      <hr class='container mx-auto mb-10 lg:mb-20' />

      <ArticleSection articles={page.articles} />
    </Section>
  );
});
