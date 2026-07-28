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
      text: 'Viele Angriffe beginnen nicht im Serverraum, sondern mit einer glaubwürdigen E-Mail, einem schwachen Passwort oder einer falschen Entscheidung unter Zeitdruck. Gerade bei gewachsenen Strukturen zeigt sich in der Praxis immer wieder, dass Firewalls und Antivirensoftware allein nicht gegen Social Engineering, kompromittierte Zugangsdaten oder missbrauchte Absenderidentitäten schützen. Wir schauen deshalb nicht nur auf einzelne Systeme, sondern auf den tatsächlichen Kommunikationsalltag im Unternehmen.',
      image: {
        src: '/img/article-pages/cyber-phishing-password-risk.webp',
        alt: 'Mitarbeiter prüft eine verdaechtige E-Mail und Passwortwarnungen an seinem Arbeitsplatz.'
      }
    },
    {
      direction: 'left',
      heading: 'E-Mail-Sicherheit auf technischer Ebene.',
      text: 'Wir prüfen und härten Ihre E-Mail-Infrastruktur mit Maßnahmen wie SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. In der Praxis geht es dabei selten um eine ideale Blaupause, sondern um eine schrittweise Härtung, die zu vorhandenen Dienstleistern, bestehenden Versandwegen und realen Abhängigkeiten passt. So entstehen keine abstrakten Sicherheitskonzepte, sondern belastbare Verbesserungen, die Missbrauch spürbar erschweren und die Grundlage für verlässliche Kommunikation stärken.',
      image: createImage('E-Mail-Sicherheit')
    },
    {
      direction: 'right',
      heading: 'Sicherheit wirkt besser, wenn sie intern verstanden wird.',
      text: 'Technische Schutzmaßnahmen entfalten erst dann ihren vollen Nutzen, wenn Verantwortliche und Mitarbeitende nachvollziehen können, was sie bewirken und warum sie eingeführt werden. Deshalb verbinden wir technische Härtung mit verständlicher Erklärung, Awareness-Trainings, Phishing-Simulationen, Passwort-Management und sauberem Feedback. In Projekten zeigt sich immer wieder: Wenn Auswirkungen, Grenzen und nächste Schritte klar eingeordnet sind, lassen sich auch schrittweise Sicherheitsmaßnahmen intern besser mittragen und wirksamer weiterentwickeln.',
      image: {
        src: '/img/article-pages/cyber-awareness-measurable-dashboard.webp',
        alt: 'IT-Berater bespricht mit zwei Kunden messbare Awareness-Ergebnisse und Sicherheitskennzahlen an einem grossen Dashboard.'
      }
    },
    {
      type: 'text',
      heading: 'Aus der Praxis',
      text: 'Gerade bei sensiblen Themen wie E-Mail-Sicherheit zeigt sich der Wert guter Beratung darin, technische Maßnahmen so aufzubauen, dass sie wirksam sind und zugleich für den Kunden nachvollziehbar bleiben.\n\nE-Mail-Sicherheit verständlich und wirksam verbessern.\n\nEin Maschinenbauunternehmen stellte fest, dass seine Domain für täuschend echte Absender genutzt wurde. Gemeinsam mit dem Kunden haben wir die bestehende Situation Schritt für Schritt eingeordnet, passende Schutzmaßnahmen aufgebaut und die jeweiligen Auswirkungen verständlich erklärt. So konnte nicht nur die technische Absicherung deutlich verbessert werden, sondern auch das Vertrauen in die eigene E-Mail-Kommunikation wachsen. Nach der Umsetzung ging der Missbrauch zurück, und wichtige Nachrichten wurden nach Kundenaussage wieder zuverlässiger zugestellt.'
    }
  ]
};
