import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const regionImage = '/img/about/team-waling-in-the-nature.webp';

export const regionEinsatzgebiet: PageContent = {
  title: 'co-IT - Region & Einsatzgebiet',
  metaDescription:
    'IT-Service im Ortenaukreis und digitale Leistungen deutschlandweit mit klarer Trennung zwischen Vor-Ort-Service und remote skalierbaren Leistungen.',
  headerHeading: 'Region & Einsatzgebiet',
  headerSubheading: 'Lokal vor Ort, digital deutschlandweit',
  backgroundImage: createBackgroundImage('Region und Einsatzgebiet', regionImage),
  contentHeading: 'IT-Service im Ortenaukreis, digitale Leistungen deutschlandweit',
  articles: [
    {
      direction: 'right',
      heading: 'Lokal, wo Nähe zählt.',
      text: 'Für Vor-Ort-Leistungen sind wir im Ortenaukreis und rund um Achern im Einsatz. Wenn Hardware eingerichtet, Netzwerke geprüft, Arbeitsplätze aufgebaut oder Systeme physisch gewartet werden müssen, ist regionale Nähe ein echter Vorteil.',
      image: createImage('Region und Einsatzgebiet', regionImage)
    },
    {
      direction: 'left',
      heading: 'Remote, wo Effizienz zählt.',
      text: 'Managed Services, Microsoft 365 & Azure, Softwareentwicklung, Cyber-Sicherheitschecks und Digital-/KI-Strategie lassen sich in vielen Fällen effizient remote erbringen. So unterstützen wir Unternehmen deutschlandweit mit klaren digitalen Prozessen.',
      image: createImage('Remote-Leistungen')
    },
    {
      direction: 'right',
      heading: 'Klare Trennung statt falscher Versprechen.',
      text: 'Wir versprechen keine Vor-Ort-Präsenz dort, wo sie nicht wirtschaftlich sinnvoll ist. Stattdessen trennen wir sauber zwischen lokalem IT-Service und remote skalierbaren Leistungen. Das schafft realistische Erwartungen und transparente Zusammenarbeit.',
      image: createImage('Klare Einsatzgebiete')
    }
  ]
};
