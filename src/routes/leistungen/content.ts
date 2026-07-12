import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const leistungenOverview: PageContent = {
  title: 'co-IT - Leistungen',
  metaDescription:
    'IT-Service, Managed Services, Microsoft 365, Cyber-Sicherheit, Softwareentwicklung und Digitalstrategie für kleine und mittelständische Unternehmen.',
  headerHeading: 'Leistungen',
  headerSubheading: 'IT, Sicherheit, Software und Strategie',
  backgroundImage: createBackgroundImage('IT-Leistungen'),
  contentHeading: 'IT-Leistungen für Betrieb, Sicherheit, Software und Strategie',
  contentText:
    'IT-Probleme entstehen selten isoliert. Ein Microsoft-365-Thema berührt Sicherheit, ein Softwareprojekt den späteren Betrieb, eine Digitalstrategie die vorhandene Infrastruktur. Deshalb verbinden wir IT-Service, Managed Services, Cyber-Sicherheit, Softwareentwicklung und Beratung in einem abgestimmten Leistungsangebot für kleine und mittelständische Unternehmen.',
  articles: [
    {
      direction: 'right',
      heading: 'Schnell. Persönlich. Vor Ort.',
      text: 'Wenn Hardware, Arbeitsplätze, Netzwerke, Drucker oder Server physisch betreut werden müssen, zählt Nähe. Für Unternehmen im Ortenaukreis übernehmen wir Vor-Ort-Service rund um Achern, Sasbach, Renchen, Kappelrodeck, Appenweier, Bühl und die umliegende Region.',
      image: createImage('IT-Service im Ortenaukreis'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/it-service-ortenaukreis/',
        ariaLabel: 'Mehr über IT-Service im Ortenaukreis erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Probleme erkennen, bevor sie zu Ausfällen werden.',
      text: 'Viele IT-Probleme kündigen sich im Verborgenen an: fehlende Updates, auslaufende Speicherkapazitäten, fehlerhafte Backups oder unbemerkte Systemwarnungen. Mit Managed Services überwachen, warten und betreuen wir Ihre IT proaktiv, damit Risiken früher sichtbar und Ausfälle besser vermeidbar werden.',
      image: createImage('Managed Services'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/managed-services/',
        ariaLabel: 'Mehr über Managed Services erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Microsoft 365 richtig betreiben.',
      text: 'Microsoft 365 und Azure sind für viele kleine und mittelständische Unternehmen das Fundament moderner Zusammenarbeit. Wir unterstützen bei Migration, sicheren Grundeinstellungen, Benutzerverwaltung, Teams, SharePoint, Exchange, Backup, Lizenzmanagement und Azure-Betrieb.',
      image: createImage('Microsoft 365 und Azure'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/microsoft-365-azure/',
        ariaLabel: 'Mehr über Microsoft 365 und Azure erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Cyber-Sicherheit verständlich und wirksam machen.',
      text: 'Angriffe beginnen häufig mit E-Mails, schwachen Passwörtern, Fehlkonfigurationen oder unsicheren Entscheidungen im Arbeitsalltag. Wir verbinden technische Schutzmaßnahmen mit Awareness, Phishing-Simulationen, Passwort-Management und verständlichen Sicherheitschecks.',
      image: createImage('Cyber-Sicherheit'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/cyber-sicherheit/',
        ariaLabel: 'Mehr über Cyber-Sicherheit erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Software, die einfach passt.',
      text: 'Wenn Standardsoftware nicht mehr zu Ihren Abläufen passt, entwickeln wir individuelle Webanwendungen, Schnittstellen, Portale und Backend-Systeme, die Prozesse vereinfachen und langfristig wartbar bleiben.',
      image: createImage('Web- und Softwareentwicklung'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/web-softwareentwicklung/',
        ariaLabel: 'Mehr über Web- und Softwareentwicklung erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'KI nutzen. Aber sinnvoll.',
      text: 'Künstliche Intelligenz und Digitalisierung helfen nur dann, wenn sie echte Aufgaben im Unternehmen lösen. Wir identifizieren sinnvolle Einsatzbereiche - zum Beispiel bei Dokumenten, Recherche, Angeboten, internen Wissensfragen oder wiederkehrenden Aufgaben - und leiten daraus konkrete nächste Schritte mit realistischem Umsetzungsrahmen ab.',
      image: createImage('Digital- und KI-Strategie'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/digital-ki-strategie/',
        ariaLabel: 'Mehr über Digital- und KI-Strategie erfahren'
      }
    }
  ]
};
