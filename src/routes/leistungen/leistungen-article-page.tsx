import { component$ } from '@builder.io/qwik';
import { ArticleSection } from '~/components/article-section';
import { Section } from '~/components/section';
import type { LeistungenPageContent } from './content';

interface LeistungenArticlePageProps {
  page: LeistungenPageContent;
}

export const LeistungenArticlePage = component$(
  ({ page }: LeistungenArticlePageProps) => {
    return (
      <Section>
        <div class='mx-auto mb-14 max-w-4xl text-center'>
          <div class='mx-auto mb-4 h-1 w-10 bg-primary' />
          <h2 class='text-3xl font-bold leading-9 text-secondary-900 md:text-4xl md:leading-10'>
            {page.contentHeading}
          </h2>
          {page.contentText && (
            <p class='mt-6 text-left text-base font-normal leading-7 text-black opacity-80 md:text-center'>
              {page.contentText}
            </p>
          )}
        </div>

        <ArticleSection articles={page.articles} />
      </Section>
    );
  }
);
