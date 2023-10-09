import type { QwikIntrinsicElements } from '@builder.io/qwik';

export interface Article {
  direction: 'left' | 'right';
  heading: string;
  text: string;
  enumeration?: string[];
  image: QwikIntrinsicElements['img'];
}
