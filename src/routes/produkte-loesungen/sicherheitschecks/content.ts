import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

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
      image: {
        src: '/img/article-pages/security-report-review.webp',
        alt: 'IT-Berater prüft einen Sicherheitsbericht mit priorisierten Befunden.'
      }
    },
    {
      direction: 'left',
      heading: 'Was geprüft wird.',
      text: 'Wir prüfen, ob Ihre E-Mail-Kommunikation technisch sauber abgesichert ist - von SPF, DKIM und DMARC bis zu MTA-STS, TLS-RPT, DANE und DNSSEC. Dazu kommen Ihre DNS-Einträge, auffällige oder veraltete Konfigurationen sowie Ihre Webseite mit Blick auf HTTPS, Security-Header und von außen sichtbare technische Risiken. So entsteht kein reiner Protokoll-Check, sondern ein realistisches Bild Ihrer Angriffsfläche.',
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
