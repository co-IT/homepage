import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from './shared';

const healthcareImage = '/img/cyber/cyber-portal/gesundheitswesen/header.webp';
const servicesImage = '/img/solutions/header.webp';

export const branchenOverview: PageContent = {
  title: 'co-IT - Branchen',
  metaDescription:
    'IT, Software und Cyber-Sicherheit für Versicherungen, Energie, Gesundheitswesen, Großhandel, Produktion, Handwerk, Dienstleister und Behörden.',
  headerHeading: 'Branchen',
  headerSubheading: 'IT, Software und Cyber-Sicherheit im Kontext',
  backgroundImage: createBackgroundImage('Branchen'),
  contentHeading:
    'IT, Software und Cyber-Sicherheit für unterschiedliche Anforderungen',
  contentText:
    'Jede Branche hat andere Abläufe, Risiken und Prioritäten. Eine Arztpraxis braucht andere IT-Unterstützung als ein Lohnfertiger, ein Großhändler andere Schnittstellen als eine öffentliche Einrichtung. Deshalb betrachten wir Branchen nicht als Etikett, sondern als Kontext für sinnvolle technische Entscheidungen.',
  articles: [
    {
      direction: 'right',
      heading: 'Vertrauen ist Ihr Geschäftsmodell.',
      text: 'Versicherungen arbeiten mit sensiblen Kundendaten, hohem Vertrauensanspruch und vielen digitalen Kommunikationswegen. Awareness-Portale, Phishing-Simulationen, Sicherheitschecks und dokumentierbare Prozesse helfen, Risiken sichtbar und steuerbar zu machen.',
      image: createImage('Versicherungen'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/versicherungen/',
        ariaLabel: 'Mehr über IT und Cyber-Sicherheit für Versicherungen erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Wenn Systeme ausfallen, betrifft es mehr als den Betrieb.',
      text: 'Energieunternehmen benötigen stabile IT, sichere Kommunikation und belastbare Prozesse. Besonders relevant sind E-Mail-Sicherheit, Managed Services, Microsoft 365 & Azure, Awareness-Maßnahmen und Digitalisierungsprojekte mit klarer Verantwortung.',
      image: createImage('Energiesektor'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/energiesektor/',
        ariaLabel: 'Mehr über IT-Sicherheit für den Energiesektor erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Sensible Daten brauchen verlässliche IT.',
      text: 'Arztpraxen, Apotheken und Gesundheitsbetriebe brauchen IT, die schützt, entlastet und den Betrieb nicht komplizierter macht. Wichtige Themen sind Datenschutz, sichere Kommunikation, Backups, Passwort-Management und pragmatischer IT-Service.',
      image: createImage('Gesundheitswesen', healthcareImage),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/gesundheitswesen/',
        ariaLabel: 'Mehr über IT und Cyber-Sicherheit im Gesundheitswesen erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Großhandel lebt von Geschwindigkeit.',
      text: 'Im Großhandel müssen Bestellungen, Lager, Lieferketten, Rechnungen und Kundenkommunikation zuverlässig funktionieren. Wir unterstützen mit Schnittstellen, Prozessdigitalisierung, Webanwendungen, E-Mail-Sicherheit und stabilen Betriebsmodellen.',
      image: createImage('Großhandel'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/grosshandel/',
        ariaLabel: 'Mehr über IT und Software für Großhandel erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Produktion braucht stabile digitale Abläufe.',
      text: 'Produzierende Dienstleister arbeiten mit Zeichnungen, Spezifikationen, Termindruck und kundenspezifischen Prozessen. Hier geht es um geschützte Daten, stabile Systeme, bessere Freigaben und digitale Anwendungen, die Produktion und Verwaltung entlasten.',
      image: createImage('Lohnfertiger'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/lohnfertiger/',
        ariaLabel: 'Mehr über IT und digitale Prozesse für Lohnfertiger erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Handwerk braucht IT, die funktioniert.',
      text: 'Handwerksbetriebe benötigen IT, die funktioniert, bezahlbar bleibt und verständlich betreut wird. Vor-Ort-Service im Ortenaukreis, Microsoft 365, Backups, Passwort-Management und moderne Webseiten sind häufig sinnvolle erste Schritte.',
      image: createImage('Handwerk'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/handwerk/',
        ariaLabel: 'Mehr über IT-Service für Handwerk erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Dienstleistung ist Kommunikation.',
      text: 'Dienstleistungsunternehmen leben von Kommunikation, Zusammenarbeit und zuverlässigen digitalen Prozessen. Cloud, Teams, SharePoint, sichere E-Mail, Projektstrukturen, Softwarelösungen und Managed Services schaffen dafür ein tragfähiges Fundament.',
      image: createImage('Dienstleister', servicesImage),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/dienstleister/',
        ariaLabel: 'Mehr über IT, Cloud und Software für Dienstleister erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Öffentliche Einrichtungen brauchen besonders belastbare IT.',
      text: 'Öffentliche Organisationen brauchen nachvollziehbare, dokumentierte und sichere Lösungen. Awareness, Phishing-Simulationen, Sicherheitschecks, Passwort-Management und digitale Prozesse müssen nicht nur funktionieren, sondern auch erklärbar sein.',
      image: createImage('Behörden'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/branchen/behoerden/',
        ariaLabel:
          'Mehr über IT-Sicherheit und Digitalisierung für Behörden erfahren'
      }
    }
  ]
};
