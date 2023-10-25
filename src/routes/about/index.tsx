import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleSection } from '~/components/article-section';
import { Section } from '~/components/section';
import { TeamSection } from '~/components/team-section';
import type { Article } from '../../components/article-section/model';

export default component$(() => {
  const articles: Article[] = [
    {
      direction: 'right',
      heading: 'Für Veränderungen begeistern',
      text: 'Das Meistern neuer Herausforderungen sehen wir als größte Hürde für kleine und mittelständische Unternehmen. Deshalb wollen wir helfen Veränderung als Chance wahrzunehmen und Erneuerungen zu etwas Positivem machen. Uns prägen Werte wie Pflichtgefühl und Kollegialität. Daher gehört der ehrliche und verbindliche Handschlag für unsere Mitarbeiter auch in der digitalen Welt dazu.',
      image: {
        src: '/img/about/flip-chart-session.webp',
        alt: 'article'
      }
    },
    {
      direction: 'left',
      heading: 'Zusammen mehr erreichen',
      text: 'Wir haben den Anspruch Ihnen Spitzenleistungen zu bieten. Uns ist bewusst, dass es dafür eine partnerschaftliche Zusammenarbeit auf Augenhöhe braucht. Die Technologie kommt dabei zum Schluss. Zuerst analysieren wir daher gemeinsam Ihre fachlichen Bedürfnisse und unternehmensspezifischen Hintergrund. Erst im Anschluss bringen wir unser technisches Tiefen- und prozessuales Breitenwissen ein, um Ihre Geschäftsprozesse bestmöglich umzusetzen. Unsere Philosophie ist darauf ausgerichtet Qualitätskriterien für modernes, effektives und angenehmes Arbeiten umzusetzen, damit wir in einem kontinuierlichen Verbesserungsprozess die Weichen sukzessive auf nachhaltige, erfolgreiche Veränderung stellen. Regelmäßig bedarf es dafür nicht nur das Wissen darüber, was funktioniert, sondern eben auch was nicht funktioniert.',
      image: {
        src: '/img/about/team-waling-in-the-nature.webp',
        alt: 'article'
      }
    },
    {
      direction: 'right',
      heading: 'Uns prägt Faszination',
      text: 'Speziellen Wert legen wir deshalb auf die Auswahl unserer Mitarbeiter. Wir wissen, dass Faszination und Leidenschaft zu Höchstleistungen motivieren und wo diese sind, ist Kollegialität auch nicht weit. Die gute Zusammenarbeit hat besondere Vorteile für Sie: Lösungen können entlang der gesamten Wertschöpfungskette entwickelt werden. Der Übergang von der Prozessanalyse über das Bereitstellen der zuverlässigen Infrastruktur bis hin zur individuellen Softwareentwicklung geschieht nahtlos und liefert Ihnen einen echten Mehrwert.',
      image: {
        src: '/img/about/team-reviewing-a-solution.webp',
        alt: 'article'
      }
    }
  ];
  return (
    <>
      <Section>
        <ArticleSection articles={articles} />
      </Section>

      <TeamSection />
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Über uns',

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/about/header.webp',
          alt: 'Three team members enjoying engineering.'
        },
        heading: 'Motiviert von Werten',
        headingAccent: 'Mut, Kollegialität, Hingabe'
      }
    }
  }
};
