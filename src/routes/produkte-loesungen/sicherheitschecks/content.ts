import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const sicherheitschecks: PageContent = {
  title: 'co-IT - Sicherheitschecks',
  metaDescription:
    'Sicherheitschecks für E-Mail, DNS und Webseiten mit verständlichem Bericht und priorisierten Handlungsempfehlungen.',
  headerHeading: 'Sicherheitschecks',
  headerSubheading: 'Konfiguration verstehen, Risiken priorisieren',
  backgroundImage: createBackgroundImage('Sicherheitschecks'),
  contentHeading: 'Sicherheitschecks für E-Mail, DNS und Webseite',
  articles: [
    {
      direction: 'right',
      heading: 'Wissen, wo Sie stehen. Bevor es jemand anderes herausfindet.',
      text: 'Unser Sicherheitscheck analysiert Ihre E-Mail-Infrastruktur, DNS-Konfiguration und Webseite auf bekannte Schwachstellen, Fehlkonfigurationen und ungenutzte Schutzpotenziale. Das Ziel ist kein rein technischer Schnelltest, sondern eine belastbare Grundlage für Entscheidungen: Was ist bereits gut, wo bestehen reale Risiken und welche Schritte sollten als Nächstes folgen?',
      image: {
        src: '/img/article-pages/security-report-review.webp',
        alt: 'IT-Berater prüft einen Sicherheitsbericht mit priorisierten Befunden.'
      }
    },
    {
      direction: 'left',
      heading: 'Was geprüft wird und warum das im Alltag zählt.',
      text: 'Im E-Mail-Bereich prüfen wir unter anderem SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. Dabei betrachten wir nicht nur Sollwerte, sondern auch die reale Mailstrecke mit angebundenen Diensten und Sonderfällen. Hinzu kommen DNS-Konfigurationen, veraltete Einträge, HTTPS-Einstellungen, Security-Header und sichtbare technische Risiken Ihrer Webseite.',
      image: createImage('Prüfumfang von Sicherheitschecks')
    },
    {
      direction: 'right',
      heading: 'Aus Befunden werden priorisierte nächste Schritte.',
      text: 'Ein guter Sicherheitsbericht muss technisch korrekt und intern nutzbar sein. Deshalb formulieren wir Befunde so, dass technische Verantwortliche direkt handeln können und Geschäftsführung, Datenschutz oder Compliance die Auswirkungen nachvollziehen. Wenn sinnvoll, empfehlen wir auch eine gestufte Umsetzung, etwa zuerst im Testmodus zu beobachten und Schutzmaßnahmen anschließend gezielt zu verschärfen.',
      image: createImage('Handlungsempfehlungen aus Sicherheitschecks')
    }
  ]
};
