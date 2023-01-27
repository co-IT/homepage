import { component$, Slot, useContext } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';
import { MenuContext } from '~/components/common';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { Navigation } from '~/components/navigation';
import { QuickDialButtons } from '~/components/quick-dial-buttons';
import type { HeaderProps } from '~/components/header';
import type { MenuStateType } from '~/components/common';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const documentHead = useDocumentHead();
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header
  } as HeaderProps;
  const menuState = useContext<MenuStateType>(MenuContext);

  return (
    <>
      <Header {...headerProps} />
      {menuState.isOpen && <Navigation />}
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
