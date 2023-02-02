import { component$ } from '@builder.io/qwik';

export interface HeadingArticleProps {
  text: string;
}

export const HeadingArticle = component$((props: HeadingArticleProps) => {
  return (
    <>
      <div class='w-10 h-1 bg-accent mx-auto lg:mx-0 mb-3' />
      <h2 class='text-3xl lg:text-4xl mb-5 text-secondary-900 font-bold leading-8 lg:leading-10 text-center lg:text-left px-6 lg:px-0'>
        {props.text}
      </h2>
    </>
  );
});
