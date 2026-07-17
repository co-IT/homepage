import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const healthcareImage = '/img/cyber/cyber-portal/gesundheitswesen/header.webp';

export const gesundheitswesen: PageContent = {
  title: 'co-IT - Gesundheitswesen',
  metaDescription:
    'IT und Cyber-Sicherheit für Arztpraxen, Apotheken und Gesundheitsbetriebe mit Datenschutz, Backups, Passwort-Management und IT-Service.',
  headerHeading: 'Gesundheitswesen',
  headerSubheading: 'Sensible Daten verlässlich schützen',
  backgroundImage: createBackgroundImage('Gesundheitswesen', healthcareImage),
  contentHeading: 'IT und Cyber-Sicherheit für Arztpraxen, Apotheken und Gesundheitsbetriebe',
  articles: [
    {
      direction: 'right',
      heading: 'Sensible Daten brauchen verlässliche IT.',
      text: 'Im Gesundheitswesen geht es nicht nur um Technik, sondern um Vertrauen, Verfügbarkeit und Datenschutz. Patientendaten, Praxisabläufe, Kommunikation, Dokumente und digitale Anwendungen müssen geschützt und gleichzeitig alltagstauglich bleiben. Schon kleine Störungen wirken sich hier schnell direkt auf Termine, Auskünfte und Behandlungsabläufe aus.',
      image: createImage('Gesundheitswesen')
    },
    {
      direction: 'left',
      heading: 'Sicherheit und Prozesse müssen den Praxisalltag entlasten.',
      text: 'Arztpraxen, Apotheken und Gesundheitsdienstleister haben wenig Zeit für komplexe IT-Projekte. IT darf den Praxisalltag nicht zusätzlich belasten. Deshalb setzen wir auf klare Maßnahmen wie sichere E-Mail-Konfiguration, Passwort-Management, strukturierte Backups, Awareness-Schulungen und betreute Microsoft-Umgebungen - immer mit Blick darauf, wie Mitarbeitende tatsächlich arbeiten.',
      image: createImage('IT-Sicherheit im Gesundheitswesen')
    },
    {
      direction: 'right',
      heading: 'Auch Fachanwendungen und Dokumentenflüsse müssen sauber zusammenspielen.',
      text: 'Neben der klassischen Betreuung werden im Gesundheitswesen oft mehrere Systeme parallel genutzt - etwa für Kommunikation, Dokumente, Verwaltung oder Abrechnung. Wenn Informationen zwischen diesen Anwendungen nicht sauber fließen, entstehen unnötige Rückfragen und Mehrarbeit. Wir helfen dabei, solche Abläufe technisch und organisatorisch sinnvoll aufeinander abzustimmen.',
      image: createImage('IT-Betreuung im Gesundheitswesen')
    }
  ]
};
