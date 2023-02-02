import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ArticleSection } from "~/components/article-section";
import { ContactPossibilitiesGrid } from "~/components/contact-possibilities-grid";
import { SectionArea } from "~/components/section-area";
import { TeamSection } from "~/components/team-section";

export default component$(() => {
  return (
    <>
      <SectionArea backgroundColor="white">
        <ArticleSection />
      </SectionArea>

      <SectionArea backgroundColor="white">
        <TeamSection />
      </SectionArea>

      <SectionArea backgroundColor="white">
        <ContactPossibilitiesGrid />
      </SectionArea>
    </>
  );
});

export const head: DocumentHead = {
  title: "co-IT - Inspire to Change",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
  frontmatter: {
    header: {
      type: "content-page",
      configuration: {
        backgroundImage: {
          source: "/img/about/header.avif",
          alt: "Three team members enjoying engineering.",
        },
        heading: "Motiviert von Werten",
        headingAccent: "Mut, Kollegialität, Hingabe",
      },
    },
  },
};
