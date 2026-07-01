import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '../shared';

export const webseitenBuilderKi: PageContent = {
  title: 'co-IT - Webseiten-Builder mit KI',
  metaDescription:
    'KI-gestützte Webseiten-Erstellung für moderne Unternehmensauftritte mit klarer Struktur, verständlichen Texten und konsistenter Navigation.',
  headerHeading: 'Webseiten-Builder mit KI',
  headerSubheading: 'Struktur, Inhalt und Strategie',
  backgroundImage: createBackgroundImage('Webseiten-Builder mit KI'),
  contentHeading:
    'KI-gestützte Webseiten-Erstellung für moderne Unternehmensauftritte',
  articles: [
    {
      direction: 'right',
      heading: 'Eine gute Webseite beginnt nicht mit Design.',
      text: 'Viele Webseiten scheitern nicht an Farben oder Bildern, sondern an Struktur, Inhalt und Klarheit. Unser KI-gestützter Webseiten-Builder unterstützt dabei, aus Unternehmensinformationen, Leistungen und Zielgruppen eine saubere Seitenstruktur zu entwickeln.',
      image: createImage('Webseiten-Builder mit KI')
    },
    {
      direction: 'left',
      heading: 'Schnell zum ersten belastbaren Entwurf.',
      text: 'Statt wochenlang mit leeren Seiten, unklaren Menüpunkten und verstreuten Inhalten zu arbeiten, entsteht ein erster strukturierter Webseitenentwurf deutlich schneller. KI hilft bei Gliederung, Formulierung und Variantenbildung; die fachliche Prüfung und strategische Einordnung bleiben bewusst beim Menschen.',
      image: createImage('Webseitenentwurf mit KI')
    },
    {
      direction: 'right',
      heading: 'Struktur, Inhalt und Strategie zusammenbringen.',
      text: 'Der Nutzen liegt nicht nur im schnelleren Schreiben. Entscheidend ist, dass Leistungen, Zielgruppen, Navigation, Suchintentionen und interne Verlinkung gemeinsam betrachtet werden. So entsteht ein Auftritt, der Orientierung bietet.',
      image: createImage('Webseitenstrategie mit KI')
    }
  ]
};
