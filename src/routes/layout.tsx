import { component$, Slot } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';
import Header from '../components/header/header';
import type { HeaderProps } from '../components/header/header.props';

export default component$(() => {
  const documentHead = useDocumentHead();
  // TODO: Improve type-safety
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header
  } as HeaderProps;

  return (
    <>
      <main>
        <Header {...headerProps} />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
