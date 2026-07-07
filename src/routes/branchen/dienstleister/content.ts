import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const servicesImage = '/img/solutions/header.webp';

export const dienstleister: PageContent = {
  title: 'co-IT - Dienstleister',
  metaDescription:
    'IT, Cloud und Software für Dienstleistungsunternehmen mit Microsoft 365, Teams, SharePoint, Azure, Passwort-Management und Managed Services.',
  headerHeading: 'Dienstleister',
  headerSubheading: 'Cloud, Kommunikation und Software',
  backgroundImage: createBackgroundImage('Dienstleister', servicesImage),
  contentHeading: 'IT, Cloud und Software für moderne Dienstleistungsunternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Dienstleistung ist Kommunikation.',
      text: 'Dienstleister arbeiten mit Terminen, Dokumenten, Kundendaten, Angeboten, Projekten und Abstimmungen. Wenn Kommunikation unsicher, unstrukturiert oder technisch instabil ist, leidet die Qualität der Leistung.',
      image: createImage('Dienstleister')
    },
    {
      direction: 'left',
      heading: 'Cloud, Prozesse und Sicherheit aus einem Guss.',
      text: 'Microsoft 365, Teams, SharePoint, Azure, Passwort-Management und E-Mail-Sicherheit bilden häufig die Grundlage moderner Dienstleistungsprozesse. Wir konfigurieren, betreiben und dokumentieren diese Umgebung passend zum Arbeitsalltag.',
      image: createImage('Cloud-Prozesse für Dienstleister')
    },
    {
      direction: 'right',
      heading: 'Skalierbar, wenn Ihr Unternehmen wächst.',
      text: 'Wachsende Dienstleister brauchen IT, die mitwächst: neue Mitarbeitende, neue Standorte, neue Tools, neue Anforderungen. Managed Services, Softwareentwicklung und Digitalstrategie helfen, Strukturen frühzeitig sauber aufzubauen.',
      image: createImage('Skalierbare IT für Dienstleister')
    }
  ]
};
