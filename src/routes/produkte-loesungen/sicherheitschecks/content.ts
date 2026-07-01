import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '../shared';

export const sicherheitschecks: PageContent = {
  title: 'co-IT - Sicherheitschecks',
  metaDescription:
    'Sicherheitschecks für E-Mail, DNS und Webseiten mit verständlichem Bericht und priorisierten Handlungsempfehlungen.',
  headerHeading: 'Sicherheitschecks',
  headerSubheading: 'E-Mail, DNS und Webseite prüfen',
  backgroundImage: createBackgroundImage('Sicherheitschecks'),
  contentHeading: 'Sicherheitschecks für E-Mail, DNS und Webseite',
  articles: [
    {
      direction: 'right',
      heading: 'Wissen, wo Sie stehen. Bevor es jemand anderes herausfindet.',
      text: 'Unser standardisierter Sicherheitscheck analysiert Ihre E-Mail-Infrastruktur, DNS-Konfiguration und Webseite auf bekannte Schwachstellen und Fehlkonfigurationen. Das Ergebnis ist ein strukturierter Bericht mit konkreten Handlungsempfehlungen.',
      image: createImage('Sicherheitschecks')
    },
    {
      direction: 'left',
      heading: 'Was geprüft wird.',
      text: 'E-Mail: SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. DNS: auffällige Konfigurationen, veraltete Einträge und potenzielle Schwachstellen. Webseite: HTTPS-Konfiguration, Security-Header und sichtbare technische Risiken.',
      image: createImage('Prüfumfang von Sicherheitschecks')
    },
    {
      direction: 'right',
      heading: 'Aus Befunden werden nächste Schritte.',
      text: 'Ein guter Sicherheitsbericht muss technisch korrekt und intern nutzbar sein. Deshalb formulieren wir Befunde so, dass technische Verantwortliche handeln können und Geschäftsführung, Datenschutz oder Compliance die Risiken nachvollziehen können.',
      image: createImage('Handlungsempfehlungen aus Sicherheitschecks')
    }
  ]
};
