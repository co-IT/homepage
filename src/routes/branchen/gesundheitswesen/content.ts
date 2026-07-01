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
  contentHeading:
    'IT und Cyber-Sicherheit für Arztpraxen, Apotheken und Gesundheitsbetriebe',
  articles: [
    {
      direction: 'right',
      heading: 'Sensible Daten brauchen verlässliche IT.',
      text: 'Im Gesundheitswesen geht es nicht nur um Technik, sondern um Vertrauen, Verfügbarkeit und Datenschutz. Patientendaten, Praxisabläufe, Kommunikation und digitale Anwendungen müssen geschützt und gleichzeitig alltagstauglich bleiben.',
      image: createImage('Gesundheitswesen', healthcareImage)
    },
    {
      direction: 'left',
      heading: 'Sicherheit ohne komplizierte Zusatzlast.',
      text: 'Arztpraxen, Apotheken und Gesundheitsdienstleister haben wenig Zeit für komplexe IT-Projekte. IT darf den Praxisalltag nicht zusätzlich belasten. Deshalb setzen wir auf klare Maßnahmen: sichere E-Mail-Konfiguration, Passwort-Management, strukturierte Backups, Awareness-Schulungen und betreute Microsoft-Umgebungen.',
      image: createImage('IT-Sicherheit im Gesundheitswesen')
    },
    {
      direction: 'right',
      heading: 'Von der Praxis bis zur größeren Organisation.',
      text: 'Im Ortenaukreis unterstützen wir Gesundheitsbetriebe auch vor Ort bei Arbeitsplätzen, Druckern, Netzwerk und Hardware. Ergänzend können Microsoft 365, Backups, Sicherheitschecks und laufende Betreuung effizient remote organisiert werden.',
      image: createImage('IT-Betreuung im Gesundheitswesen')
    }
  ]
};
