import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const behoerden: PageContent = {
  title: 'co-IT - Behörden',
  metaDescription:
    'IT-Sicherheit, Awareness und digitale Prozesse für Behörden und öffentliche Einrichtungen mit dokumentierbaren, langfristig betreibbaren Lösungen.',
  headerHeading: 'Behörden',
  headerSubheading: 'Nachvollziehbare sichere Lösungen',
  backgroundImage: createBackgroundImage('Behörden'),
  contentHeading: 'IT-Sicherheit, Awareness und digitale Prozesse für öffentliche Einrichtungen',
  articles: [
    {
      direction: 'right',
      heading: 'Öffentliche Einrichtungen brauchen besonders belastbare IT.',
      text: 'Behörden und öffentliche Organisationen arbeiten mit sensiblen Daten, festen Prozessen und hoher Erwartung an Verlässlichkeit. Gleichzeitig wachsen die Anforderungen an Digitalisierung, IT-Sicherheit und Nachweisbarkeit. Lösungen müssen deshalb nicht nur funktionieren, sondern auch nachvollziehbar, dokumentierbar und langfristig betreibbar sein.',
      image: createImage('Behörden')
    },
    {
      direction: 'left',
      heading: 'Sicherheit verständlich und dokumentierbar machen.',
      text: 'Awareness-Schulungen, Phishing-Simulationen, E-Mail-Sicherheitschecks und Passwort-Management helfen, Risiken sichtbar und steuerbar zu machen. Ergebnisse müssen technisch korrekt, intern erklärbar und dokumentierbar sein. Gerade bei schrittweisen Sicherheitsmaßnahmen ist es wichtig, Wirkung und Auswirkungen nachvollziehbar belegen zu können.',
      image: createImage('Dokumentierbare IT-Sicherheit für Behörden')
    },
    {
      direction: 'right',
      heading: 'Digitalisierung entlang echter Verwaltungsabläufe.',
      text: 'Öffentliche Einrichtungen benötigen Lösungen, die fachliche Anforderungen, Datenschutz, Beschaffung und Betrieb zusammenbringen. Wir unterstützen bei Konzeption, Umsetzung und Weiterentwicklung digitaler Prozesse mit Blick auf langfristige Wartbarkeit - und mit dem Anspruch, dass Fachbereiche die entstehenden Abläufe im Alltag wirklich mittragen können.',
      image: createImage('Verantwortung in IT-Projekten')
    }
  ]
};
