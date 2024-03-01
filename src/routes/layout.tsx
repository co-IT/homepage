import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useDocumentHead } from '@builder.io/qwik-city';
import { Footer } from '~/components/footer';
import type { HeaderProps } from '~/components/header';
import { Header } from '~/components/header';
import { QuickDialButtons } from '~/components/quick-dial-buttons';
import { ContactPossibilitiesGrid } from '../components/contact-possibilities-grid';
import { ContentSwitch } from '../components/content-switch';
import { Section } from '../components/section';

export default component$(() => {
  const documentHead = useDocumentHead();
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header
  } as HeaderProps;

  return (
    <>
      <Header {...headerProps} />

      <QuickDialButtons />
      <main>
        <Slot />

        <Section>
          <ContentSwitch />
        </Section>

        <Section>
          {!documentHead.frontmatter.footer
            ?.disableContactPossibilitiesGrid && <ContactPossibilitiesGrid />}
        </Section>
      </main>

      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  meta: []
};
