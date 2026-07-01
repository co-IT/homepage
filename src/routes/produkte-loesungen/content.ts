import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const cyberPortalImage = '/img/cyber/cyber-portal/header.webp';

export const produkteLoesungenOverview: PageContent = {
  title: 'co-IT - Produkte & Lösungen',
  metaDescription:
    'Digitale Lösungen für Cyber-Awareness, Phishing-Simulationen, Passwort-Management, Sicherheitschecks und KI-gestützte Webseiten-Strukturen.',
  headerHeading: 'Produkte & Lösungen',
  headerSubheading: 'Sicherheit, Effizienz und moderne Arbeitsprozesse',
  backgroundImage: createBackgroundImage(
    'Produkte und Lösungen',
    cyberPortalImage
  ),
  contentHeading:
    'Digitale Lösungen für Sicherheit, Effizienz und moderne Arbeitsprozesse',
  contentText:
    'Unsere Produkte und Lösungen entstehen aus wiederkehrenden Anforderungen im IT-Betrieb, in der Cyber-Sicherheit und in der Digitalisierung mittelständischer Unternehmen. Sie sind standardisiert genug, um wirtschaftlich einsetzbar zu sein, und flexibel genug, um sich an konkrete Unternehmenssituationen anzupassen.',
  articles: [
    {
      direction: 'right',
      heading: 'Awareness, die nicht bei der Schulung endet.',
      text: 'Das co-IT Cyber-Awareness-Portal bündelt Schulungen, Prüfungen, Zertifikate, Erinnerungen und Phishing-Simulationen in einer strukturierten Plattform. Unternehmen, Versicherer und Partner können Sicherheitsbewusstsein messbar aufbauen und Fortschritte nachvollziehbar dokumentieren.',
      image: createImage('Cyber-Awareness-Portal', cyberPortalImage),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/produkte-loesungen/cyber-awareness-portal/',
        ariaLabel: 'Mehr über das Cyber-Awareness-Portal erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Phishing-Risiken sichtbar machen.',
      text: 'Realistische Phishing-Simulationen zeigen, wie Angriffsmuster im Arbeitsalltag wirken und wo Unsicherheiten entstehen. Statt Schuldzuweisungen geht es um Erkenntnis: Welche Muster treten auf, welche Meldewege fehlen und welche Schulungs- oder Prozessmaßnahmen sind sinnvoll?',
      image: createImage(
        'Phishing-Simulationen',
        '/img/cyber/cyber-portal/white-label/phishing-simulationen.webp'
      ),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/produkte-loesungen/phishing-simulationen/',
        ariaLabel: 'Mehr über Phishing-Simulationen erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Passwörter im Griff. Zugänge unter Kontrolle.',
      text: 'Ein professionell eingeführter Passwort-Manager reduziert die Gefahr schwacher, wiederverwendeter oder kompromittierter Zugangsdaten. Auf Basis von Vaultwarden schaffen wir eine zentrale, kontrollierbare und alltagstaugliche Lösung für Teams und Organisationen.',
      image: createImage(
        'Passwort-Manager für Unternehmen',
        '/img/products/passwort-manager/header.webp'
      ),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/produkte-loesungen/passwort-manager-unternehmen/',
        ariaLabel: 'Mehr über Passwort-Management für Unternehmen erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Wissen, wo Sie stehen. Bevor es jemand anderes herausfindet.',
      text: 'Unsere Sicherheitschecks prüfen E-Mail-Infrastruktur, DNS-Konfiguration und Webseite auf bekannte Schwachstellen und Fehlkonfigurationen. Das Ergebnis ist ein verständlicher Bericht mit technischen Befunden und priorisierten Empfehlungen.',
      image: createImage('Sicherheitschecks'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/produkte-loesungen/sicherheitschecks/',
        ariaLabel: 'Mehr über Sicherheitschecks erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Eine gute Webseite beginnt nicht mit Design.',
      text: 'Der KI-gestützte Webseiten-Builder unterstützt Unternehmen dabei, schneller zu einer klaren Struktur, verständlichen Texten und einer konsistenten Navigation zu kommen - als Grundlage für einen fachlich passenden Unternehmensauftritt.',
      image: createImage('Webseiten-Builder mit KI'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/produkte-loesungen/webseiten-builder-ki/',
        ariaLabel: 'Mehr über den Webseiten-Builder mit KI erfahren'
      }
    }
  ]
};
