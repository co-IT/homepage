# Project Memory

Persistente, belastbare Erkenntnisse fuer AI-Coding in diesem Repository.

## Arbeitsweise

- Wenn der Nutzer Korrekturen, Praeferenzen oder Entscheidungen nennt, sollen diese hier knapp ergaenzt werden.
- Bei laengeren Aufgaben soll `.agents/scratchpad.md` genutzt werden, um Arbeitsstand und Kontext sichtbar zu halten.
- Bestehende Komponenten und lokale Patterns sind gegenueber neuen Abstraktionen zu bevorzugen.
- Skills sollen in Agent-Anweisungen mit `$skill-name` referenziert werden, damit klar ist, dass ein lokaler Skill gemeint ist.
- Fuer effiziente Kommunikation mit dem Agenten soll der lokale Skill `$caveman` genutzt werden, besonders bei laengeren Coding-Sessions und Status-Updates.
- Branding-Farben und Design-Tokens sollen aus `tailwind.config.js` referenziert werden, statt sie in Agent-Dokumentation zu duplizieren.
- `.agents/scratchpad.md` ist laufender Arbeitskontext und soll per `.gitignore` lokal bleiben.
