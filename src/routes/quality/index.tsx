import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleSection } from '~/components/article-section';
import { Section } from '~/components/section';
import type { Article } from '../../components/article-section/model';

export default component$(() => {
  const articles: Article[] = [
    {
      direction: 'right',
      heading: 'Wir meistern Komplexität im Team',
      text: 'Unsere T-Shaped Professionals flankieren ihr Tiefenwissen mit ausgewähltem Breitenwissen. Diesen Gedanken haben wir auf Unternehmensebene konsequent weitergedacht, indem wir gezielt Kompetenzen einzelner Mitarbeiter aufeinander abstimmen. Beispielsweise bleibt ein Haus, bei dem lediglich die Eingangstür, nicht aber die Fenster verschlossen sind, unsicher. Darum haben wir sowohl im IT-Service-Management als auch in der Softwareentwicklung zertifizierte Sicherheitsexperten.',
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
        src: '/img/quality/team-up.webp',
        alt: 'Two colleagues checking the state of their work.'
      }
    },
    {
      direction: 'right',
      heading: 'Wir legen den Finger in die Wunde',
      text: 'Um das Business zu verstehen, müssen wir Menschen verstehen! Wenn beispielsweise eine Software für das Wissensmanagement - wie ein Unternehmenswiki - eingeführt werden soll, stellen wir die Frage nach der Bereitschaft der Angestellten Ihr wertvolles Wissen zu teilen. Hierfür sind sichere Arbeitsplätze und eine echte Vertrauenskultur Voraussetzung.',
      image: {
        src: '/img/quality/two-men-standing-in-front-of-a-monitor.webp',
        alt: 'Two colleagues checking the state of their work.'
      }
    },
    {
      direction: 'left',
      heading: 'Wir wollen Probleme durchdringen',
      text: 'Veränderung braucht Orientierung, Orientierung braucht Richtung und Richtung braucht ein Ziel. Darum treten wir gerne einen Schritt zurück und hinterfragen technische Wünsche. Ist es tatsächlich der Hammer, den ein Kunde braucht, oder ist es der Nagel in der Wand, um das Bild aufzuhängen?',
      image: {
        src: '/img/quality/on-man-looking-over-the-sea.webp',
        alt: 'A team of two learning together'
      }
    }
  ];
  return (
    <>
      <Section>
        <ArticleSection articles={articles} />
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Qualität, abgestimmt auf den Punkt!',
  meta: [
    {
      name: 'description',
      content:
        'Wir setzen auf Qualität und Teamarbeit. Unsere T-Shaped-Professionals verstehen Ihr Business, um für Sie eine auf den Punkt abgestimmte IT-Lösung zu schaffen.'
    },
    {
      name: 'keywords',
      content:
        'Qualität, Teamarbeit, T-Shaped-Professionals, Abgestimmt auf den Punkt, IT-Lösung'
    }
  ],

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/quality/header.webp',
          alt: 'Three team members enjoying engineering.'
        },
        heading: 'Auf den Punkt abgestimmt',
        headingAccent: 'Das bedeutet Qualität.'
      }
    }
  }
};
