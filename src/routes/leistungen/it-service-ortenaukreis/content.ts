import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const itServiceOrtenaukreis: PageContent = {
  title: 'co-IT - IT-Service Ortenaukreis',
  metaDescription:
    'Regionaler IT-Service im Ortenaukreis für Unternehmen rund um Achern, Sasbach, Renchen, Kappelrodeck, Appenweier und Offenburg.',
  headerHeading: 'IT-Service Ortenaukreis',
  headerSubheading: 'Schnell. Persönlich. Vor Ort.',
  backgroundImage: createBackgroundImage('IT-Service im Ortenaukreis'),
  articles: [
    {
      direction: 'right',
      heading: 'Schnell. Persönlich. Vor Ort.',
      text: 'Wenn IT-Systeme streiken, zählt jede Minute. Unser Team sitzt in Achern und unterstützt Unternehmen im gesamten Ortenaukreis - unter anderem in Sasbach, Renchen, Kappelrodeck, Oberkirch, Appenweier und Offenburg. Kein endloses Ferndiagnose-Ping-Pong, sondern ein Techniker, der Ihre Infrastruktur kennt und bei Bedarf direkt vor Ort unterstützt, wenn Arbeitsplätze, Drucker, Scanner, Netzwerke oder Server den laufenden Betrieb ausbremsen.',
      image: createImage('regionalen IT-Service')
    },
    {
      direction: 'left',
      heading: 'Was wir vor Ort wieder ins Laufen bringen.',
      text: 'Wenn Technik physisch angefasst, geprüft oder ausgetauscht werden muss, kommen wir direkt zu Ihnen. Wir unterstützen bei Arbeitsplätzen, Netzwerken, Servern, Druckern, Peripherie, Standortanbindungen und akuten Störungen - schnell, pragmatisch und regional. Dabei geht es oft nicht nur um ein Gerät, sondern um den daran hängenden Ablauf: drucken, scannen, abrechnen, telefonieren oder weiterarbeiten.',
      image: createImage('Vor-Ort-Leistungen')
    },
    {
      direction: 'right',
      heading: 'Regional verankert und mit Blick auf den Arbeitsalltag.',
      text: 'Lokale Präsenz bedeutet bei der co-IT nicht nur geografische Nähe, sondern auch Verständnis für die Unternehmensstruktur im Ortenaukreis. Wir betreuen kleine und mittelständische Unternehmen - von der Arztpraxis über Handwerksbetriebe bis zum produzierenden Unternehmen mit mehreren Standorten. Dadurch können wir Technik nicht isoliert, sondern im Zusammenhang mit den tatsächlichen Abläufen vor Ort beurteilen.',
      image: createImage('regionale IT-Betreuung')
    }
  ]
};
