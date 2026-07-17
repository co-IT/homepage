import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const cyberPortalImage = '/img/cyber/cyber-portal/header.webp';

export const cyberAwarenessPortal: PageContent = {
  title: 'co-IT - Cyber-Awareness-Portal',
  metaDescription:
    'Awareness-Trainings, Prüfungen, Zertifikate und Phishing-Simulationen in einer Plattform für messbares Sicherheitsbewusstsein.',
  headerHeading: 'Cyber-Awareness-Portal',
  headerSubheading: 'Awareness und Phishing-Simulationen',
  backgroundImage: createBackgroundImage('Cyber-Awareness-Portal', cyberPortalImage),
  contentHeading: 'Awareness-Trainings und Phishing-Simulationen in einer Plattform',
  articles: [
    {
      direction: 'right',
      heading: 'Sensibilisierung, die im Alltag wirkt.',
      text: 'Das co-IT Cyber-Awareness-Portal bündelt Schulungen, Prüfungen, Erinnerungen und Phishing-Simulationen in einer Plattform für messbares Sicherheitsbewusstsein - automatisiert, skalierbar und mandantenfähig. So wird aus einzelnen Maßnahmen ein nachvollziehbarer Lernprozess statt einer einmaligen Pflichtübung.',
      image: createImage('Cyber-Awareness-Portal')
    },
    {
      direction: 'left',
      heading: 'Lernen, simulieren, auswerten.',
      text: 'Kurse, Prüfungen, Zertifikate, Erinnerungen und Simulationen greifen in einer Plattform ineinander. Verantwortliche sehen, welche Inhalte abgeschlossen wurden, wie sich Klickraten entwickeln und wo weiterer Handlungsbedarf besteht. Ergebnisse bleiben damit nicht nur messbar, sondern auch intern erklärbar und dokumentierbar.',
      image: createImage('Lernen und Auswerten im Cyber-Awareness-Portal')
    },
    {
      direction: 'right',
      heading: 'Nachweise schaffen, Fortschritt sichtbar machen.',
      text: 'Das Portal eignet sich für einzelne Unternehmen ebenso wie für Partner- und White-Label-Szenarien. Ob interne Sensibilisierung, Versicherungsnehmer-Portal oder branchenspezifisches Schulungsangebot: Die Plattform lässt sich strukturiert einsetzen, an bestehende Prozesse anbinden und mit klaren Nachweisen für Audits, Partner oder interne Anforderungen verbinden.',
      image: createImage('Nachweise im Cyber-Awareness-Portal')
    }
  ]
};
