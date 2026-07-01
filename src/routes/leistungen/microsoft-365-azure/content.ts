import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const microsoft365Azure: PageContent = {
  title: 'co-IT - Microsoft 365 und Azure',
  metaDescription:
    'Microsoft 365 und Azure für Unternehmen: Migration, sichere Konfiguration, Teams, SharePoint, Exchange, Backup, Lizenzen und Betrieb.',
  headerHeading: 'Microsoft 365 & Azure',
  headerSubheading: 'Von Teams bis Azure',
  backgroundImage: createBackgroundImage('Microsoft 365 und Azure'),
  contentHeading: 'Microsoft 365 und Azure für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Microsoft im Griff. Von Teams bis Azure.',
      text: 'Microsoft 365 und Azure sind heute das Rückgrat moderner KMU-IT - aber nur, wenn sie richtig konfiguriert, sicher betrieben und kontinuierlich gewartet werden. Wir begleiten Sie von der Migration bis zum laufenden Betrieb.',
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
