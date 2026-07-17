import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const webseitenBuilderKi: PageContent = {
  title: 'co-IT - Webseiten-Builder mit KI',
  metaDescription:
    'KI-gestützte Webseiten-Erstellung für moderne Unternehmensauftritte mit klarer Struktur, verständlichen Texten und konsistenter Navigation.',
  headerHeading: 'Webseiten-Builder mit KI',
  headerSubheading: 'Struktur, Inhalt und Strategie',
  backgroundImage: createBackgroundImage('Webseiten-Builder mit KI'),
  contentHeading: 'KI-gestützte Webseiten-Erstellung für moderne Unternehmensauftritte',
  articles: [
    {
      direction: 'right',
      heading: 'Eine gute Webseite beginnt mit verwertbaren Quellen.',
      text: 'Viele Webseiten scheitern nicht an Farben oder Bildern, sondern an verteilten Informationen, unklaren Schwerpunkten und fehlender Struktur. Unser KI-gestützter Webseiten-Builder hilft dabei, aus bestehenden Seitentexten, internen Dokumenten, Leistungsbeschreibungen, Erfahrungsberichten und Referenzen eine belastbare inhaltliche Grundlage aufzubauen.',
      image: {
        src: '/img/article-pages/website-sitemap-wall-workshop.webp',
        alt: 'Team strukturiert Webseiteninhalte mit Sitemap-Karten an einer Wand.'
      }
    },
    {
      direction: 'left',
      heading: 'Aus verstreuten Inhalten wird ein belastbarer Erstentwurf.',
      text: 'Statt wochenlang zwischen alten Textdateien, Notizen, Interviews und Menüideen hin und her zu springen, entsteht schnell ein erster strukturierter Entwurf für Navigation, Seitentypen und Textschwerpunkte. KI hilft bei Gliederung, Formulierung und Variantenbildung. Die fachliche Prüfung, Priorisierung und Zielgruppenanpassung bleiben bewusst beim Menschen.',
      image: createImage('Webseitenentwurf mit KI')
    },
    {
      direction: 'right',
      heading: 'KI schreibt vor. Menschen entscheiden.',
      text: 'Der Nutzen liegt nicht nur im schnelleren Schreiben. Entscheidend ist, dass Leistungen, Zielgruppen, Navigation, Suchintentionen und interne Verlinkung gemeinsam betrachtet werden und dass Erfahrungswissen aus echten Projekten in die Texte einfließt. So entsteht kein generischer KI-Text, sondern ein Auftritt, der fachlich passt und Orientierung bietet.',
      image: createImage('Webseitenstrategie mit KI')
    }
  ]
};
