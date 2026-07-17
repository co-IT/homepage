import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const cyberSicherheit: PageContent = {
  title: 'co-IT - Cyber-Sicherheit',
  metaDescription:
    'Cyber-Sicherheit für E-Mail, Mitarbeitende und Systeme mit E-Mail-Härtung, Awareness, Phishing-Simulationen und Sicherheitschecks.',
  headerHeading: 'Cyber-Sicherheit',
  headerSubheading: 'Technik härten. Menschen mitnehmen.',
  backgroundImage: createBackgroundImage('Cyber-Sicherheit'),
  contentHeading: 'Cyber-Sicherheit für E-Mail, Mitarbeitende und Systeme',
  articles: [
    {
      direction: 'right',
      heading: 'Viele Sicherheitsprobleme beginnen mit einer scheinbar normalen E-Mail.',
      text: 'Viele Angriffe beginnen nicht im Serverraum, sondern mit einer glaubwürdigen Absenderadresse, einem schwachen Passwort oder einer falschen Entscheidung unter Zeitdruck. Gerade bei E-Mails zeigt sich schnell, wie nah technische Konfiguration, Zustellbarkeit und menschliches Verhalten zusammenhängen. Wer nur einzelne Schutzbausteine aktiviert, ohne den Gesamtprozess zu betrachten, lässt oft weiterhin kritische Lücken offen.',
      image: {
        src: '/img/article-pages/cyber-phishing-password-risk.webp',
        alt: 'Mitarbeiter prüft eine verdaechtige E-Mail und Passwortwarnungen an seinem Arbeitsplatz.'
      }
    },
    {
      direction: 'left',
      heading: 'E-Mail-Sicherheit muss zur tatsächlichen Systemlandschaft passen.',
      text: 'Wir prüfen und härten Ihre E-Mail-Infrastruktur mit SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. Entscheidend ist dabei nicht nur die Liste der Protokolle, sondern wie diese mit Ihrer realen Umgebung zusammenspielen, etwa mit Versanddiensten, Sicherheitsgateways oder bestehenden Mailrouten. Gute Absicherung entsteht deshalb oft schrittweise: messen, berichten, prüfen, nachschärfen und erst dann konsequent durchsetzen.',
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
