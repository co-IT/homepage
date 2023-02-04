import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleSection } from '~/components/article-section';
import { SectionArea } from '~/components/section-area';
import type { Article } from '../../components/article-section/model';

export default component$(() => {
  const articles: Article[] = [
    {
      direction: 'right',
      heading: 'Wir meistern Komplexität im Team',
      text: 'Unsere T-Shaped Professionals flankieren ihr Tiefenwissen mit ausgewähltem Breitenwissen. Diesen Gedanken haben wir auf Unternehmensebene konsquent weitergedacht, indem wir gezielt Kompetenzen einzelner Mitarbeiter aufeinander abstimmen. Beispielsweise bleibt ein Haus, bei dem lediglich die Eingangstür, nicht aber die Fenster verschlossen sind, unsicher. Darum haben wir sowohl im IT-Serivce-Management als auch in der Softwareentwicklung zertifizierte Sicherheitsexperten.',
      image: {
        src: '/img/about/flip-chart-session.webp',
        alt: 'Two colleagues working on the flip chart'
      }
    },
    {
      direction: 'left',
      heading: 'Wir verstehen Soft Skills als Must-haves',
      text: 'Nur als Team lässt sich wirklich Großes und Nachhaltiges erreichen. Daher sind wir davon überzeugt, dass Soft Skills genauso entwickelt werden müssen wie das fachliche Tiefenwissen. Bereits in unserem Einstellungsprozess stellen wir sicher, dass unsere Mitarbeiter gerne kommunizieren, verantwortungsbewusst und aufgrund ihrer Empathie maximal teamfähig sind. Rhetoriktrainings durch linguistische Psychologen und Textcoachings durch professionelle Redakteure sind Beispiele, wie wir unsere Mitarbeiter zusätzlich entwickeln.',
      image: {
        src: '/img/about/team-up.webp',
        alt: 'Two colleagues checking the state of their work.'
      }
    },
    {
      direction: 'right',
      heading: 'Wir legen den Finger in die Wunde',
      text: 'Um das Business zu verstehen, müssen wir Menschen verstehen! Wenn beispielsweise eine Software für das Wissensmanagement - wie ein Unternehmenswiki - eingeführt werden soll, stellen wir die Frage nach der Bereitschaft der Angestellten ihr wertvolles Wissen zu teilen. Hierfür sind sichere Arbeitsplätze und eine echte Vertrauenskultur Voraussetzung.',
      image: {
        src: '/img/about/team-up.webp',
        alt: 'Two colleagues checking the state of their work.'
      }
    },
    {
      direction: 'left',
      heading: 'Wir wollen Probleme durchdringen',
      text: 'Veränderung braucht Orientierung, Orientierung braucht Richtung und Richtung braucht ein Ziel. Darum treten wir gerne einen Schritt zurück und hinterfragen technische Wünsche. Ist es tatsächlich der Hammer, den ein Kunde braucht, oder ist es der Nagel in der Wand, um das Bild aufzuhängen?',
      image: {
        src: '/img/about/it-fascination.webp',
        alt: 'A team of two learning together'
      }
    }
  ];
  return (
    <>
      <SectionArea>
        <ArticleSection articles={articles} />
      </SectionArea>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/career/header.webp',
          alt: 'Three team members enjoying engineering.'
        },
        heading: 'Auf den Punkt abgestimmt',
        headingAccent: 'Das bedeutet Qualität.'
      }
    }
  }
};
