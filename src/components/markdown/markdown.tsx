import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';

import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { MarkdownProps } from './markdown-props';

export const Markdown = component$(
  (props: MarkdownProps & QwikIntrinsicElements['p']) => {
    const { markdown, ...pProps } = props;

    const store = useStore({ html: '', markdown });

    useVisibleTask$(({ track }) => {
      track(() => props.markdown);

      unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(props.markdown)
        .then(html => (store.html = String(html)));
    });

    return <p dangerouslySetInnerHTML={store.html} {...pProps}></p>;
  }
);
