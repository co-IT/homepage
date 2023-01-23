import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useDocumentHead } from "@builder.io/qwik-city";
import type { HeaderProps } from "../components/header";
import { Header } from "../components/header";
import { Footer } from "~/components/footer";

export default component$(() => {
  const documentHead = useDocumentHead();
  const headerProps: HeaderProps = {
    ...documentHead.frontmatter.header,
  } as HeaderProps;

  return (
    <>
      <Header {...headerProps} />
      <main class="container mx-auto flex flex-col space-y-32">
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
};
