import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const microsoft365Azure: PageContent = {
  title: 'co-IT - Microsoft 365 und Azure',
  metaDescription:
    'Microsoft 365 und Azure für Unternehmen: Migration, sichere Konfiguration, Teams, SharePoint, Exchange, Backup, Lizenzen und Betrieb.',
  headerHeading: 'Microsoft 365 & Azure',
  headerSubheading: 'Von Azure bis Teams',
  backgroundImage: createBackgroundImage('Microsoft 365 und Azure'),
  contentHeading: 'Microsoft 365 und Azure für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Microsoft im Griff. Von Azure bis Teams.',
      text: 'Microsoft 365 und Azure sind für viele kleine und mittelständische Unternehmen das Fundament moderner Zusammenarbeit. Wir sorgen dafür, dass Sie jederzeit den Überblick behalten: über Nutzer, Sicherheit und Systeme. Von der Migration über sichere Grundeinstellungen bis zum laufenden Betrieb von Teams, SharePoint, Exchange, Backup, Lizenzmanagement und Azure.',
      image: createImage('Microsoft 365 und Azure')
    },
    {
      direction: 'left',
      heading: 'Migration ohne Stillstand.',
      text: 'Fehlkonfigurationen bei Exchange-Migrationen, unsichere Tenant-Einstellungen, fehlende Zugriffsregeln oder unklare Lizenzmodelle sind häufige Stolpersteine. Wir planen, testen und migrieren mit klarer Dokumentation und möglichst geringer Unterbrechung im Tagesgeschäft.',
      image: createImage('Microsoft-365-Migration')
    },
    {
      direction: 'right',
      heading: 'Damit Microsoft 365 nicht nebenbei verwaltet wird.',
      text: 'Nach der Migration beginnt die eigentliche Arbeit: Lizenzmanagement, Benutzerverwaltung, Teams-Administration, SharePoint-Strukturen, Rollen- und Rechtekonzepte, Backup und Azure-Kostenkontrolle. Wir verbinden Administration mit sicherem Betrieb.',
      image: createImage('Microsoft-365-Betrieb')
    }
  ]
};
