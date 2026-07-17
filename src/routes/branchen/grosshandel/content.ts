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
      text: 'Bestellungen, Lagerbestände, Beschaffung, Kundenkommunikation und Rechnungsprozesse müssen zuverlässig ineinandergreifen. Fehlende Artikel bedeuten verlorenen Umsatz, während zu hohe Bestände Kapital binden und Lagerfläche belasten. Gleichzeitig müssen Einkaufsteams große Sortimente überblicken, Lieferzeiten einplanen und auf Veränderungen schnell reagieren. Dafür braucht es Systeme, die Informationen nicht nur speichern, sondern Entscheidungen im Tagesgeschäft sinnvoll unterstützen.',
      image: createImage('Großhandel')
    },
    {
      direction: 'left',
      heading: 'Warenwirtschaft entlang der tatsächlichen Prozesse.',
      text: 'Standardisierte ERP- und Warenwirtschaftssysteme passen nicht immer zu den gewachsenen Abläufen eines Großhändlers. Wir entwickeln und erweitern Systeme gemeinsam mit den Fachabteilungen und richten sie an den tatsächlichen Arbeitsweisen aus. Dazu gehören unter anderem Sortimentssteuerung, Beschaffungsplanung, Webshop-Anbindung, Versandprozesse, Qualitätssicherung und die Integration weiterer Fachanwendungen. So entsteht keine isolierte Software, sondern ein durchgängiger digitaler Geschäftsprozess.',
      image: createImage('Schnittstellen im Großhandel')
    },
    {
      type: 'text',
      heading: 'Aus der Praxis: Mehr als 50.000 Artikel effizient steuern.',
      text: 'Für eine mittelständische Unternehmensgruppe entwickelten wir ein Warenwirtschaftssystem, mit dem mehr als 50.000 Artikel weiterhin von einem Einkaufsteam aus vier bis fünf Personen betreut werden konnten. Das System erkannte umsatzrelevante Produkte fortlaufend, berücksichtigte Lieferzeiten und unterstützte eine vorausschauende Beschaffung. Dadurch traten akute Deckungslücken nur noch selten auf, überhöhte Bestände wurden reduziert und die Rohmarge verbesserte sich laut internen Auswertungen innerhalb weniger Jahre spürbar.'
    },
    {
      direction: 'left',
      heading: 'Webshop und Warenwirtschaft gemeinsam denken.',
      text: 'Wenn Artikelstammdaten, Preise und Bestände in mehreren Systemen getrennt gepflegt werden, entstehen unnötiger Aufwand und veraltete Informationen. Durch die direkte Anbindung eines Webshops an das produktive Warenwirtschaftssystem lassen sich aktuelle Preis- und Bestandsdaten automatisiert bereitstellen. Das reduziert Pflegeaufwand, verbessert die Datenqualität und sorgt dafür, dass Kunden und interne Teams mit derselben Informationsgrundlage arbeiten.',
      image: createImage('Schnittstellen im Großhandel')
    },
    {
      direction: 'right',
      heading: 'Qualität über den einzelnen Auftrag hinaus sichern.',
      text: 'Bei Produkten mit zulässigen Abweichungen reicht eine rein artikelbezogene Betrachtung oft nicht aus. Entscheidend kann sein, welche konkrete Ausführung ein Kunde bereits erhalten hat und welche Prüfanforderungen für Lieferanten, Produktgruppen oder Wiederholbestellungen gelten. Individuelle Prüfregeln und die Zuordnung bereits gelieferter Varianten helfen dabei, Folgeaufträge verlässlich abzuwickeln und gleichbleibende Produktqualität besser abzusichern.',
      image: createImage('Großhandel')
    },
    {
      direction: 'left',
      heading: 'Systeme verbinden und Abläufe automatisieren.',
      text: 'Großhändler arbeiten häufig mit Warenwirtschaft, Webshop, Dokumentenmanagement, CRM, Telefonie und weiteren Anwendungen gleichzeitig. Wir entwickeln Schnittstellen und Automatisierungen, damit Daten nicht mehrfach gepflegt oder manuell übertragen werden müssen. Ergänzend unterstützen wir bei E-Mail-Sicherheit, Passwort-Management und stabilem IT-Betrieb, damit nicht nur einzelne Anwendungen, sondern die gesamte digitale Prozesskette belastbar bleibt.',
      image: createImage('Schnittstellen im Großhandel')
    },
    {
      direction: 'right',
      heading: 'Schutz vor Betrug in operativen Abläufen.',
      text: 'Gefälschte Lieferantenmails, manipulierte Zahlungsinformationen oder kompromittierte Benutzerkonten treffen im Großhandel direkt die täglichen Abläufe. E-Mail-Sicherheitschecks, Phishing-Simulationen, Passwort-Management und technische Schutzmaßnahmen helfen, diese Risiken zu reduzieren. Dabei betrachten wir Sicherheit nicht losgelöst von der IT, sondern dort, wo Menschen Bestellungen freigeben, Rechnungen prüfen und mit Kunden oder Lieferanten kommunizieren.',
      image: createImage('Sicherheit im Großhandel')
    }
  ]
};
