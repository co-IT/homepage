import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const arbeitsweise: PageContent = {
  title: 'co-IT - Arbeitsweise',
  metaDescription:
    'Die co-IT Arbeitsweise: erst verstehen, dann technisch präzise und wirtschaftlich sinnvoll umsetzen und langfristig betreuen.',
  headerHeading: 'Arbeitsweise',
  headerSubheading: 'Analysieren, umsetzen, betreuen',
  backgroundImage: createBackgroundImage('Arbeitsweise'),
  contentHeading: 'Klar analysieren, sauber umsetzen, langfristig betreuen',
  articles: [
    {
      direction: 'right',
      heading: 'Erst verstehen. Dann lösen.',
      text: 'Wir starten nicht mit einer fertigen Lösung, sondern mit den richtigen Fragen: Welche Systeme sind kritisch? Wo entstehen Ausfälle? Welche Prozesse kosten Zeit? Welche Risiken sind technisch, organisatorisch oder rechtlich relevant?',
      image: createImage('Arbeitsweise')
    },
    {
      direction: 'left',
      heading: 'Technisch präzise, wirtschaftlich sinnvoll.',
      text: 'Unsere Empfehlungen müssen technisch funktionieren und wirtschaftlich vertretbar sein. Wir achten auf Wartbarkeit, Sicherheit, Skalierbarkeit und den tatsächlichen Nutzen im Arbeitsalltag. Nicht alles muss neu gebaut werden - aber alles sollte bewusst entschieden sein.',
      image: createImage('Technisch präzise arbeiten')
    },
    {
      direction: 'right',
      heading: 'Zusammenarbeit ohne Blackbox.',
      text: 'Wir dokumentieren, erklären und priorisieren. Kunden sollen verstehen, was getan wird, warum es notwendig ist und welche nächsten Schritte sinnvoll sind. So entsteht keine Abhängigkeit von Einzelpersonen, sondern eine belastbare IT- und Digitalstruktur.',
      image: createImage('Zusammenarbeit ohne Blackbox')
    }
  ]
};
