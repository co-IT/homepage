import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useDocumentHead } from '@builder.io/qwik-city';
import { Footer } from '~/components/footer';
import type { HeaderProps } from '~/components/header';
import { Header } from '~/components/header';
import { Navigation } from '~/components/navigation';
import { QuickDialButtons } from '~/components/quick-dial-buttons';

export default component$(() => {
  const documentHead = useDocumentHead();
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header
  } as HeaderProps;

  return (
    <>
      <Header {...headerProps} />
        <Navigation />
      <QuickDialButtons />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
};
