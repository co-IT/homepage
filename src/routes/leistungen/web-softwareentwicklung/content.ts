import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const webSoftwareentwicklung: PageContent = {
  title: 'co-IT - Web- und Softwareentwicklung',
  metaDescription:
    'Web- und Softwareentwicklung für digitale Geschäftsprozesse: Webanwendungen, Schnittstellen, Portale und moderne Backend-Systeme.',
  headerHeading: 'Web- & Softwareentwicklung',
  headerSubheading: 'Software, die passt',
  backgroundImage: createBackgroundImage('Web- und Softwareentwicklung'),
  contentHeading: 'Web- und Softwareentwicklung für digitale Geschäftsprozesse',
  articles: [
    {
      direction: 'right',
      heading: 'Software, die passt. Nicht Software, die man anpassen muss.',
      text: 'Standardsoftware erreicht ihre Grenzen genau dort, wo Ihr Geschäftsprozess individuell wird. Wir entwickeln webbasierte Anwendungen, Portale, Schnittstellen und Backend-Systeme, die auf Ihre Abläufe zugeschnitten sind - wartbar, skalierbar und langfristig tragfähig.',
      image: {
        src: '/img/article-pages/software-prototype-user-test.webp',
        alt: 'Entwickler und Kundin prüfen eine individuelle Webanwendung mit Schnittstellen- und Prozesslogik.'
      }
    },
    {
      direction: 'left',
      heading: 'Technologien, die langfristig betreibbar bleiben.',
      text: 'Frontend, Backend und Cloud müssen langfristig zusammenpassen. Wir setzen unter anderem auf Angular, .NET, Node.js und Azure, wenn sie fachlich und technisch sinnvoll sind. Entscheidend ist nicht der einzelne Technologiebegriff, sondern eine Architektur, die wartbar, erweiterbar und zuverlässig betreibbar bleibt.',
      image: createImage('Softwaretechnologien')
    },
    {
      direction: 'right',
      heading: 'Von der Legacy-Ablösung zum modernen System.',
      text: 'Viele kritische Prozesse laufen auf Access-Datenbanken, Excel-Automatisierungen, proprietären Desktop-Anwendungen oder gewachsenen Insellösungen. Wir analysieren, was wirklich gebraucht wird, und modernisieren schrittweise - migrationsbegleitet, risikoarm und mit klarer Roadmap.',
      image: createImage('Legacy-Modernisierung')
    }
  ]
};
