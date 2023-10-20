type ProductFeature = {
  text: string;
  detail?: string;
};

export const starterFeatures: ProductFeature[] = [
  {
    text: 'Anzahl E-Mails: 12',
    detail: 'Anzahl der Phising Mails pro Anwender und Jahr'
  },
  {
    text: 'E-Mail-Support',
    detail:
      'Unsere Reaktionszeit wird an Werktagen innerhalb 48 Stunden in deutscher Sprache gewährleistet.'
  },
  { text: 'Frequenz: 1 pro Monat' },
  {
    text: 'Sprachniveau: Mittel',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausiblität geachtet.'
  },
  {
    text: 'Zahlweise: monatlich',
    detail:
      'Auch bei einer längeren Vertragslaufzeit als 1 Monat rechnen wir monatlich ab, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den einzelnen Zahlungsterminen pro Monat für die gesamte Vertragslaufzeit.'
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
    text: 'Frequenz: je Monat',
    detail:
      'Im Tarif "Profi" werden die zwei monatlichen E-Mails an aufeinanderfolgneden Tagen versendet.'
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
