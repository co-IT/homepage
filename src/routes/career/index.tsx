import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
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
          source: "/img/career/header.avif",
          alt: "Three team members enjoying engineering.",
        },
        heading: "Geprägt durch Menschen",
        headingAccent: "Arbeitszeit ist Lebenszeit",
        teaser:
          "Wir wünschen uns eine offene und ehrliche Zusammenarbeit. Uns ist es daher wichtig Ihnen transparent zu kommunizieren, was unsere Identität ausmacht, was uns motiviert für Sie unser Bestes zu geben und wie wir mit Ihnen gemeinsam Herausforderungen angehen wollen.",
      },
    },
  },
};
