import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '../shared';

const technologyImage = '/img/about/team-reviewing-a-solution.webp';

export const technologienPartner: PageContent = {
  title: 'co-IT - Technologien & Partner',
  metaDescription:
    'Technologien und Partner der co-IT: Microsoft 365, Azure, Angular, .NET, Node.js, Sicherheitslösungen und passende Open-Source-Komponenten.',
  headerHeading: 'Technologien & Partner',
  headerSubheading: 'Tragfähige Technologien sinnvoll einsetzen',
  backgroundImage: createBackgroundImage(
    'Technologien und Partner',
    technologyImage
  ),
  contentHeading: 'Technologien, die wir einsetzen, verstehen und betreiben',
  articles: [
    {
      direction: 'right',
      heading: 'Kein Tool-Flickenteppich.',
      text: 'Wir wählen Technologien nicht nach Trend, sondern nach Wartbarkeit, Sicherheit, Verfügbarkeit von Know-how und langfristiger Betreibbarkeit. Dazu gehören Microsoft 365, Azure, moderne Webtechnologien, etablierte Sicherheitslösungen und Open-Source-Komponenten, wenn sie technisch und organisatorisch passen.',
      image: createImage('Technologien und Partner', technologyImage)
    },
    {
      direction: 'left',
      heading: 'Technologien, die wir auch betreiben können.',
      text: 'In Cloud- und Kollaborationsthemen arbeiten wir mit Microsoft 365 und Azure. In der Softwareentwicklung setzen wir unter anderem auf Angular, .NET und Node.js. Entscheidend ist, dass diese Technologien nicht isoliert eingeführt werden, sondern in eine Architektur passen, die sicher, wartbar und langfristig betreibbar bleibt.',
      image: createImage('Betreibbare Technologien')
    },
    {
      direction: 'right',
      heading: 'Partner dort, wo es sinnvoll ist.',
      text: 'Nicht jede Lösung muss selbst gebaut werden. Wir arbeiten mit Technologiepartnern und bewährten Plattformen, wenn sie den besten Nutzen bieten. Unsere Rolle bleibt klar: Wir prüfen, integrieren, betreiben und erklären.',
      image: createImage('Technologiepartner')
    }
  ]
};
