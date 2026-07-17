# Details

- Bericht von: Knut Freyer
- Datum: 17. Juli 2026
- Thema: Modernisierung und Automatisierung einer Warenwirtschaft

# Herausforderung

Ein mittelständisches Unternehmen nutzt ein bestehendes Warenwirtschaftssystem und betreibt zusätzlich einen eigenständigen Webshop. Zwischen beiden Systemen besteht kein automatischer Datenaustausch.

Ein Auftrag aus dem Webshop wurde bislang über einen Tabellenexport bereitgestellt. Ein Mitarbeitender legte den Auftrag anschließend manuell im Warenwirtschaftssystem an und übernahm die verfügbaren Auftragsdaten soweit möglich per Copy-and-paste.

Auch der Versand erforderte mehrere manuelle Schritte und Systemwechsel. Versandbereite Aufträge oder Lieferungen wurden als Datei exportiert und auf der Plattform des Versanddienstleisters importiert. Der Druck der Versandetiketten erfolgte anschließend manuell. Tracking-Informationen mussten ebenfalls manuell übernommen und für den Kunden bereitgestellt werden.

Die Modernisierung wurde zusätzlich durch mehrere fachliche und technische Anforderungen erschwert:

* Bestehende Kunden- und Debitorennummern durften nicht überschrieben werden, damit Zuordnungen und Historien erhalten bleiben.
* Die neue Lösung sollte möglichst ohne dauerhaftes Abo-Modell auskommen.
* Der Kunde und die co-IT.eu GmbH sollten die Kontrolle über das System behalten und Anpassungen sowie eigene Erweiterungen selbst vornehmen können.
* Die Anbindung des Versanddienstleisters sollte direkt in der neuen Warenwirtschaft erfolgen.
* Gleichzeitig musste ein Rückfall auf das bestehende Exportverfahren möglich bleiben.
* Eine spätere Anbindung an die Finanzbuchhaltung musste berücksichtigt werden.
* Die Standardprozesse für Einkauf, Verkauf und Lagerhaltung sollten im Gesamtzusammenhang testbar bleiben.
* Elektronische Rechnungen mussten nicht nur strukturierte, valide Rechnungsdaten enthalten. Auch das zugehörige PDF musste vollständig valide sein.

Gerade die elektronische Rechnung erwies sich als besondere technische Herausforderung. Bei der Prüfung der vorgesehenen Open-Source-Warenwirtschaft zeigte sich, dass das erzeugte PDF zunächst nicht valide war.

# Lösung

Die co-IT.eu GmbH analysierte zunächst die bestehenden Prozesse, die verwendeten Daten und die Besonderheiten der bisherigen Arbeitsweise. Dabei ging es nicht nur um die technische Migration, sondern auch darum, die tatsächlichen Abläufe bei Auftragserfassung, Versand, Lagerhaltung und Rechnungsstellung zu verstehen.

Auf dieser Grundlage wurde ein flexibel anpassbares Open-Source-Warenwirtschaftssystem als Zielplattform ausgewählt. Ausschlaggebend waren insbesondere die Möglichkeit, ohne ein dauerhaftes Abo-Modell zu arbeiten, eigene Erweiterungen zu integrieren und notwendige Anpassungen selbst vorzunehmen.

Für die Datenmigration wurden Exporte aus dem bisherigen Warenwirtschaftssystem und dem Webshop analysiert, aufbereitet und im Zielsystem getestet. Folgende Daten lassen sich bereits reproduzierbar importieren:

* Artikel
* Kunden
* Bestände
* Kategorien
* Artikelfilter

Für die Verwaltung von Kunden- und Debitorennummern entwickelte die co-IT.eu GmbH eine eigene Erweiterung. Sie verwaltet Kundennummern direkt an den Kontakten, bietet einen konfigurierbaren Nummernkreis und ermittelt sowohl die nächste freie als auch die nächste fortlaufende Nummer.

Kundennummern können für Hauptkontakte auch manuell vergeben werden. Die Erweiterung erkennt außerdem potenzielle Dubletten anhand der Umsatzsteuer-Identifikationsnummer oder der E-Mail-Adresse. Bei einem möglichen Treffer werden eine interne Notiz und eine Aufgabe für den Administrator erzeugt.

Auch für die Anbindung des Versanddienstleisters entwickelte die co-IT.eu GmbH eine eigene Erweiterung. Die Autorisierung gegenüber dem Versanddienstleister sowie die Erstellung eines Versandetiketts wurden bereits erfolgreich geprüft.

Der künftige Versandprozess soll ohne Wechsel auf eine externe Versandplattform direkt aus dem Warenwirtschaftssystem heraus erfolgen. Gleichzeitig wird berücksichtigt, dass bei Bedarf weiterhin auf das bestehende Exportverfahren zurückgegriffen werden kann.

Für die elektronische Rechnungsstellung wurde die Ausgabe mit spezialisierten Prüfwerkzeugen validiert. Dabei zeigte sich, dass nicht nur die strukturierten Rechnungsdaten, sondern auch die PDF-Datei den formalen Anforderungen entsprechen muss.

Zur Behebung des PDF-Problems erweiterte die co-IT.eu GmbH die Systemumgebung um zusätzliche Schriftarten, eine zentrale Schriftverwaltung und Werkzeuge zur Verarbeitung von Schriftdateien. Nach dieser Anpassung wurden die strukturierten Rechnungsdaten und das PDF erneut mit spezialisierten Prüfwerkzeugen validiert.

Für Analysen, Dokumentation und Code-Erstellung setzt die co-IT.eu GmbH im Projekt KI ein.

# Ergebnis

Die technische Grundlage für die weitere Migration ist geschaffen.

Die elektronischen Rechnungen aus dem angepassten Warenwirtschaftssystem sind nach der Prüfung der strukturierten Rechnungsdaten und des PDF-Dokuments valide.

Die Datenimporte für Artikel, Kunden, Bestände, Kategorien und Filter funktionieren reproduzierbar.

Die entwickelte Versandanbindung konnte sich erfolgreich beim Versanddienstleister autorisieren und ein Versandetikett erzeugen.

Die Erweiterung für Kunden- und Debitorennummern ermöglicht deren kontrollierte Vergabe und Verwaltung, ohne bestehende Zuordnungen unkontrolliert zu überschreiben. Zusätzlich unterstützt sie die Erkennung potenzieller Dubletten.

Der vollständige Gesamtprozess wurde vom Kunden noch nicht getestet. Ein vollständig im Zielsystem geprüfter Ablauf liegt - abgesehen von der validierten elektronischen Rechnung und den technischen Einzelprüfungen - noch nicht vor.

Noch nicht begonnen wurde die Anbindung an die Finanzbuchhaltung. Die konkrete Schnittstelle muss zunächst mit der Steuerberatung geklärt werden.

Der angestrebte praktische Nutzen für den Kunden liegt in der Modernisierung und Automatisierung der bisherigen Abläufe. Insbesondere sollen manuelle Datenübernahmen, Copy-and-paste-Schritte und Systemwechsel beim Versand reduziert werden. Ob diese Verbesserungen im vollständigen Arbeitsalltag wie vorgesehen funktionieren, muss noch im Rahmen der Kundentests für Einkauf, Verkauf und Lagerhaltung geprüft werden.
