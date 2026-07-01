import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const digitalKiStrategie: PageContent = {
  title: 'co-IT - Digital- und KI-Strategie',
  metaDescription:
    'Digital- und KI-Strategie für Wachstum, Effizienz und Modernisierung mit priorisierter Roadmap und realistischem Umsetzungsrahmen.',
  headerHeading: 'Digital- & KI-Strategie',
  headerSubheading: 'KI sinnvoll nutzen',
  backgroundImage: createBackgroundImage('Digital- und KI-Strategie'),
  contentHeading:
    'Digital- und KI-Strategie für Wachstum, Effizienz und Modernisierung',
  articles: [
    {
      direction: 'right',
      heading: 'KI sinnvoll einsetzen statt nur ausprobieren.',
      text: 'Viele Unternehmen experimentieren mit KI-Tools, ohne zu wissen, wo sie wirklich Wert schaffen. Wir helfen Ihnen, sinnvolle Einsatzbereiche auf Basis Ihrer Prozesse, Datengrundlage und strategischen Ziele zu bewerten - nicht auf Basis von Hype.',
      image: createImage('Digital- und KI-Strategie')
    },
    {
      direction: 'left',
      heading: 'Wo KI im Mittelstand wirklich funktioniert.',
      text: 'Dokumentenverarbeitung, Kundenkommunikation, interne Wissensbasen, Qualitätsprüfung, Angebotsprozesse, Recherche, Klassifikation und Prozessautomatisierung sind Bereiche, in denen KI im KMU-Umfeld messbare Effizienzgewinne erzielen kann.',
      image: createImage('KI-Einsatzbereiche im Mittelstand')
    },
    {
      direction: 'right',
      heading: 'Strategie ohne Compliance ist keine Strategie.',
      text: 'Wir prüfen geeignete Prozesse, notwendige Daten, bestehende Risiken, Compliance-Anforderungen und technische Voraussetzungen. Daraus entsteht kein abstraktes Strategiepapier, sondern eine priorisierte Roadmap mit konkreten Maßnahmen, Verantwortlichkeiten und realistischem Umsetzungsrahmen.',
      image: createImage('KI-Roadmap und Compliance')
    }
  ]
};
