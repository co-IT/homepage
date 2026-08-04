# Details

- Bericht von: Mario Lausch
- Datum: 03.08.2026
- Thema: E-Mail-Migration und Integration in die Warenwirtschaft

# Kundenreferenz

## Herausforderung

Im Rahmen der Einführung von Odoo als neuem Warenwirtschaftssystem musste bei einem produzierenden Betrieb auch die bestehende E-Mail-Infrastruktur neu organisiert werden. Zuvor nutzte das Unternehmen bei IONOS ein bis zwei zentrale Postfächer, in denen mehrere Mitarbeitende gemeinsam arbeiteten. Personalisierte Konten gab es nicht.

Aus dem Status einer Nachricht ließ sich nicht zuverlässig erkennen, ob sie bereits vollständig bearbeitet worden war. Eine geöffnete E-Mail konnte beispielsweise einen Auftrag, eine Kundenanfrage oder eine Rückfrage enthalten. Es war jedoch nicht unmittelbar nachvollziehbar, ob der Auftrag bereits im Altsystem angelegt, eine Anfrage beantwortet oder eine Rückfrage an einen anderen Bereich im Betrieb weitergegeben worden war. Ebenso war häufig nicht ersichtlich, wer einen Bearbeitungsschritt übernommen hatte.

Hinzu kam, dass Informationen aus eingehenden Bestellungen manuell in das bisherige Warenwirtschaftssystem übertragen werden mussten. Kundendaten, Aufträge und einzelne Auftragspositionen wurden von Hand erfasst. Dadurch konnten Übertragungs- und Eingabefehler entstehen oder einzelne Positionen übersehen werden. Fehlerhafte Kunden-, Adress- oder Bestelldaten konnten sich anschließend auf die weitere Auftragsbearbeitung und Auslieferung auswirken.

Für die Umstellung musste deshalb nicht nur die vorhandene E-Mail-Kommunikation erhalten bleiben. Benötigt wurde auch eine neue Struktur aus persönlichen und gemeinsam genutzten Postfächern, die sich in die Arbeitsabläufe des Unternehmens und in das neue Warenwirtschaftssystem integrieren ließ.

## Lösung

Die co-IT.eu GmbH bereitete den neuen Microsoft-365-Tenant zunächst unter einer alternativen Domain vor. Gemeinsam mit dem Kunden wurde festgelegt, welche Benutzerkonten künftig benötigt werden, welche geteilten Postfächer eingerichtet werden sollen und welche Mitarbeitenden Zugriff auf die jeweiligen Postfächer erhalten.

Die persönlichen Konten, geteilten Postfächer und Zugriffsrechte wurden unter der alternativen Domain vollständig angelegt und vor der eigentlichen Umstellung getestet. Die Aufteilung orientierte sich an den bestehenden Prozessen und Zuständigkeiten des Kunden.

Am Tag der Umstellung wurden der DNS-Server und die bisherige Domain von IONOS zu einem neuen DNS-Anbieter übertragen. Anschließend wurde die Domain in Microsoft 365 eingerichtet. Den bereits vorbereiteten Benutzerkonten wurden die bisherigen E-Mail-Adressen hinzugefügt. Die vorhandenen Postfachinhalte wurden per IMAP-Import von IONOS nach Microsoft 365 übertragen.

Darüber hinaus konfigurierten wir die E-Mail- und DNS-Infrastruktur nach aktuellem Stand der Technik. Dazu gehörten unter anderem SPF, DKIM, DMARC und DNSSEC. Neben der technischen Absicherung prüften wir auch die Zustellbarkeit der ausgehenden E-Mails. Zustellbarkeitstests zeigten, dass die vorgenommenen Einstellungen die Wahrscheinlichkeit einer erfolgreichen Zustellung an die Kundenpostfächer erhöhten.

Die E-Mail-Kommunikation wurde zugleich in das Warenwirtschaftssystem integriert. Eingehende Nachrichten werden dort automatisch dem vorhandenen Kunden, Auftrag oder Vorgang zugeordnet.

Antworten werden direkt aus dem Warenwirtschaftssystem als reguläre E-Mail an den Kunden versendet. Die Mitarbeitenden müssen dafür Outlook nicht öffnen. Ein- und ausgehende Nachrichten sowie die vorgenommenen Bearbeitungsschritte bleiben in der Historie des jeweiligen Kunden, Auftrags oder Vorgangs dokumentiert.

## Ergebnis

Nach der Umstellung ist nachvollziehbar, welche Vorgänge noch offen sind, wer sie übernommen hat und welche Bearbeitungsschritte bereits erfolgt sind. Die vollständige Historie zeigt, wer an einem Vorgang gearbeitet hat und welchen aktuellen Stand er besitzt.

Die Mitarbeitenden müssen nicht mehr anhand geöffneter Nachrichten oder durch interne Abstimmungen klären, ob eine Anfrage bereits bearbeitet, ein Auftrag erfasst oder eine Rückfrage weitergegeben wurde. Die Kundenkommunikation kann direkt im zugehörigen Vorgang im Warenwirtschaftssystem bearbeitet werden.

Ein wesentlicher Vorteil besteht darin, dass Bestell-, Kunden- und Auftragsdaten nicht mehr manuell aus E-Mails in die Warenwirtschaft übertragen werden müssen. Die zuvor bestehende Fehlerquelle durch Vertippen, übersehene Positionen oder falsch übernommene Angaben entfällt damit. Dadurch werden Fehllieferungen oder Probleme bei der Zustellung vermieden, die auf fehlerhaft übertragene Bestell- oder Adressdaten zurückzuführen wären. Für die Kunden des Unternehmens bedeutet dies eine zuverlässigere Auftragsbearbeitung und eine höhere Zufriedenheit.

Zugleich wird weniger Zeit für die Organisation von Zuständigkeiten und Bearbeitungsständen benötigt. Die Mitarbeitenden können sich stärker auf die eigentliche Bearbeitung der Kundenanfragen und Aufträge konzentrieren.

Die Zustellbarkeitstests bestätigten außerdem eine verbesserte technische Zustellung der ausgehenden E-Mails. Durch die vorgenommenen E-Mail- und DNS-Einstellungen erreichen Nachrichten mit höherer Wahrscheinlichkeit die vorgesehenen Kundenpostfächer.

Die vorbereitete Umstellung der E-Mail-Infrastruktur verlief ohne technische Probleme oder Ausfallzeiten und blieb für den Kunden im Arbeitsalltag nahezu unbemerkt. Die Geschäftsführung bewertete die neue Lösung insgesamt sehr positiv.
