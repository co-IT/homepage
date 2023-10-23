type ProductFeature = {
  text: string;
  detail?: string;
};

export const starterFeatures: ProductFeature[] = [
  {
    text: 'Anzahl E-Mails: 12',
    detail: 'Anzahl der Phishing Simulationen pro Empfänger und Jahr.'
  },{ 
    text: 'Frequenz: 30 Tage',
    detail: 'Pro Monat erhalten Ihre Anwender eine Phishing-Simulation.'
  },{ 
    text: 'Versandzeit: Gleichzeitig',
    detail: 'Alle Phishing Simulationen gehen zur gleichen Zeit an die Empfänger raus.'
  },{
    text: 'Sprachniveau: Mittel',
    detail: 'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausiblität geachtet.'
  },{
    text: 'Absender: Authentisch',
    detail: 'Authentische Absenderadressen sind z.B. Domains wie bundesgerichtshof-karlsruhe.de oder bund-und-laender.online, wohingegen eine Domäne wie why-how-what.info weniger echt wirkt.'
  },{
    text: 'Anrede: Personalisiert',
    detail: 'In den Phishing Simulationen wird der Name des Empfängers in der Anrede verwendet, also z.B. "Sehr geehrter Herr Tim Kater".'
  },{
    text: 'Unternehmensname: Ja',
    detail: 'In den Phishing Simulationen wird Ihr Unternehmen referenziert, z.B. indem in einer Simulation eine Kununu-Bewertung zu Ihrer Firma nachgestellt wird.'
  },{
    text: 'Abteilungsname: Nein',
    detail: 'In den Phishing Simulationen wird die Abteilungs des Empfängers referenziert, z.B. indem eine Datenschutzbefragung im Einkauf simuliert wird.'
  },{
    text: 'Cyber-Verantwortlicher: Nein',
    detail: 'In den Phishing Simulationen wird der Name des Cyber-Verantwortlichen angedruckt, z.B. dass dieser eine Datei mit dem Empfänger teilt.'
  },{
    text: 'Englischsprachige Texte',
    detail: 'Einige Phishing Simulationen werden in englischer Sprache verfasst. Das ist für Unternehmen hilfreich, die regelmäßig mit dem Ausland korrespondieren.'
  },{
    text: 'Zahlungsaufforderungen: Nein',
    detail: 'Speziell bei betrügerischen Zahlungsaufforderungen kann es schnell zu finanziellen Schäden kommen. Mit diesen Angriffen adressieren wir vor allem das Rechnungswesen und den Einkauf.'
  },{
    text: 'Microsoft Produkte: Nein',
    detail: 'Microsoft verschickt regelmäßig Nachrichten zu Produkten wie Teams und Outlook. In diesen Simulationen versenden wir entsprechende Kopien.'
  },{
    text: 'Behörden Updates: Ja',
    detail: 'Arbeitsrecht, Elternzeit, Unfallversicherung: Diese Inhalte interessieren praktisch jeden und haben eine hohe Klickquote.'
  },{
    text: 'Eigene Inhalte: Nein',
    detail: 'Arbeitsrecht, Elternzeit, Unfallversicherung: Diese Inhalte interessieren praktisch jeden und haben eine hohe Klickquote.'
  },{
    text: 'Abstimmung über neue Funktionen: Ja',
    detail: 'Ihre Stimme zählt: Sie können regelmäßig über die Priorisierung von neuen Funktionen mit abstimmen.'
  },{
    text: 'Vorschlagen von Funktionen: Ja',
    detail: 'Teilen Sie uns Ihre Ideen unserem Entwicklungsteam mit.'
  },{
    text: 'E-Mail-Support: Ja',
    detail:'Unsere Reaktionszeit wird an Werktagen innerhalb 48 Stunden in deutscher Sprache gewährleistet.'
  },{
    text: 'telefonischer Support: Nein',
    detail:'Montag - Freitag zw. 9-16 Uhr mit Ausnahme gesetzlicher Feiertage in Baden-Württemberg.'
  },{
    text: 'Zahlweise: monatlich',
    detail:'Auch bei Vertragslaufzeit länger als einen Monat erfolgt die Rechnungslegung monatlich, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den monatlichen Zahlungsterminen für die gesamte Vertragslaufzeit.'
  }
];

