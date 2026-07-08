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
- 2026-06-30: Verteiler-/Detailseiten mit Artikellisten sollen eine generische `ArticlePage` und ein generisches `PageContent` nutzen; Header-Subheading und Background-Image gehoeren in das Content-Objekt.
- 2026-07-01: Page-Content fuer Detailseiten soll lokal im jeweiligen Routenordner liegen; gemeinsame ArticlePage-Bildhelfer gehoeren zur `src/components/article-page`-Komponente, nicht in Routen- oder Bereichs-`shared.ts` Dateien.
- 2026-07-01: Bildpfad-Konstanten in `content.ts` nur verwenden, wenn derselbe Pfad in der jeweiligen Datei mehrfach genutzt wird; Einmalnutzungen inline setzen.
- 2026-07-01: Topbar-/Navigationsicons sollen dem bestehenden Muster folgen: ein Icon pro `*.tsx` Datei unter `src/_shell/top-bar/icons`, keine Sammeldatei mit vielen Icon-Exports.
- 2026-07-01: Der lokale Skill `$co-it-site-content-import` dokumentiert den Workflow, um Markdown-Navigations-/Content-Dateien in Routen, `ArticlePage`-Content, Top-Navigation, Footer/Content-Switch und passende Icons/Bilder zu ueberfuehren.
- 2026-07-02: Artikelbilder sollen pro Artikel eindeutig sein, nicht mehrfach verwendet werden und deutlich variieren: unterschiedliche Arbeitsumgebungen, Gegenstaende, Taetigkeiten und Emotionen; Branchenbilder sollen konkrete Arbeitsalltag-Szenen der jeweiligen Branche zeigen.
- 2026-07-02: `$co-it-site-content-import` soll bei neuen Importen automatisch passende eindeutige WebP-Artikelbilder generieren/verdrahten, statt neue Inhalte auf Placeholder oder doppelt genutzte Bilddateien fallen zu lassen.
- 2026-07-08: Die Website hat keinen Karrierebereich mehr; `/career/`, Recruitee-Abrufe und alte Jobs-/Karriere-Seiten oder Assets sollen nicht mehr gebaut, verlinkt oder wieder angelegt werden.
