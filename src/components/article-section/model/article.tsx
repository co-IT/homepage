import type { QwikIntrinsicElements } from '@builder.io/qwik';

export interface ArticleCallToAction {
  text: string;
  href: string;
  ariaLabel?: string;
  title?: string;
  target?: QwikIntrinsicElements['a']['target'];
}

export interface Article {
  direction: 'left' | 'right';
  heading: string;
  text: string;
  enumeration?: string[];
  image: QwikIntrinsicElements['img'];
  callToAction?: ArticleCallToAction;
}
