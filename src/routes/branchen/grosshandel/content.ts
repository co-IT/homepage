import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const grosshandel: PageContent = {
  title: 'co-IT - Großhandel',
  metaDescription:
    'IT, Software und Sicherheit für Großhandelsunternehmen mit Schnittstellen, Prozessdigitalisierung, Webanwendungen und E-Mail-Sicherheit.',
  headerHeading: 'Großhandel',
  headerSubheading: 'Schnittstellen, Versand und Abläufe entlasten',
  backgroundImage: createBackgroundImage('Großhandel'),
  contentHeading: 'IT, Software und Prozessdigitalisierung für Großhandelsunternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Großhandel lebt von Geschwindigkeit.',
      text: 'Bestellungen, Lagerbestände, Beschaffung, Kundenkommunikation und Rechnungsprozesse müssen zuverlässig ineinandergreifen. Fehlende Artikel bedeuten verlorenen Umsatz, während zu hohe Bestände Kapital binden und Lagerfläche belasten. Gleichzeitig müssen Einkaufsteams große Sortimente überblicken, Lieferzeiten einplanen und auf Veränderungen schnell reagieren. Dafür braucht es Systeme, die Informationen nicht nur speichern, sondern Entscheidungen im Tagesgeschäft sinnvoll unterstützen und wiederkehrende Abläufe verlässlich tragen.',
      image: createImage('Großhandel')
    },
    {
      direction: 'left',
      heading: 'Warenwirtschaft entlang der tatsächlichen Prozesse.',
      text: 'Standardisierte ERP- und Warenwirtschaftssysteme passen nicht immer zu den gewachsenen Abläufen eines Großhändlers. Wir entwickeln und erweitern Systeme gemeinsam mit den Fachabteilungen und richten sie an den tatsächlichen Arbeitsweisen aus. Dazu gehören unter anderem Sortimentssteuerung, Beschaffungsplanung, Webshop-Anbindung, Versandprozesse, Qualitätssicherung und die Integration weiterer Fachanwendungen. So entsteht keine isolierte Software, sondern ein durchgängiger digitaler Geschäftsprozess, der auch bestehende Zuständigkeiten und Folgeprozesse sinnvoll einbindet.',
      image: createImage('Schnittstellen im Großhandel')
    },
    {
      direction: 'right',
      heading: 'Systeme verbinden, Qualität sichern, Risiken reduzieren.',
      text: 'Wenn Artikelstammdaten, Preise und Bestände in mehreren Systemen getrennt gepflegt werden, entstehen unnötiger Aufwand und veraltete Informationen. Gleichzeitig reichen bei vielen Produkten rein technische Stammdaten nicht aus, weil konkrete Varianten, Prüfanforderungen und bereits gelieferte Ausführungen berücksichtigt werden müssen. Wir verbinden Warenwirtschaft, Webshop und weitere Anwendungen so, dass Abläufe nicht nur schneller, sondern auch verlässlicher werden. Ergänzend helfen Sicherheitsmaßnahmen dabei, operative Risiken in Einkauf, Rechnungsprüfung und Lieferantenkommunikation besser abzusichern.',
      image: createImage('Sicherheit im Großhandel')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Einige typische Beispiele zeigen, wie Prozessdigitalisierung im Großhandel konkret aussehen kann - von Beschaffung und Warenwirtschaft bis zu Schnittstellen und Dokumentenflüssen.',
      examples: [
        {
          title: 'Mehr als 50.000 Artikel effizient steuern.',
          text: 'Für eine mittelständische Unternehmensgruppe entwickelten wir ein Warenwirtschaftssystem, mit dem mehr als 50.000 Artikel weiterhin von einem Einkaufsteam aus vier bis fünf Personen betreut werden konnten. Das System erkannte umsatzrelevante Produkte fortlaufend, berücksichtigte Lieferzeiten und unterstützte eine vorausschauende Beschaffung. Dadurch traten akute Deckungslücken nur noch selten auf, überhöhte Bestände wurden reduziert und die Rohmarge verbesserte sich laut internen Auswertungen innerhalb weniger Jahre spürbar.'
        },
        {
          title: 'Webshop, Warenwirtschaft und Versand zusammenführen.',
          text: 'In einem Migrationsprojekt wurden Webshop, bestehende Warenwirtschaft und Versandprozesse so weiterentwickelt, dass manuelle Exporte, Copy-and-paste-Schritte und wiederholte Systemwechsel gezielt reduziert werden konnten. Gleichzeitig blieben bestehende Nummernkreise, Historien und ein sinnvoller Rückfallweg auf das alte Verfahren erhalten. Das schafft nicht nur technische Fortschritte, sondern auch mehr Kontrolle und Sicherheit im laufenden Betrieb.'
        },
        {
          title: 'Geschäftsdokumente revisionssicher und auffindbar machen.',
          text: 'Für ein Warenwirtschaftssystem wurde eine Schnittstelle zu einem Dokumentenmanagementsystem umgesetzt, über die heute rund 500.000 Geschäftsdokumente pro Jahr automatisiert und revisionssicher archiviert werden. Dadurch entfällt die unstrukturierte Ablage in Postfächern, Dokumente lassen sich deutlich schneller finden und wichtige Abläufe werden besser nachvollziehbar.'
        }
      ]
    }
  ]
};
