import type { QwikIntrinsicElements } from '@builder.io/qwik';

export interface ArticleCallToAction {
  text: string;
  href: string;
  ariaLabel?: string;
  title?: string;
  target?: QwikIntrinsicElements['a']['target'];
}

export interface Article {
  type?: 'article';
  direction: 'left' | 'right';
  heading: string;
  text: string;
  enumeration?: string[];
  image: QwikIntrinsicElements['img'];
  imageLabel?: string;
  callToAction?: ArticleCallToAction;
}

export interface ArticleTextBlock {
  type: 'text';
  heading: string;
  text: string;
}

export interface ArticlePracticeExample {
  title: string;
  text: string;
}

export interface ArticlePracticeSliderBlock {
  type: 'practice-slider';
  heading: string;
  intro?: string;
  examples: ArticlePracticeExample[];
}

export type ArticleSectionBlock = Article | ArticleTextBlock | ArticlePracticeSliderBlock;
