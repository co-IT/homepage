import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '../shared';

const teamImage = '/img/about/team.webp';

export const unternehmen: PageContent = {
  title: 'co-IT - Unternehmen',
  metaDescription:
    'Die co-IT.eu GmbH verbindet IT-Betrieb, Softwareentwicklung und Beratung für pragmatische Lösungen im Mittelstand.',
  headerHeading: 'Unternehmen',
  headerSubheading: 'IT, Software und Beratung aus einer Hand',
  backgroundImage: createBackgroundImage('Unternehmen', teamImage),
  contentHeading: 'Die co-IT.eu GmbH - IT, Software und Beratung aus einer Hand',
  articles: [
    {
      direction: 'right',
      heading: 'Betrieb, Entwicklung und Beratung aus einer Hand.',
      text: 'Die co-IT.eu GmbH ist aus der Verbindung von IT-Betrieb, Softwareentwicklung und Beratung entstanden. Genau diese Mischung prägt bis heute unsere Arbeit: Wir denken nicht nur in Tickets, nicht nur in Code und nicht nur in Strategiefolien - sondern in funktionierenden Lösungen für reale Unternehmensprozesse.',
      image: createImage('Unternehmen', teamImage)
    },
    {
      direction: 'left',
      heading: 'Mittelstand verstehen heißt pragmatisch handeln.',
      text: 'Kleine und mittelständische Unternehmen brauchen keine abstrakten Technologiekonzepte, sondern belastbare Unterstützung. Wir helfen dort, wo IT ausfällt, Prozesse haken, Sicherheitsanforderungen steigen oder Digitalisierung greifbar werden soll.',
      image: createImage('Mittelstand verstehen')
    },
    {
      direction: 'right',
      heading: 'Verantwortung statt Zuständigkeitslücken.',
      text: 'Wenn ein Sicherheitsproblem aus einer Cloud-Konfiguration entsteht oder ein Softwareprojekt Auswirkungen auf den Betrieb hat, betrachten wir diese Schnittstellen gemeinsam. Genau dort entsteht für Sie der Mehrwert.',
      image: createImage('Verantwortung in IT-Projekten')
    }
  ]
};
