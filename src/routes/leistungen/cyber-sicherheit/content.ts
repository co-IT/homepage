import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const cyberSicherheit: PageContent = {
  title: 'co-IT - Cyber-Sicherheit',
  metaDescription:
    'Cyber-Sicherheit für E-Mail, Mitarbeitende und Systeme mit E-Mail-Härtung, Awareness, Phishing-Simulationen und Sicherheitschecks.',
  headerHeading: 'Cyber-Sicherheit',
  headerSubheading: 'Verständlich und wirksam',
  backgroundImage: createBackgroundImage('Cyber-Sicherheit'),
  contentHeading: 'Cyber-Sicherheit für E-Mail, Mitarbeitende und Systeme',
  articles: [
    {
      direction: 'right',
      heading: 'Viele Angriffe beginnen nicht im Serverraum.',
      text: 'Viele Angriffe beginnen nicht im Serverraum, sondern mit einer glaubwürdigen E-Mail, einem schwachen Passwort oder einer falschen Entscheidung unter Zeitdruck. Firewalls und Antivirensoftware allein schützen nicht gegen Social Engineering, kompromittierte Zugangsdaten und organisatorische Schwachstellen.',
      image: {
        src: '/img/article-pages/cyber-phishing-password-risk.webp',
        alt: 'Mitarbeiter prüft eine verdaechtige E-Mail und Passwortwarnungen an seinem Arbeitsplatz.'
      }
    },
    {
      direction: 'left',
      heading: 'E-Mail-Sicherheit auf technischer Ebene.',
      text: 'Wir prüfen und härten Ihre E-Mail-Infrastruktur mit SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. Diese Protokolle reduzieren das Risiko von Spoofing, Manipulation und Fehlkonfigurationen und schaffen eine belastbare Grundlage für sichere Kommunikation.',
      image: createImage('E-Mail-Sicherheit')
    },
    {
      direction: 'right',
      heading: 'Sicherheit wirkt besser, wenn sie intern verstanden wird.',
      text: 'Technische Schutzmaßnahmen entfalten erst dann ihren vollen Nutzen, wenn Verantwortliche und Mitarbeitende nachvollziehen können, was sie bewirken und warum sie eingeführt werden. Deshalb verbinden wir technische Härtung mit verständlicher Erklärung, Awareness-Trainings, Phishing-Simulationen, Passwort-Management und sauberem Feedback. Sicherheitsverhalten wird so messbar und entwickelbar, ohne aus Lernen einen Vorwurf zu machen - und die Ergebnisse können in konkrete organisatorische und technische Maßnahmen übersetzt werden.',
      image: {
        src: '/img/article-pages/cyber-awareness-measurable-dashboard.webp',
        alt: 'IT-Berater bespricht mit zwei Kunden messbare Awareness-Ergebnisse und Sicherheitskennzahlen an einem grossen Dashboard.'
      }
    }
  ]
};
