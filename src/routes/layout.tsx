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
import { ContactPossibilitiesGrid } from '../components/contact-possibilities-grid';
import { ContentSwitch } from '../components/content-switch';
import { SectionArea } from '../components/section-area';

export default component$(() => {
  const documentHead = useDocumentHead();
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header
  } as HeaderProps;
  const menuState = useContext<NavigationState>(NavigationContext);

  return (
    <>
      <Header {...headerProps} />
      <Navigation open={menuState.isOpen} />

      <QuickDialButtons />
      <main>
        <Slot />

        <SectionArea>
          <ContentSwitch />
        </SectionArea>

        <SectionArea>
          {!documentHead.frontmatter?.footer
            ?.disableContactPossibilitiesGrid && <ContactPossibilitiesGrid />}
        </SectionArea>
      </main>

      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  meta: []
};