export const profiFeatures: ProductFeature[] = [
  {
    text: 'Anzahl E-Mails: 24',
    detail: 'Anzahl der Phising Mails pro Anwender und Jahr'
  },
  {
    text: 'E-Mail-Support',
    detail:
      'Unsere Reaktionszeit wird an Werktagen innerhalb 48 Stunden in deutscher Sprache gewährleistet.'
  },
  {
    text: 'Frequenz: 14 Tage',
    detail:
      'Im Rhytmus von 2 Wochen erhalten Ihre Anwender eine Phishing-Simulation.'
  },
  {
    text: 'Sprachniveau: Hoch',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausibilität geachtet.'
  },
  {
    text: 'Zahlweise: monatlich',
    detail:
      'Auch bei einer längeren Vertragslaufzeit als 1 Monat rechnen wir monatlich ab, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den einzelnen Zahlungsterminen pro Monat für die gesamte Vertragslaufzeit.'
  },
  {
    text: 'Personalisierte Anrede',
    detail:
      'In einem Teil der Phishing-Mails wird auch personalisierte Ansprache verwendet, das heißt die E-Mails enthalten Anrede und Name des Anwenders. Damit werden Ihre Anwender noch besser für besonders gefährliche Phishings sensibilisiert.'
  },
  {
    text: 'Authentische Absenderadressen',
    detail:
      'In einem Teil der Phishing-Mails werden passend zu deren Inhalten glaubwürdige Domains verwendet. Geht es in der Mail zum Beispiel um Urheberrechtsverstöße, so würde als Absender klage@kanzlei-abele.de verwendet werden.'
  },
  {
    text: 'Inhalte: Microsoft',
    detail:
      'In einem Teil der Phising-Mails wird auf Produkte wie Outlook und Teams eingegangen. Besonders wenn Sie Microsoft-Produkte einsetzten, erhalten erfahrungsgemäß diese Phishing-Mails gesteigerte Aufmerksamkeit.'
  }
];

export const expertFeatures: ProductFeature[] = [
  {
    text: 'Anzahl E-Mails: 52',
    detail: 'Anzahl der Phising Mails pro Anwender und Jahr'
  },
  { text: 'E-Mail-Support' },
  {
    text: 'Frequenz: wöchentlich',
    detail:
      'Im Tarif "Experte" kommt pro Woche zu einer zufälligen Zeit die Phising-Mail.'
  },
  {
    text: 'Sprachniveau Hoch',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausibilität geachtet.'
  },
  {
    text: 'Zahlweise: monatlich',
    detail:
      'Auch bei einer längeren Vertragslaufzeit als 1 Monat rechnen wir monatlich ab, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den einzelnen Zahlungsterminen pro Monat für die gesamte Vertragslaufzeit.'
  },
  {
    text: 'Personalisierte Anrede',
    detail:
      'In einem Teil der Phishing-Mails wird auch personalisierte Ansprache verwendet, das heißt die E-Mails enthalten Anrede und Name des Anwenders. Damit werden Ihre Anwender noch besser für besonders gefährliche Phishings sensibilisiert.'
  },
  {
    text: 'Authentische Absenderadressen',
    detail:
      'In einem Teil der Phishing-Mails werden passend zu deren Inhalten glaubwürdige Domains verwendet. Geht es in der Mail zum Beispiel um Urheberrechtsverstöße, so würde als Absender klage@kanzlei-abele.de verwendet werden.'
  },
  {
    text: 'Inhalte: Microsoft',
    detail:
      'In einem Teil der Phising-Mails wird auf Produkte wie Outlook und Teams eingegangen. Besonders wenn Sie Microsoft-Produkte einsetzten, erhalten erfahrungsgemäß diese Phishing-Mails gesteigerte Aufmerksamkeit.'
  },
  {
    text: 'Inhalte: Zahlungsaufforderung',
    detail:
      'In einem Teil der Phishing-Mails wird der Anwender aufgefordert sich mit einer Zahlungsaufforderung auseinanderzusetzen. Zum einen adressieren Sie damit gezielt Ihr Rechnungswesen. Zum anderen erhalten erfahrungsgemäß diese Phising-Mails gesteigerte Aufmerksamkeit.'
  },
  {
    text: 'Anzeigename Cyber-Verantwortlicher',
    detail:
      'In einem Teil der Phishing-Mails wird in der Grußformel der Name des Cyber-Verantwortlichen Ihres Unternehmens genannt. Zudem wird dieser Name als Anzeigename dargestellt. Damit werden Ihre Anwender auch für Phishing-Mails innerhalb Ihres Unternehmens sensibilisiert.'
  },
  {
    text: 'Englischsprachige Texte',
    detail:
      'Zusätzlich zur Standardsprache Deutsch erhalten Ihre Anwender auf Mails in englischer Sprache. Das ist zum Beispiel hilfreich, wenn Sie regelmäßig mit internationalen Kontakten kommunizieren.'
  },
  {
    text: 'Telefonischer Support',
    detail:
      'Unsere Erreichbarkeit ist an Werktagen von 9 - 16 Uhr in deutscher Sprache gewährleistet.'
  },
  {
    text: 'Einfluss auf Weiterentwicklung',
    detail:
      'Nehmen Sie Einfluss auf die weiter Produktentwicklung und stimmen Sie über neue Funktionalitäten ab.'
  },
  { text: 'Unternehmenszertifikat Phising' }
];
