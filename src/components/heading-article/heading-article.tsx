import { component$ } from '@builder.io/qwik';

export interface HeadingArticleProps {
  text: string;
}

export const HeadingArticle = component$((props: HeadingArticleProps) => {
  return (
    <>
      <div class='mx-auto mb-3 h-1 w-10 bg-primary lg:mx-0' />
      <h2 class='mb-5 px-6 text-center text-3xl font-bold leading-8 text-secondary-900 lg:px-0 lg:text-left lg:text-4xl lg:leading-10'>
        {props.text}
      </h2>
    </>
  );
});
