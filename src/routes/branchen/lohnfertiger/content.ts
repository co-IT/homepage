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
      text: 'Lohnfertiger arbeiten mit engen Terminen, Kundenvorgaben, Qualitätsanforderungen und komplexen Abstimmungen. Wenn IT-Systeme ausfallen oder Informationen an den falschen Stellen hängen bleiben, betrifft das nicht nur Verwaltung, sondern Planung, Fertigung und Auslieferung.',
      image: createImage('Lohnfertiger')
    },
    {
      direction: 'left',
      heading: 'Zwischen Kalkulation, Fertigung und Versand dürfen keine Brüche entstehen.',
      text: 'Viele produktionsnahe Prozesse entstehen pragmatisch: Excel-Listen, manuelle Freigaben, gewachsene Datenbanken oder Insellösungen. Kritisch wird es, wenn Daten zwischen Planung, Fertigung, Dokumentation, Qualitätsprüfung oder Versand mehrfach gepflegt werden müssen. Wir analysieren diese Abläufe und entwickeln daraus moderne Webanwendungen, Schnittstellen oder Automatisierungen.',
      image: createImage('Digitale Prozesse für Lohnfertiger')
    },
    {
      direction: 'right',
      heading: 'Modernisierung braucht Überblick über Sonderfälle und Risiken.',
      text: 'Zeichnungen, Spezifikationen, Angebote und Kundendaten gehören zu den wertvollsten Informationen eines Lohnfertigers. Gleichzeitig hängen viele Abläufe an gewachsenen Regeln, Ausnahmen und Folgeprozessen. Passwort-Management, E-Mail-Sicherheit, Backups, Zugriffskonzepte und eine saubere Prozessanalyse helfen, Modernisierung und Betrieb verlässlich zusammenzubringen.',
      image: createImage('Sicherheit für Produktionsdaten')
    }
  ]
};
