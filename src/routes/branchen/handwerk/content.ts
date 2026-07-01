import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const handwerk: PageContent = {
  title: 'co-IT - Handwerk',
  metaDescription:
    'IT-Service und digitale Lösungen für Handwerksbetriebe mit Vor-Ort-Service im Ortenaukreis, Microsoft 365, Backups und Passwort-Management.',
  headerHeading: 'Handwerk',
  headerSubheading: 'IT, die im Alltag funktioniert',
  backgroundImage: createBackgroundImage('Handwerk'),
  contentHeading: 'IT-Service und digitale Lösungen für Handwerksbetriebe',
  articles: [
    {
      direction: 'right',
      heading: 'Handwerk braucht IT, die funktioniert.',
      text: 'Im Handwerk muss IT vor allem den Betrieb unterstützen. Angebote, Aufträge, Zeiterfassung, Kommunikation, Geräte, Drucker, mobile Arbeit und Abrechnung müssen zuverlässig laufen.',
      image: createImage('Handwerk')
    },
    {
      direction: 'left',
      heading: 'Vor Ort, wenn es erforderlich ist.',
      text: 'Gerade bei kleineren Betrieben ist schnelle Hilfe entscheidend. Wir unterstützen im Ortenaukreis bei Arbeitsplätzen, Netzwerken, Druckern, Servern, Telefonie und Hardware. Alles, was remote gelöst werden kann, lösen wir effizient aus der Ferne.',
      image: createImage('Vor-Ort-Service für Handwerk')
    },
    {
      direction: 'right',
      heading: 'Digitalisierung ohne Überforderung.',
      text: 'Nicht jeder Betrieb braucht sofort eine große Digitalstrategie. Oft reichen klare nächste Schritte: sichere Passwörter, Microsoft 365, strukturierte Backups, bessere Zusammenarbeit, mobile Verfügbarkeit oder eine moderne Webseite.',
      image: createImage('Digitalisierung im Handwerk')
    }
  ]
};
