# AI Coding Guidelines

Diese Datei beschreibt, wie AI-Coding-Agenten in diesem Repository arbeiten sollen.

## Projektkontext

- Dieses Repository ist die offizielle Homepage der co-IT.eu GmbH.
- co-IT.eu GmbH ist ein IT-Dienstleister mit Fokus auf ganzheitliche IT-Loesungen, Softwareentwicklung, IT-Service-Management und Beratung.
- Die Website wird mit Qwik und Qwik City gebaut.
- Rendering/Entwicklung laeuft im SSR-Modus.
- Hosting erfolgt ueber GitHub-basierte Pipelines, Azure Storage Account und CDN.
- Styling basiert auf Tailwind CSS.
- Texte liegen teils in Markdown unter `public/markdown`, primaer aber in TypeScript-/TSX-Strukturen, Props und Content-Objekten.
- Es gibt ein bestehendes Corporate Design und fertige Komponenten. Neue Arbeit soll diese Muster verwenden, statt neue parallele Systeme zu erfinden.

## Immer zuerst lesen

Zu Beginn jeder Coding-Session:

1. Lies diese Datei.
2. Lies `.agents/memory.md`, falls vorhanden.
3. Nutze `.agents/scratchpad.md` bei laengeren Aufgaben, um Arbeitsstand, Entscheidungen und offene Punkte nachvollziehbar festzuhalten.
4. Pruefe vorhandene Komponenten, Routen und Content-Muster, bevor du neue Strukturen anlegst.

## Lokale Skills

Skills sind ausfuehrbare bzw. vom Agent-System interpretierbare Arbeitsanweisungen, keine blosse Dokumentation.

- Wenn diese Datei einen Skill mit `$skill-name` nennt, soll der Agent den gleichnamigen lokalen Skill laden und anwenden.
- Nutze `$frontend-design` bei groesseren UI-Aenderungen, neuen Seiten, Hero-Bereichen, Layout-Redesigns oder wenn visuelle Richtung, Typografie, Farbwirkung und Copy zusammenspielen.
- Nutze `$web-design-guidelines` bei UI-/Accessibility-Reviews, UX-Audits oder wenn die Oberflaeche gegen Web-Interface-Regeln geprueft werden soll.
- Nutze `$caveman` fuer effiziente Kommunikation mit dem Agenten, besonders bei laengeren Coding-Sessions, Status-Updates und technischen Rueckfragen. Technische Genauigkeit bleibt wichtiger als maximale Kuerze.

## Memory-Regel

`.agents/memory.md` ist die persistente Projekt-Memory.

- Wenn der Nutzer korrigiert, eine Praeferenz nennt oder eine Architektur-/Designentscheidung bestaetigt, aktualisiere `.agents/memory.md`.
- Speichere nur belastbare Erkenntnisse, keine Vermutungen und kein fluessiges Reasoning.
- Halte Eintraege kurz, konkret und datiert, wenn der Zeitpunkt relevant ist.
- Nutze die Memory aktiv bei spaeteren Entscheidungen.

## Scratchpad-Regel

`.agents/scratchpad.md` ist fuer laengere Sessions und groessere Aenderungen.

- Das Scratchpad ist laufender Arbeitskontext und darf per `.gitignore` lokal bleiben.
- Nutze es, wenn eine Aufgabe mehrere Schritte, Recherche, Refactoring oder UI-Iteration umfasst.
- Dokumentiere Ziel, Plan, relevante Dateien, Zwischenentscheidungen, offene Fragen und Verifikation.
- Halte es lesbar und projektbezogen.
- Schreibe dort keine Secrets, Tokens, Zugangsdaten oder privaten Gedankengaenge hinein.
- Raeume veraltete Notizen auf, wenn sie den aktuellen Arbeitsstand eher verschleiern.

## Technologie und Befehle

Paketmanager: `pnpm`

Wichtige Befehle:

- Entwicklung: `pnpm start`
- Alternative Dev-Server-Variante: `pnpm dev`
- Static Site Build: `pnpm build.server`
- Voller Build: `pnpm build`
- Typecheck: `pnpm build.types`
- Lint: `pnpm lint`
- Format-Check: `pnpm format.check`
- Formatieren: `pnpm format`

Vor Abschluss einer Code-Aenderung, soweit passend:

1. `pnpm build.types`
2. `pnpm lint`
3. `pnpm format.check`
4. Bei UI-/Routing-Aenderungen zusaetzlich lokal starten und visuell pruefen.

## Code-Stil

- Folge den bestehenden Qwik-/Qwik-City-Patterns.
- Verwende `component$`, `Slot`, Qwik City `Link`, `DocumentHead` und bestehende Importpfade nach lokalem Muster.
- Bevorzuge bestehende Komponenten aus `src/components`.
- Lege wiederverwendbare UI in `src/components/<name>` mit `index.ts` an, wenn das bestehende Muster dazu passt.
- Routen und Seiteninhalte gehoeren unter `src/routes`.
- Assets gehoeren bevorzugt in vorhandene Medien-/Public-Strukturen.
- Vermeide unnoetige Abstraktionen und grosse Refactorings nebenbei.
- Halte Aenderungen eng an der Nutzeraufgabe.

## Design und UI

Branding-Farben und Design-Tokens werden aus `tailwind.config.js` referenziert und nicht in dieser Datei dupliziert.

UI-Regeln:

- Nutze Tailwind-Klassen und die bestehenden Design-Tokens.
- Nutze vorhandene Layout-Komponenten wie `Section`, Header-Varianten, Heading-Segments und Call-to-Action-Komponenten.
- Bewahre den bestehenden Markencharakter: klar, professionell, loesungsorientiert, nicht generisch.
- Texte fuer Kunden sollen auf Deutsch formuliert sein, sofern der bestehende Kontext nicht klar Englisch verlangt.
- Achte auf responsive Layouts, Fokuszustaende, semantische HTML-Struktur und sinnvolle Alt-Texte.
- Bei groesseren UI-Aenderungen den lokalen Skill `$frontend-design` verwenden.
- Bei UI-/Accessibility-Reviews den lokalen Skill `$web-design-guidelines` verwenden.

## Content-Regeln

- Pruefe zuerst, ob Content bereits als TypeScript-Objekt, Props-Struktur oder Markdown-Datei organisiert ist.
- Halte Sprache konsistent mit der bestehenden Website: formell, direkt, kundennah.
- SEO-Metadaten in `DocumentHead` aktualisieren, wenn Seiteninhalt oder Suchintention wesentlich geaendert wird.

## Deployment-Kontext

- Die Seite wird ueber GitHub-Pipelines gebaut und ueber Azure Storage Account plus CDN ausgeliefert.
- Aendere Pipeline-, Adapter-, Build- oder Hosting-Konfiguration nur, wenn die Aufgabe es verlangt.
- Bei Aenderungen an Build-/Deployment-Dateien besonders gruendlich testen und die Auswirkungen in der Antwort nennen.

## Zusammenarbeit

- Frage nach, wenn fuer eine produktive Entscheidung echte Projektinformationen fehlen.
- Triff kleine, reversible Entscheidungen selbst und dokumentiere sie kurz.
- Melde relevante Annahmen transparent.
- Keine fremden uncommitted Aenderungen zuruecksetzen.
- Keine Secrets ins Repository schreiben.
