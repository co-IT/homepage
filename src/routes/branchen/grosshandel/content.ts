import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '../shared';

export const grosshandel: PageContent = {
  title: 'co-IT - Großhandel',
  metaDescription:
    'IT, Software und Sicherheit für Großhandelsunternehmen mit Schnittstellen, Prozessdigitalisierung, Webanwendungen und E-Mail-Sicherheit.',
  headerHeading: 'Großhandel',
  headerSubheading: 'Schnittstellen und Abläufe beschleunigen',
  backgroundImage: createBackgroundImage('Großhandel'),
  contentHeading: 'IT, Software und Sicherheit für Großhandelsunternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Großhandel lebt von Geschwindigkeit.',
      text: 'Bestellungen, Lagerbestände, Kundenkommunikation, Lieferketten und Rechnungsprozesse müssen zuverlässig ineinandergreifen. Wenn Systeme ausfallen oder Daten falsch verarbeitet werden, entstehen direkte wirtschaftliche Schäden.',
      image: createImage('Großhandel')
    },
    {
      direction: 'left',
      heading: 'Schnittstellen, Systeme und sichere Prozesse.',
      text: 'Großhändler arbeiten häufig mit ERP-Systemen, Webportalen, Schnittstellen, Excel-Prozessen und individueller Software. Wir unterstützen bei Modernisierung, Integration und Automatisierung - mit Webanwendungen, APIs und sauber dokumentierten Betriebsprozessen.',
      image: createImage('Schnittstellen im Großhandel')
    },
    {
      direction: 'right',
      heading: 'Schutz vor Betrug in operativen Abläufen.',
      text: 'Gefälschte Lieferantenmails, manipulierte Zahlungsinformationen oder kompromittierte Benutzerkonten sind reale Risiken im Handel. E-Mail-Sicherheitschecks, Phishing-Simulationen, Passwort-Management und Managed Services reduzieren die Angriffsfläche.',
      image: createImage('Sicherheit im Großhandel')
    }
  ]
};
