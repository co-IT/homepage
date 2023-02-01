import { component$, Slot, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useDocumentHead } from '@builder.io/qwik-city';
import { Footer } from '~/components/footer';
import type { HeaderProps } from '~/components/header';
import { Header } from '~/components/header';
import { Navigation } from '~/components/navigation';
import type { NavigationState } from '~/components/navigation/navigation.context';
import { NavigationContext } from '~/components/navigation/navigation.context';
import { QuickDialButtons } from '~/components/quick-dial-buttons';

export default component$(() => {
  const documentHead = useDocumentHead();
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header
  } as HeaderProps;
  const menuState = useContext<NavigationState>(NavigationContext);

  return (
    <>
      <Header {...headerProps} />
      {menuState.isOpen && <Navigation />}
      <QuickDialButtons />
      <main class='container mx-auto'>
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
