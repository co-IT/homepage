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
      image: createImage('Cyber-Sicherheit')
    },
    {
      direction: 'left',
      heading: 'E-Mail-Sicherheit auf technischer Ebene.',
      text: 'Wir prüfen und härten Ihre E-Mail-Infrastruktur mit SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. Diese Protokolle reduzieren das Risiko von Spoofing, Manipulation und Fehlkonfigurationen und schaffen eine belastbare Grundlage für sichere Kommunikation.',
      image: createImage('E-Mail-Sicherheit')
    },
    {
      direction: 'right',
      heading: 'Awareness, die messbar wird.',
      text: 'Viele Mitarbeitende erkennen einfache Phishing-Mails sofort. Kritisch wird es bei realistischen Szenarien, die Zeitdruck, Vertrauen oder gewohnte Abläufe ausnutzen. Mit Awareness-Trainings, Phishing-Simulationen, Passwort-Management, Microsoft-365-Härtung und verständlichem Feedback machen wir Sicherheitsverhalten sichtbar und entwickelbar - als Lernmoment statt als Vorwurf.',
      image: createImage('Awareness und Phishing-Simulationen')
    }
  ]
};
