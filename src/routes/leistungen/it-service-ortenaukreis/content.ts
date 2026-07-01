import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const itServiceOrtenaukreis: PageContent = {
  title: 'co-IT - IT-Service Ortenaukreis',
  metaDescription:
    'Regionaler IT-Service im Ortenaukreis für Unternehmen rund um Achern, Sasbach, Renchen, Kappelrodeck, Appenweier und Bühl.',
  headerHeading: 'IT-Service Ortenaukreis',
  headerSubheading: 'Schnell, persönlich, vor Ort',
  backgroundImage: createBackgroundImage('IT-Service im Ortenaukreis'),
  contentHeading: 'IT-Service im Ortenaukreis für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Schnell. Persönlich. Vor Ort.',
      text: 'Wenn IT-Systeme streiken, zählt jede Minute. Unser lokales Team ist im Raum Achern ansässig und in der gesamten Ortenau für Sie im Einsatz - von Sasbach über Renchen und Kappelrodeck bis Appenweier, Bühl und umliegende Orte. Kein endloses Ferndiagnose-Ping-Pong, sondern ein Techniker, der Ihre Infrastruktur kennt und bei Bedarf direkt vor Ort unterstützt.',
      image: createImage('regionalen IT-Service')
    },
    {
      direction: 'left',
      heading: 'Was wir vor Ort leisten.',
      text: 'Wenn Technik physisch angefasst, geprüft oder ausgetauscht werden muss, kommen wir direkt zu Ihnen. Wir unterstützen bei Arbeitsplätzen, Netzwerken, Servern, Druckern, Peripherie, Standortanbindungen und akuten Störungen - schnell, pragmatisch und regional.',
      image: createImage('Vor-Ort-Leistungen')
    },
    {
      direction: 'right',
      heading: 'Regional verankert und auf Augenhöhe.',
      text: 'Lokale Präsenz bedeutet bei der co-IT nicht nur geografische Nähe, sondern auch Verständnis für die Unternehmensstruktur im Ortenaukreis. Wir betreuen kleine und mittelständische Unternehmen - von der Arztpraxis über Handwerksbetriebe bis zum produzierenden Unternehmen mit mehreren Standorten.',
      image: createImage('regionale IT-Betreuung')
    }
  ]
};
