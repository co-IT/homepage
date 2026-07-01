import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const energiesektor: PageContent = {
  title: 'co-IT - Energiesektor',
  metaDescription:
    'IT-Sicherheit und digitale Prozesse für Energieunternehmen mit Sicherheitschecks, Awareness, Managed Services, Microsoft 365 und Azure.',
  headerHeading: 'Energiesektor',
  headerSubheading: 'Stabile IT für kritische Prozesse',
  backgroundImage: createBackgroundImage('Energiesektor'),
  contentHeading: 'IT-Sicherheit und digitale Prozesse für Energieunternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Wenn Systeme ausfallen, betrifft es mehr als den Betrieb.',
      text: 'Der Energiesektor ist auf stabile IT, sichere Kommunikation und belastbare Prozesse angewiesen. Störungen haben nicht nur interne Auswirkungen, sondern können Kunden, Partner und Versorgungsketten betreffen.',
      image: createImage('Energiesektor')
    },
    {
      direction: 'left',
      heading: 'Sicherheit für kritische Kommunikation und Betriebsprozesse.',
      text: 'Energieunternehmen stehen im Fokus professioneller Angriffe. Phishing, Zugangsdatenmissbrauch und Fehlkonfigurationen in Cloud- oder E-Mail-Systemen können erhebliche Folgen haben. Wir unterstützen mit Sicherheitschecks, Awareness und Managed Services.',
      image: createImage('Sichere Kommunikation im Energiesektor')
    },
    {
      direction: 'right',
      heading: 'Digitalisierung mit Verantwortungsbewusstsein.',
      text: 'Neue digitale Prozesse müssen Effizienz schaffen, ohne Risiken zu erhöhen. Wir helfen dabei, Modernisierung, Compliance und technische Umsetzbarkeit zusammenzuführen - von Microsoft 365 und Azure über individuelle Software bis zur KI-gestützten Prozessanalyse.',
      image: createImage('Digitalisierung im Energiesektor')
    }
  ]
};
