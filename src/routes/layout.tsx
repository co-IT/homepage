import { component$, Slot } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';
import Header from '../components/header/header';

export default component$(() => {
  const documentHead = useDocumentHead();
  return (
    <>
      <main>
        <Header />
        <section>
          <div>{JSON.stringify(documentHead)}</div>
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
