import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const passwordManagerImage = '/img/products/passwort-manager/header.webp';

export const passwortManagerUnternehmen: PageContent = {
  title: 'co-IT - Passwort-Manager für Unternehmen',
  metaDescription:
    'Sicheres Passwort-Management für Teams und Organisationen auf Basis von Vaultwarden mit Einführung, Struktur und Schulung.',
  headerHeading: 'Passwort-Manager für Unternehmen',
  headerSubheading: 'Zugänge sicher verwalten',
  backgroundImage: createBackgroundImage(
    'Passwort-Manager für Unternehmen',
    passwordManagerImage
  ),
  contentHeading:
    'Sicheres Passwort-Management für Teams und Organisationen',
  articles: [
    {
      direction: 'right',
      heading: 'Digitale Identitäten sicher im Griff.',
      text: 'Wiederverwendete, zu kurze oder im Browser gespeicherte Passwörter sind kein kleines Komfortproblem - sie sind ein Geschäftsrisiko. Ein professioneller Passwort-Manager reduziert die Gefahr kompromittierter Zugangsdaten.',
      image: createImage(
        'Passwort-Manager für Unternehmen',
        passwordManagerImage
      )
    },
    {
      direction: 'left',
      heading: 'Volle Kontrolle über sensible Zugangsdaten.',
      text: 'Auf Basis von Vaultwarden, einer bewährten Lösung für sicheres Passwort-Management, setzen wir Passwort-Management so um, dass es zu Ihren Anforderungen passt: On-Premise, in einem deutschen Rechenzentrum oder als betreute Lösung. Zugriff, Rechte, Freigaben, Sammlungen und Sicherheitsrichtlinien werden sauber strukturiert.',
      image: createImage('Kontrolle über Zugangsdaten')
    },
    {
      direction: 'right',
      heading: 'Strukturiert einführen statt nur bereitstellen.',
      text: 'Wir übernehmen Einrichtung, Benutzerstruktur, Migration bestehender Passwörter, Rechtekonzept und Schulung. So wird der Passwort-Manager nicht nur bereitgestellt, sondern verständlich eingeführt. Er unterstützt sichere Freigaben, persönliche Tresore, Team-Sammlungen, Notfallzugriffe und den geschützten Austausch sensibler Informationen.',
      image: createImage('Einführung von Passwort-Management')
    }
  ]
};
