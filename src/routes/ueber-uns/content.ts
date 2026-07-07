import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const teamImage = '/img/about/team.webp';

export const ueberUnsOverview: PageContent = {
  title: 'co-IT - Über uns',
  metaDescription:
    'Die co-IT ist pragmatischer Technologiepartner für den Mittelstand mit IT-Betrieb, Softwareentwicklung, Beratung und Cyber-Sicherheit.',
  headerHeading: 'Über uns',
  headerSubheading: 'Pragmatischer Technologiepartner für den Mittelstand',
  backgroundImage: createBackgroundImage('Über uns', teamImage),
  contentHeading: 'Die co-IT - pragmatischer Technologiepartner für den Mittelstand',
  articles: [
    {
      direction: 'right',
      heading: 'Aus der Praxis gewachsen.',
      text: 'Die co-IT.eu GmbH ist aus der Verbindung von praktischer IT-Betreuung, moderner Softwareentwicklung und strategischer Beratung entstanden. Diese Mischung prägt unsere Arbeit bis heute: Wir denken in funktionierenden Lösungen für reale Unternehmensprozesse.',
      image: createImage('Unternehmen'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/ueber-uns/unternehmen/',
        ariaLabel: 'Mehr über die co-IT als Unternehmen erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Lokal, wo Nähe zählt. Remote, wo Effizienz zählt.',
      text: 'Für Vor-Ort-Leistungen sind wir im Ortenaukreis und rund um Achern im Einsatz. Remote skalierbare Leistungen wie Managed Services, Microsoft 365 & Azure, Softwareentwicklung, Sicherheitschecks und Digital-/KI-Strategie erbringen wir deutschlandweit.',
      image: createImage('regionale IT-Betreuung'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/ueber-uns/region-einsatzgebiet/',
        ariaLabel: 'Mehr über Region und Einsatzgebiet erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Erst verstehen. Dann lösen.',
      text: 'Wir starten mit Analyse statt Aktionismus: Welche Systeme sind kritisch? Welche Prozesse kosten Zeit? Welche Risiken bestehen? Welche Maßnahmen sind wirtschaftlich sinnvoll? Daraus entsteht ein priorisierter Plan mit sauberer Umsetzung.',
      image: createImage('Klare Einsatzgebiete'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/ueber-uns/arbeitsweise/',
        ariaLabel: 'Mehr über die Arbeitsweise der co-IT erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Technologien, die wir einsetzen, verstehen und betreiben.',
      text: 'Wir setzen auf Technologien, die langfristig tragfähig, wartbar und in Unternehmen sinnvoll betreibbar sind: Microsoft 365, Azure, Angular, .NET, Node.js, etablierte Sicherheitslösungen und passende Open-Source-Komponenten.',
      image: createImage('Betreibbare Technologien'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/ueber-uns/technologien-partner/',
        ariaLabel: 'Mehr über Technologien und Partner der co-IT erfahren'
      }
    }
  ]
};
