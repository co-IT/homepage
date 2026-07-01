import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const lohnfertiger: PageContent = {
  title: 'co-IT - Lohnfertiger',
  metaDescription:
    'IT und digitale Prozesse für produzierende Dienstleister mit modernen Webanwendungen, Schnittstellen, Backups und Zugriffskonzepten.',
  headerHeading: 'Lohnfertiger',
  headerSubheading: 'Produktionsnahe Prozesse modernisieren',
  backgroundImage: createBackgroundImage('Lohnfertiger'),
  contentHeading: 'IT und digitale Prozesse für produzierende Dienstleister',
  articles: [
    {
      direction: 'right',
      heading: 'Produktion braucht stabile digitale Abläufe.',
      text: 'Lohnfertiger arbeiten mit engen Terminen, Kundenvorgaben, Qualitätsanforderungen und komplexen Abstimmungen. Wenn IT-Systeme ausfallen, betrifft das nicht nur Verwaltung, sondern Planung, Fertigung und Auslieferung.',
      image: createImage('Lohnfertiger')
    },
    {
      direction: 'left',
      heading: 'Vom Excel-Prozess zur digitalen Anwendung.',
      text: 'Viele produktionsnahe Prozesse entstehen pragmatisch: Excel-Listen, manuelle Freigaben, gewachsene Datenbanken oder Insellösungen. Wir analysieren kritische Abläufe und entwickeln daraus moderne Webanwendungen, Schnittstellen oder Automatisierungen.',
      image: createImage('Digitale Prozesse für Lohnfertiger')
    },
    {
      direction: 'right',
      heading: 'Sicherheit für Kundeninformationen und Produktionsdaten.',
      text: 'Zeichnungen, Spezifikationen, Angebote und Kundendaten gehören zu den wertvollsten Informationen eines Lohnfertigers. Passwort-Management, E-Mail-Sicherheit, Backups, Zugriffskonzepte und Awareness-Maßnahmen schützen diese Daten besser.',
      image: createImage('Sicherheit für Produktionsdaten')
    }
  ]
};
