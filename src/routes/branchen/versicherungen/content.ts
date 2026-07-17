import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const versicherungen: PageContent = {
  title: 'co-IT - Versicherungen',
  metaDescription:
    'IT, Cyber-Sicherheit und digitale Lösungen für Versicherungen mit Awareness, Phishing-Simulationen, Passwort-Management und Sicherheitschecks.',
  headerHeading: 'Versicherungen',
  headerSubheading: 'Vertrauen digital absichern',
  backgroundImage: createBackgroundImage('Versicherungen'),
  contentHeading: 'IT, Cyber-Sicherheit und digitale Lösungen für Versicherungen',
  articles: [
    {
      direction: 'right',
      heading: 'Vertrauen ist Ihr Geschäftsmodell.',
      text: 'Versicherungen arbeiten mit sensiblen Kundendaten, komplexen Prozessen und hohen Erwartungen an Verfügbarkeit. Schon kleine Sicherheitslücken, schlechte Zustellbarkeit oder Medienbrüche in Dokumenten- und Kommunikationsprozessen können Vertrauen beschädigen.',
      image: createImage('Versicherungen')
    },
    {
      direction: 'left',
      heading: 'Kommunikation absichern und Auffälligkeiten früh erkennen.',
      text: 'Phishing, Social Engineering und kompromittierte Zugangsdaten treffen Versicherungen besonders hart, weil Kommunikation oft auf Vertrauen basiert. Awareness-Portale, Phishing-Simulationen, Passwort-Management und E-Mail-Sicherheitschecks helfen, Risiken früher sichtbar zu machen und technische Schutzmaßnahmen nachvollziehbar zu verschärfen.',
      image: createImage('Sicherheit für Versicherungen')
    },
    {
      direction: 'right',
      heading: 'Digitale Prozesse mit Nachweisbarkeit.',
      text: 'Ob Schulungsnachweise, Sicherheitsberichte, Portale, Dokumentenflüsse oder individuelle Softwarelösungen: Versicherungen brauchen nachvollziehbare und dokumentierte Prozesse, die intern, gegenüber Partnern und gegenüber Aufsicht erklärbar bleiben. Genau dort entfalten klar strukturierte Systeme und belastbare Integrationen ihren Wert.',
      image: createImage('Digitale Versicherungsprozesse')
    }
  ]
};
