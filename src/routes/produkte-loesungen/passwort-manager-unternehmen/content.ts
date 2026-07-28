import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const passwortManagerUnternehmen: PageContent = {
  title: 'co-IT - Passwort-Manager für Unternehmen',
  metaDescription:
    'Passwort-Management für Unternehmen mit zentraler Verwaltung, klaren Freigaben, Zwei-Faktor-Schutz und begleitetem Betrieb.',
  headerHeading: 'Passwort-Manager für Unternehmen',
  headerSubheading: 'Digitale Identitäten sicher organisieren',
  backgroundImage: createBackgroundImage('Passwort-Manager für Unternehmen'),
  contentHeading: 'Passwort-Management für Teams, Freigaben und sichere Zugriffe',
  articles: [
    {
      direction: 'right',
      heading: 'Zugänge zentral verwalten statt verteilt improvisieren.',
      text: 'Ein Passwort-Manager schafft eine gemeinsame, kontrollierbare Grundlage für geschäftliche Zugänge. Statt Passwörter in Browsern, Dateien, Chats oder Notizzetteln zu verteilen, werden Logins, sensible Notizen und weitere Zugangsdaten an einem zentralen Ort abgelegt. Auf Basis von Vaultwarden entsteht so eine Lösung, die alltagstauglich bleibt und gleichzeitig die Risiken schwacher, wiederverwendeter oder unkontrolliert geteilter Passwörter deutlich reduziert.',
      image: createImage('Passwort-Manager für Unternehmen')
    },
    {
      direction: 'left',
      heading: 'Freigaben, Rollen und Offboarding sauber steuern.',
      text: 'Entscheidend ist nicht nur das sichere Speichern, sondern die nachvollziehbare Organisation. Teams können Zugänge gezielt freigeben, Sammlungen nach Bereichen strukturieren und Berechtigungen so vergeben, dass Mitarbeitende genau das sehen, was sie für ihre Aufgabe brauchen. Ergänzt um Zwei-Faktor-Authentifizierung, Passkeys und klare Zuständigkeiten entsteht ein Verfahren, das bei Eintritten, Rollenwechseln und Austritten deutlich beherrschbarer wird.',
      image: createImage('Kontrolle über Zugangsdaten')
    },
    {
      direction: 'right',
      heading: 'Einführung, Betrieb und Unterstützung aus einer Hand.',
      text: 'Wir begleiten nicht nur die Auswahl, sondern auch die Einführung im Unternehmen: von Struktur, Migration und Schulung bis zum laufenden Betrieb. Je nach Bedarf kann die Lösung auf Ihren Servern, in einem Rechenzentrum Ihrer Wahl oder in einer von uns betreuten Umgebung betrieben werden. Dazu kommen Updates, technische Betreuung und ein Setup, das Sicherheit, Datenschutz und praktische Nutzbarkeit zusammenbringt.',
      image: createImage('Einführung von Passwort-Management')
    }
  ]
};
