# Details

- Bericht von: Uli Armbruster
- Datum: 17. Juli 2026
- Thema: E-Mail-Sicherheit

# Herausforderung

Ein Maschinenbauunternehmen aus Bayern mit 70 Mitarbeitenden stellte fest, dass Empfänger E-Mails erhielten, deren Absenderadresse wie eine legitime Adresse des Unternehmens aussah. Die Domain wurde damit für Identitätsmissbrauch genutzt.

Zu Beginn waren keine der empfohlenen zusätzlichen Schutzmechanismen eingerichtet. Die Absicherung musste daher vollständig neu aufgebaut werden. Gleichzeitig war die bestehende Systemlandschaft zu berücksichtigen: Für den E-Mail-Versand wurde SendGrid eingesetzt, während Hornetsecurity als SaaS-Lösung in die E-Mail-Infrastruktur eingebunden war. Dadurch waren einzelne Konfigurationen erschwert oder nicht vollständig umsetzbar. Insbesondere konnte DANE aufgrund der Einbindung von Hornetsecurity nicht genutzt werden. 

Neben der technischen Umsetzung war entscheidend, die Funktionsweise und die Auswirkungen der einzelnen Sicherheitsmechanismen für einen nicht technisch versierten Kunden verständlich aufzubereiten.

# Lösung

Die co-IT.eu GmbH erklärte dem Kunden die relevanten Sicherheitsmechanismen anhand einer eingängigen Metapher in einfacher Sprache. Auf dieser Grundlage konnte der Kunde die vorgeschlagenen Maßnahmen nachvollziehen und stimmte sämtlichen Empfehlungen zu.

Die Umsetzung erfolgte schrittweise. Zunächst wurde DMARC im Testmodus eingerichtet und SPF aktiviert, jedoch noch nicht vollständig durchgesetzt. Anschließend sammelten und analysierten wir die eingehenden Berichte. Dabei zeigte sich, dass aus Südamerika E-Mails im Namen des Kunden versendet wurden.

Im nächsten Schritt aktivierten wir DKIM. Dies ließ sich auch in Verbindung mit SendGrid umsetzen. Danach wurde die DMARC-Richtlinie auf `Reject` gesetzt. Empfangende E-Mail-Systeme wurden damit angewiesen, Nachrichten abzulehnen, wenn diese nicht von legitimierten Absendern oder Zustellsystemen im Namen des Kunden versendet wurden.

Anschließend führten wir MTA-STS und TLS-RPT zunächst testweise ein. Da sich dabei keine Probleme zeigten, konnten die Einstellungen kurzfristig vollständig scharf schalten. Dies ist eine starke Alternative zu DANE, die zudem noch besser verbreitet und unterstützt ist.

Abschließend wurde DNSSEC für die primäre Domain eingerichtet. Eine vollständige Absicherung der gesamten DNS-Kette war jedoch nicht möglich, da der MX-Record auf eine Domain von Hornetsecurity verweist, für die kein DNSSEC aktiviert ist. Dieser Teil lag außerhalb des Einflussbereichs des Kunden und der co-IT.eu GmbH.

# Ergebnis

Innerhalb von drei Wochen und mit einem Aufwand von insgesamt acht Arbeitsstunden konnten mehr als 90 Prozent der von der co-IT.eu GmbH empfohlenen Sicherheitseinstellungen umgesetzt werden.

Die DMARC-Berichte, unter anderem von Microsoft und Google, bestätigten die Wirksamkeit der neuen Richtlinien. Der zuvor festgestellte Missbrauch der Domain ging mit zeitlicher Verzögerung zurück.

Nach Rückmeldung des Kunden verbesserte sich zugleich die Zustellbarkeit seiner E-Mails deutlich. Wichtige Nachrichten landeten seltener im Spam-Ordner und wurden seltener vollständig blockiert.

Der Kunde erhielt damit sowohl einen wirksameren Schutz vor Identitätsmissbrauch als auch eine transparentere Grundlage zur Überwachung der Nutzung seiner Domain.