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
      text: 'Versicherungen arbeiten mit sensiblen Kundendaten, komplexen Prozessen und hohen Erwartungen an Verfügbarkeit. Schon kleine Sicherheitslücken oder Medienbrüche können Vertrauen beschädigen.',
      image: createImage('Versicherungen')
    },
    {
      direction: 'left',
      heading: 'Sicherheit für Mitarbeitende und Versicherungsnehmer.',
      text: 'Phishing, Social Engineering und kompromittierte Zugangsdaten treffen Versicherungen besonders hart, weil Kommunikation oft auf Vertrauen basiert. Awareness-Portale, Phishing-Simulationen, Passwort-Management und E-Mail-Sicherheitschecks reduzieren Risiken.',
      image: createImage('Sicherheit für Versicherungen')
    },
    {
      direction: 'right',
      heading: 'Digitale Prozesse mit Nachweisbarkeit.',
      text: 'Ob Schulungsnachweise, Sicherheitsberichte, Portale oder individuelle Softwarelösungen: Versicherungen brauchen nachvollziehbare und dokumentierte Prozesse, die intern, gegenüber Partnern und gegenüber Aufsicht erklärbar bleiben.',
      image: createImage('Digitale Versicherungsprozesse')
    }
  ]
};
