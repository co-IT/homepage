import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const versicherungen: PageContent = {
  title: 'co-IT - Versicherungen',
  metaDescription:
    'IT, Cyber-Sicherheit und digitale Lösungen für Versicherungen mit Awareness, Phishing-Simulationen, Passwort-Management und Sicherheitschecks.',
  headerHeading: 'Versicherungen',
  headerSubheading: 'Vertrauen digital absichern',
  backgroundImage: createBackgroundImage('Versicherungen'),
  contentHeading: 'IT, Cyber-Sicherheit und digitale Lösungen für Versicherungen',
  articles: [
    {
      direction: 'right',
      heading: 'Vertrauen ist Ihr Geschäftsmodell.',
      text: 'Versicherungen arbeiten mit sensiblen Kundendaten, komplexen Prozessen und hohen Erwartungen an Verfügbarkeit. Schon kleine Sicherheitslücken, schlechte Zustellbarkeit oder Medienbrüche in Dokumenten- und Kommunikationsprozessen können Vertrauen beschädigen.',
      image: createImage('Versicherungen')
    },
    {
      direction: 'left',
      heading: 'Kommunikation absichern und Auffälligkeiten früh erkennen.',
      text: 'Phishing, Social Engineering und kompromittierte Zugangsdaten treffen Versicherungen besonders hart, weil Kommunikation im Versicherungsumfeld stark auf Vertrauen, Erreichbarkeit und nachvollziehbaren Abläufen basiert. Schulungsportale, Phishing-Simulationen, Passwort-Management und E-Mail-Sicherheitschecks helfen, Risiken früher sichtbar zu machen und technische Schutzmaßnahmen verständlich weiterzuentwickeln. Gleichzeitig können solche Lösungen selbst Teil des Leistungsangebots für Geschäftskunden werden, etwa wenn Versicherungsnehmer über ein Portal geschult, Simulationen durchgeführt und Ergebnisse dokumentiert ausgewertet werden.',
      image: createImage('Sicherheit für Versicherungen')
    },
    {
      direction: 'right',
      heading: 'Digitale Prozesse mit Nachweisbarkeit.',
      text: 'Versicherungen brauchen nicht nur sichere, sondern auch fachlich belastbare digitale Prozesse. Dazu gehören Portale, Schulungsnachweise, Dokumentenflüsse und individuelle Fachanwendungen, etwa für die Kalkulation und Erstellung von Cyber-Policen. Gerade wenn komplexe Beitragslogiken, Selbstbehalte, Deckungssummen oder unterschiedliche Vertragsvarianten abgebildet werden müssen, reicht Standardsoftware oft nicht aus. Dann entsteht der eigentliche Mehrwert durch Software, die fachliche Regeln nachvollziehbar abbildet und zugleich intern, gegenüber Partnern und gegenüber Aufsicht erklärbar bleibt.',
      image: createImage('Digitale Versicherungsprozesse')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Versicherungen brauchen Lösungen, die nicht nur technisch funktionieren, sondern fachlich belastbar, nachvollziehbar und im Alltag nutzbar sind. Zwei Beispiele zeigen, wie aus Cyber-Themen konkrete Prozesse, Produkte und Mehrwerte entstehen.',
      examples: [
        {
          title: 'Cyber-Policen kalkulierbar und schneller bearbeitbar machen.',
          text: 'Für eine namhafte deutsche Versicherung entwickelten wir einen Cyber-Policen-Manager, mit dem komplexe Kalkulationsregeln für Firmenkunden strukturiert in Software abgebildet werden konnten. Dazu gehörten unter anderem Selbstbehalte, Deckungssummen, mitversicherte Unternehmen und Auslandskonstellationen. Die fachliche Logik musste aus bestehenden Unterlagen und Beispielrechnungen rekonstruiert und in belastbare Berechnungsregeln übersetzt werden. Das Ergebnis: Kalkulation und Dokumentenerstellung wurden deutlich beschleunigt, und unterschiedliche Vertragsvarianten konnten innerhalb eines Vorgangs wesentlich einfacher abgebildet werden.'
        },
        {
          title: 'Sensibilisierung als nutzbare Leistung für Versicherungsnehmer.',
          text: 'Für den Kontext von Cyber-Policen entstand ein E-Learning-Portal, das Versicherungsnehmer bei Schulungen, Prüfungen, Phishing-Simulationen und organisatorischen Nachweisen unterstützt. Die Herausforderung lag darin, Anforderungen aus Versicherungsbedingungen in ein praxistaugliches Produkt für sehr unterschiedliche Unternehmensgrößen zu übersetzen. So wurde aus abstrakten Vorgaben ein nutzbarer Ablauf mit konkreten Inhalten, Vorlagen und Auswertungen. Gleichzeitig kann ein solches Portal auch im Vertrieb helfen, weil Cyber-Risiken und Präventionsmaßnahmen im Kundengespräch verständlicher und greifbarer werden.'
        }
      ]
    }
  ]
};
