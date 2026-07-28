import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const sicherheitschecks: PageContent = {
  title: 'co-IT - Sicherheitschecks',
  metaDescription:
    'Sicherheitschecks für E-Mail, DNS und Webseiten mit verständlichem Bericht und priorisierten Handlungsempfehlungen.',
  headerHeading: 'Sicherheitschecks',
  headerSubheading: 'Schwachstellen erkennen. Risiken verständlich einordnen.',
  backgroundImage: createBackgroundImage('Sicherheitschecks'),
  contentHeading: 'Sicherheitschecks für E-Mail, Domain und Webauftritt',
  articles: [
    {
      direction: 'right',
      heading: 'Sicher erkennen, wo Risiken bestehen.',
      text: 'Unser strukturierter Sicherheitscheck untersucht Ihre E-Mail-Absicherung, Ihre Domain-Konfiguration und Ihren Webauftritt auf typische Schwachstellen, Fehlkonfigurationen und unnötige Angriffsflächen. Sie erhalten keinen unübersichtlichen Technikbericht, sondern eine verständliche Auswertung mit klar priorisierten Empfehlungen. So wird sichtbar, was akut wichtig ist, was verbessert werden sollte und welche Themen zunächst nachrangig sind.',
      image: {
        src: '/img/article-pages/security-report-review.webp',
        alt: 'IT-Berater prüft einen Sicherheitsbericht mit priorisierten Befunden.'
      }
    },
    {
      direction: 'left',
      heading: 'Was wir konkret prüfen.',
      text: 'Wir schauen, ob Ihre geschäftliche E-Mail-Kommunikation zuverlässig geschützt ist, ob Ihre Internet-Domain unnötige Risiken birgt und ob Ihr Webauftritt die wichtigsten Sicherheitsanforderungen erfüllt. Dabei prüfen wir unter anderem, ob E-Mails vertrauenswürdig zugestellt werden, ob Ihre Domain sauber abgesichert ist und ob Ihre Webseite nach außen vermeidbare Schwachstellen zeigt. Auch veraltete oder widersprüchliche Einstellungen nehmen wir in den Blick. So entsteht ein verständliches Bild davon, wo Handlungsbedarf besteht und wie sich Sicherheit, Erreichbarkeit und Vertrauen gezielt verbessern lassen.',
      image: createImage('Prüfumfang von Sicherheitschecks')
    },
    {
      direction: 'right',
      heading: 'Aus Befunden werden nächste Schritte.',
      text: 'Ein Sicherheitscheck ist nur dann hilfreich, wenn aus den Ergebnissen sinnvolle Maßnahmen entstehen. Deshalb bereiten wir alle Befunde so auf, dass technische Verantwortliche direkt handeln können und Geschäftsführung, Datenschutz oder Compliance die Tragweite nachvollziehen können. Sie erhalten eine verständliche Einordnung, eine Priorisierung nach Dringlichkeit und konkrete Empfehlungen für die nächsten Schritte statt einer bloßen Liste technischer Hinweise.',
      image: createImage('Handlungsempfehlungen aus Sicherheitschecks')
    }
  ]
};
