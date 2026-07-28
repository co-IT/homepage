import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const cyberPortalImage = '/img/cyber/cyber-portal/header.webp';

export const cyberAwarenessPortal: PageContent = {
  title: 'co-IT - Cyber Lounge',
  metaDescription:
    'Die Cyber Lounge bündelt Schulungen, Phishing-Simulationen und nachvollziehbare Nachweise in einer Plattform für praxisnahe Sensibilisierung.',
  headerHeading: 'Cyber Lounge',
  headerSubheading: 'Sensibilisierung und Phishing-Simulationen',
  backgroundImage: createBackgroundImage('Cyber Lounge', cyberPortalImage),
  contentHeading: 'Schulungen, Phishing-Simulationen und Nachweise in einer Plattform',
  articles: [
    {
      direction: 'right',
      heading: 'Sensibilisierung, die im Arbeitsalltag wirkt.',
      text: 'Die Cyber Lounge bündelt Schulungen, Phishing-Simulationen und nachvollziehbare Nachweise in einer Plattform für praxisnahe Sensibilisierung. So wird aus einzelnen Maßnahmen ein strukturierter Lernprozess, der Sicherheitsbewusstsein stärkt und im Arbeitsalltag verankert.',
      image: createImage('Cyber Lounge')
    },
    {
      direction: 'left',
      heading: 'Lernen, simulieren, auswerten.',
      text: 'Schulungen, Simulationen und Nachweise greifen in einer Plattform ineinander. Verantwortliche sehen, welche Inhalte abgeschlossen wurden, wie sich Ergebnisse entwickeln und wo weiterer Handlungsbedarf besteht. So bleiben Maßnahmen nicht nur messbar, sondern auch intern erklärbar und gezielt weiterentwickelbar.',
      image: createImage('Lernen und Auswerten in der Cyber Lounge')
    },
    {
      direction: 'right',
      heading: 'Nachweise schaffen, Fortschritt sichtbar machen.',
      text: 'Die Cyber Lounge eignet sich für einzelne Unternehmen ebenso wie für Partner- und White-Label-Szenarien. Ob interne Sensibilisierung, Partnerlösung oder branchenspezifisches Angebot: Die Plattform lässt sich strukturiert einsetzen, an bestehende Prozesse anbinden und mit klaren Nachweisen für interne Anforderungen, Audits oder Partner verbinden.',
      image: createImage('Nachweise in der Cyber Lounge')
    }
  ]
};
