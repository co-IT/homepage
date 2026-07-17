import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const digitalKiStrategie: PageContent = {
  title: 'co-IT - Digital- und KI-Strategie',
  metaDescription:
    'Digital- und KI-Strategie für Wachstum, Effizienz und Modernisierung mit priorisierter Roadmap und realistischem Umsetzungsrahmen.',
  headerHeading: 'Digital- & KI-Strategie',
  headerSubheading: 'KI sinnvoll nutzen',
  backgroundImage: createBackgroundImage('Digital- und KI-Strategie'),
  contentHeading: 'Digital- und KI-Strategie für Wachstum, Effizienz und Modernisierung',
  articles: [
    {
      direction: 'right',
      heading: 'KI ist sinnvoll, wenn sie an echte Arbeit andockt.',
      text: 'Viele Unternehmen probieren KI-Tools aus, ohne vorher zu klären, welche Aufgaben im Alltag wirklich Zeit, Nerven oder Geld kosten. Wir schauen deshalb zuerst auf Prozesse, Informationsquellen und Verantwortlichkeiten. Erst daraus ergibt sich, ob KI bei Recherche, Dokumentation, Datenaufbereitung, Kommunikation oder Softwareentwicklung tatsächlich einen sinnvollen Beitrag leisten kann.',
      image: {
        src: '/img/article-pages/ai-strategy-workshop.webp',
        alt: 'Beratungsteam bespricht KI-Einsatzbereiche in einem Workshop.'
      }
    },
    {
      direction: 'left',
      heading: 'Prozesse zuerst, Werkzeuge danach.',
      text: 'Gerade im Mittelstand zeigt sich schnell, wo KI praktisch helfen kann: bei Dokumenten, wiederkehrenden Auswertungen, internen Wissensbasen, Angebotsprozessen, Klassifikation, Recherche oder der Vorbereitung von Inhalten. Der größte Hebel entsteht aber erst dann, wenn klar ist, welche Daten vorhanden sind, welche Fachregeln gelten und an welcher Stelle der menschliche Blick unverzichtbar bleibt.',
      image: createImage('KI-Einsatzbereiche im Mittelstand')
    },
    {
      direction: 'right',
      heading: 'Produktiv nutzen, ohne die Kontrolle zu verlieren.',
      text: 'Wir prüfen geeignete Prozesse, notwendige Daten, Risiken, Compliance-Anforderungen und technische Voraussetzungen. Daraus entsteht keine abstrakte KI-Folie, sondern eine priorisierte Roadmap mit klaren Leitplanken für Validierung, Verantwortlichkeiten und Einführung. So kann KI auch in Analyse, Dokumentation oder Code-Erstellung unternehmensnah genutzt werden, ohne dass fachliche Kontrolle verloren geht.',
      image: createImage('KI-Roadmap und Compliance')
    }
  ]
};
