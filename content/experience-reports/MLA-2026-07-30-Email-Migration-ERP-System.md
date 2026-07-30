# Details

- Bericht von: Mario Lausch
- Datum: 30.07.2026
- Thema: E-Mail Migration und Anbindung an modernes ERP System

# Kundenreferenz

## Herausforderung

Im Zuge der Einführung eines neuen ERP-Systems sollte auch die bestehende E-Mail-Infrastruktur des Kunden modernisiert werden. Bis dahin wurden die E-Mail-Postfächer über IONOS betrieben; ein Microsoft-365-Tenant war noch nicht vorhanden.

Die Umstellung war eng mit dem zukünftigen Einsatz des ERP-Systems verbunden. Dieses verfügt über Schnittstellen zu Microsoft 365 beziehungsweise Exchange Online und soll E-Mails an Kunden und Lieferanten versenden sowie eingehende Nachrichten für den Kundensupport und die Bestellabwicklung verarbeiten.

Ein wesentlicher Teil der Bestellungen geht weiterhin per E-Mail ein. Dies betrifft insbesondere B2B-Kunden, die nicht über den Online-Shop bestellen. Deshalb mussten die bisherigen E-Mail-Adressen und sämtliche vorhandenen Nachrichten nach der Migration weiterhin verfügbar sein. Für die Benutzer sollte der Wechsel ohne wahrnehmbare Probleme erfolgen.

Auch die Organisation der Postfächer sollte überarbeitet werden. Mehrere Mitarbeitende arbeiteten zuvor gemeinsam in einem oder zwei zentralen Postfächern. Dadurch war nicht immer eindeutig erkennbar, wer eine Nachricht bereits bearbeitet hatte oder dafür zuständig war. Zudem fehlten persönliche E-Mail-Adressen, die für individuelle Benutzerkonten und benutzerspezifische Berechtigungen in anderen Systemen benötigt werden.

## Lösung

Die co-IT.eu GmbH bereitete den neuen Microsoft-365-Tenant vor dem Migrationstermin vollständig vor. Wir legten sämtliche Benutzerkonten sowie die vorgesehenen persönlichen und geteilten Postfächer zunächst unter einer vorläufigen Domain an. Dadurch konnten die grundlegende Konfiguration bereits vor der eigentlichen Domainumstellung geprüft werden.

Anschließend importierten wir die vorhandenen E-Mails in die vorbereiteten Postfächer. Am Umstellungstag übertrugen wir die Domains von IONOS zu INWX und banden sie anschließend in den Microsoft-365-Tenant ein.

Bereits während der Vorbereitung testeten wir die eingerichteten Konten und Postfächer unter der vorläufigen Domain. Nach der Migration prüften wir erneut sämtliche Postfächer und Weiterleitungen sowie den Versand und Empfang von E-Mails. Zusätzlich analysierten wir die SMTP-Protokolle, um die korrekte Verarbeitung der Nachrichten zu kontrollieren.

Parallel dazu entwickelte die co-IT.eu GmbH gemeinsam mit dem Kunden eine neue Postfachstruktur. Jeder Benutzer erhielt ein persönliches Postfach. Für gemeinsam bearbeitete Aufgaben, darunter Kundenanfragen und per E-Mail eingehende Bestellungen, wurden geteilte Postfächer eingerichtet, auf die jeweils die zuständigen Personen zugreifen können.

Die E-Mail-Sicherheit wurde ebenfalls neu konfiguriert. Umgesetzt wurden SPF, DKIM, DMARC, DNSSEC und MTA-STS. DMARC-Berichte und TLS-Berichte auf Basis von TLSRPT werden zentral gesammelt und analysiert.

Ergänzend wurden Funktionen zum Schutz vor Spam und Phishing, zur Sicherung der Microsoft-365-Konten und Postfächer sowie zur revisionssicheren Archivierung der E-Mails eingerichtet. Die co-IT.eu GmbH beriet den Kunden außerdem bei der Auswahl zusätzlicher, langfristig nutzbarer Domains, darunter Domains mit der Endung „.gmbh“.

## Ergebnis

Die Umstellung auf Microsoft 365 und Exchange Online erfolgte nahtlos. Versand und Empfang über die bisherigen E-Mail-Adressen funktionierten nach der Migration weiterhin, und die vorhandenen E-Mails standen in den neuen Postfächern vollständig zur Verfügung. Bei den Prüfungen nach der Umstellung wurden keine konkreten Fehler festgestellt.

Der Kunde arbeitet inzwischen mit persönlichen und geteilten Postfächern. Gemeinsam bearbeitete Nachrichten, darunter Kundenanfragen und Bestellungen per E-Mail, können damit klarer zugeordnet werden. Gleichzeitig verfügt jeder Benutzer über eine eigene E-Mail-Adresse.

Diese persönlichen Adressen bilden außerdem die Grundlage für individuelle Konten in weiteren Anwendungen, beispielsweise in einem Passwortmanager oder in Systemen, in denen Rechte benutzerspezifisch vergeben werden.

Für die Anwender änderte sich die technische Grundlage der E-Mail-Kommunikation, ohne dass während der Migration Ausfälle oder andere Probleme auftraten. Die Postfächer werden nun über Microsoft 365 beziehungsweise Exchange Online betrieben.
