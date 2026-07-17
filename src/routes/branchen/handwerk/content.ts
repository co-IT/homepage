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
      text: 'Im Handwerk muss IT vor allem den Betrieb unterstützen. Angebote, Aufträge, Zeiterfassung, Kommunikation, Geräte, Drucker, mobile Arbeit und Abrechnung müssen zuverlässig laufen. Wenn Daten doppelt erfasst werden oder ein einfacher Ablauf stockt, fehlt diese Zeit direkt auf der Baustelle, in der Werkstatt oder im Büro.',
      image: createImage('Handwerk')
    },
    {
      direction: 'left',
      heading: 'Wenn Daten doppelt erfasst werden, wird es teuer.',
      text: 'Gerade im Handwerk hängen Zeiterfassung, Auftragsabwicklung, Dokumente und Abrechnung eng zusammen. Müssen Informationen manuell übertragen oder nachgepflegt werden, steigt der Aufwand schnell unnötig an. Wir helfen dabei, solche Brüche zu reduzieren - pragmatisch, verständlich und passend zur tatsächlichen Arbeitsweise im Betrieb.',
      image: createImage('Vor-Ort-Service für Handwerk')
    },
    {
      direction: 'right',
      heading: 'Digitalisierung in brauchbaren Schritten.',
      text: 'Nicht jeder Betrieb braucht sofort eine große Digitalstrategie. Oft reichen klare nächste Schritte: sichere Passwörter, Microsoft 365, strukturierte Backups, mobile Verfügbarkeit, bessere Zusammenarbeit oder eine sinnvoll angebundene Fachanwendung. Wichtig ist, dass neue Lösungen im Alltag entlasten und nicht zusätzliche Komplexität erzeugen.',
      image: createImage('Digitalisierung im Handwerk')
    }
  ]
};
