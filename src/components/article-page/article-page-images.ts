import type { Article } from '~/components/article-section/model';
import type { PageContent } from './model';

const placeholderImage = '/img/common/placeholder.svg';
const articleImagePath = '/img/article-pages/';

interface ArticlePageImageAsset {
  src: string;
  alt: string;
}

const createArticleImageAsset = (fileName: string, alt: string): ArticlePageImageAsset => ({
  src: `${articleImagePath}${fileName}`,
  alt
});

const articleImageAssets: Partial<Record<string, ArticlePageImageAsset>> = {
  Arbeitsweise: createArticleImageAsset(
    'team-solution-planning.webp',
    'Team plant gemeinsam eine IT-Lösung an einem Besprechungstisch.'
  ),
  'Auswertung von Phishing-Simulationen': createArticleImageAsset(
    'phishing-learning-moment.webp',
    'Mitarbeiterin bespricht eine Phishing-Simulation mit einem IT-Berater am Arbeitsplatz.'
  ),
  'Awareness und Phishing-Simulationen': createArticleImageAsset(
    'awareness-poster-workshop.webp',
    'Mitarbeitende bewerten Sicherheitsrisiken in einem Awareness-Workshop an einer Pinnwand.'
  ),
  Behörden: createArticleImageAsset(
    'public-office-digital-form.webp',
    'Verwaltungsmitarbeiterin digitalisiert ein Formular gemeinsam mit einem IT-Berater.'
  ),
  'Betreibbare Technologien': createArticleImageAsset(
    'server-room-maintenance.webp',
    'IT-Spezialist prüft Systeme in einem kompakten Serverraum mit einem Kunden.'
  ),
  'Cloud-Prozesse für Dienstleister': createArticleImageAsset(
    'service-company-cloud-workflow.webp',
    'Dienstleistungsteam plant Cloud-Prozesse mit einem IT-Berater im Büro.'
  ),
  Branchen: createArticleImageAsset(
    'technology-stack-review.webp',
    'Team bewertet technische Abläufe und Systemarchitektur an einem Bildschirm.'
  ),
  'Cyber-Awareness-Portal': createArticleImageAsset(
    'awareness-results-review.webp',
    'Verantwortliche prüfen Lernfortschritte eines Cyber-Awareness-Portals mit einem IT-Berater.'
  ),
  'Cyber-Sicherheit': createArticleImageAsset(
    'awareness-poster-workshop.webp',
    'Mitarbeitende ordnen Sicherheitsrisiken in einem praxisnahen Workshop ein.'
  ),
  Dienstleister: createArticleImageAsset(
    'service-company-cloud-workflow.webp',
    'Dienstleistungsteam bespricht digitale Zusammenarbeit und Cloud-Prozesse.'
  ),
  'Digital- und KI-Strategie': createArticleImageAsset(
    'ai-strategy-workshop.webp',
    'Berater moderiert einen Workshop zu KI-Einsatzbereichen im Mittelstand.'
  ),
  'Digitale Prozesse für Lohnfertiger': createArticleImageAsset(
    'production-quality-tablet.webp',
    'Produktionsteam prüft Qualitätsdaten auf einem Tablet neben Metallbauteilen.'
  ),
  'Digitale Versicherungsprozesse': createArticleImageAsset(
    'insurance-folder-workflow.webp',
    'Versicherungsmitarbeiterin bespricht einen digitalen Aktenprozess mit einem IT-Berater.'
  ),
  'Digitalisierung für Behörden': createArticleImageAsset(
    'public-office-digital-form.webp',
    'Verwaltungsmitarbeiterin und IT-Berater prüfen einen digitalen Formularprozess.'
  ),
  'Digitalisierung im Energiesektor': createArticleImageAsset(
    'energy-radio-check.webp',
    'Techniker und IT-Berater prüfen Kommunikationstechnik in einer Betriebsumgebung.'
  ),
  'Digitalisierung im Handwerk': createArticleImageAsset(
    'craft-tablet-schedule.webp',
    'Handwerker und IT-Berater prüfen einen digitalen Einsatzplan auf einem Tablet.'
  ),
  'Dokumentierbare IT-Sicherheit für Behörden': createArticleImageAsset(
    'project-scope-cards.webp',
    'Team ordnet Verantwortlichkeiten und Sicherheitsmaßnahmen mit Karten auf einem Tisch.'
  ),
  'E-Mail-Sicherheit': createArticleImageAsset(
    'email-security-review.webp',
    'IT-Spezialist erklärt einer Mitarbeiterin sichere E-Mail-Einstellungen am Laptop.'
  ),
  'Einführung von Passwort-Management': createArticleImageAsset(
    'password-manager-2fa.webp',
    'IT-Berater unterstützt Mitarbeitende bei Zwei-Faktor-Authentifizierung am Smartphone.'
  ),
  Energiesektor: createArticleImageAsset(
    'energy-radio-check.webp',
    'Techniker mit Funkgerät bespricht stabile IT-Prozesse im Energiesektor.'
  ),
  Gesundheitswesen: createArticleImageAsset(
    'healthcare-reception-it.webp',
    'Medizinische Fachangestellte prüft Praxis-IT mit einem IT-Berater am Empfang.'
  ),
  Großhandel: createArticleImageAsset(
    'wholesale-scanner-process.webp',
    'Mitarbeiter im Großhandel scannt Ware neben einem IT-Berater mit Tablet.'
  ),
  'Handlungsempfehlungen aus Sicherheitschecks': createArticleImageAsset(
    'security-report-review.webp',
    'IT-Berater bespricht Ergebnisse eines Sicherheitschecks mit einem Kunden.'
  ),
  Handwerk: createArticleImageAsset(
    'craft-tablet-schedule.webp',
    'Handwerker und IT-Berater besprechen digitale Planung am Werkstatttisch.'
  ),
  'IT-Betreuung im Gesundheitswesen': createArticleImageAsset(
    'healthcare-reception-it.webp',
    'IT-Berater unterstützt eine medizinische Fachangestellte bei Praxissoftware.'
  ),
  'IT-Leistungen': createArticleImageAsset(
    'network-switch-service.webp',
    'IT-Techniker prüft Netzwerkkabel in einem kleinen Firmennetzwerk.'
  ),
  'IT-Service im Ortenaukreis': createArticleImageAsset(
    'regional-client-entrance.webp',
    'IT-Berater begrüßt eine Kundin am Eingang eines regionalen Unternehmens.'
  ),
  'IT-Sicherheit im Gesundheitswesen': createArticleImageAsset(
    'healthcare-reception-it.webp',
    'Praxispersonal und IT-Berater prüfen sichere digitale Abläufe am Empfang.'
  ),
  'KI-Einsatzbereiche im Mittelstand': createArticleImageAsset(
    'ai-document-automation.webp',
    'Mitarbeiterin testet Dokumentenautomatisierung mit einem IT-Berater am Scanner.'
  ),
  'KI-Roadmap und Compliance': createArticleImageAsset(
    'ai-strategy-workshop.webp',
    'Team diskutiert eine KI-Roadmap in einem strukturierten Workshop.'
  ),
  'Klare Einsatzgebiete': createArticleImageAsset(
    'project-scope-cards.webp',
    'Projektteam klärt Zuständigkeiten mit Karten und Zeitplan auf einem Tisch.'
  ),
  'Kontrolle über Zugangsdaten': createArticleImageAsset(
    'password-manager-2fa.webp',
    'Mitarbeitende prüfen sichere Zugänge mit Smartphone und Laptop.'
  ),
  'Legacy-Modernisierung': createArticleImageAsset(
    'legacy-archive-modernization.webp',
    'Mitarbeiterin hält einen alten Ordner, während ein Entwickler einen modernen Prozess zeigt.'
  ),
  'Lernen und Auswerten im Cyber-Awareness-Portal': createArticleImageAsset(
    'awareness-results-review.webp',
    'Verantwortliche werten Awareness-Fortschritte auf einem Laptop aus.'
  ),
  Lohnfertiger: createArticleImageAsset(
    'production-quality-tablet.webp',
    'Produktionsteam prüft digitale Fertigungsdaten neben Maschinenbauteilen.'
  ),
  'Managed Services': createArticleImageAsset(
    'server-room-maintenance.webp',
    'IT-Spezialist kontrolliert Systeme in einem Serverraum mit einer Kundin.'
  ),
  'Microsoft 365 und Azure': createArticleImageAsset(
    'microsoft-cloud-migration.webp',
    'Berater erklärt eine Cloud-Migration an einem großen Bildschirm.'
  ),
  'Microsoft-365-Betrieb': createArticleImageAsset(
    'managed-services-dashboard.webp',
    'IT-Berater und Kunde prüfen Betriebsdaten auf Monitoren.'
  ),
  'Microsoft-365-Migration': createArticleImageAsset(
    'microsoft-cloud-migration.webp',
    'Team bespricht eine Migration zu cloudbasierter Zusammenarbeit.'
  ),
  'Mittelstand verstehen': createArticleImageAsset(
    'mittelstand-it-consulting.webp',
    'IT-Berater bespricht pragmatische nächste Schritte mit einem mittelständischen Unternehmen.'
  ),
  'Nachweise im Cyber-Awareness-Portal': createArticleImageAsset(
    'awareness-results-review.webp',
    'Berater und Verantwortliche prüfen Nachweise aus einem Awareness-Portal.'
  ),
  'Phishing-Simulationen': createArticleImageAsset(
    'phishing-learning-moment.webp',
    'Mitarbeiterin erlebt eine Phishing-Simulation als konstruktiven Lernmoment.'
  ),
  'Produkte & Lösungen': createArticleImageAsset(
    'password-manager-2fa.webp',
    'Mitarbeitende richten sichere digitale Zugänge mit Smartphone und Laptop ein.'
  ),
  'Prüfumfang von Sicherheitschecks': createArticleImageAsset(
    'website-security-checklist.webp',
    'Berater prüft eine Sicherheitscheckliste vor einem Laptop.'
  ),
  'Realistische Phishing-Szenarien': createArticleImageAsset(
    'phishing-learning-moment.webp',
    'Mitarbeiterin reagiert auf eine realistische Phishing-Übung am Arbeitsplatz.'
  ),
  'Region und Einsatzgebiet': createArticleImageAsset(
    'regional-client-entrance.webp',
    'IT-Berater trifft eine Kundin am Eingang eines regionalen Unternehmens.'
  ),
  'regionale IT-Betreuung': createArticleImageAsset(
    'onsite-workstation-support.webp',
    'IT-Techniker unterstützt eine Mitarbeiterin direkt an ihrem Arbeitsplatz.'
  ),
  'regionalen IT-Service': createArticleImageAsset(
    'network-switch-service.webp',
    'IT-Techniker prüft Netzwerktechnik bei einem regionalen Kunden vor Ort.'
  ),
  'Remote-Leistungen': createArticleImageAsset(
    'remote-support-home-office.webp',
    'IT-Berater leistet Remote-Support aus einem ruhigen Homeoffice.'
  ),
  'Schnittstellen im Großhandel': createArticleImageAsset(
    'wholesale-scanner-process.webp',
    'Großhandelsmitarbeiter scannt Ware während digitale Abläufe geprüft werden.'
  ),
  'Sichere Kommunikation im Energiesektor': createArticleImageAsset(
    'energy-radio-check.webp',
    'Techniker prüft Kommunikationsgeräte mit einem IT-Berater im Energiesektor.'
  ),
  'Sicherheit für Produktionsdaten': createArticleImageAsset(
    'production-quality-tablet.webp',
    'Produktionsteam schützt Fertigungsdaten bei der Arbeit mit Tablet und Messwerkzeug.'
  ),
  'Sicherheit für Versicherungen': createArticleImageAsset(
    'insurance-folder-workflow.webp',
    'Versicherungsmitarbeiterin und IT-Berater prüfen vertrauliche Aktenprozesse.'
  ),
  'Sicherheit im Großhandel': createArticleImageAsset(
    'wholesale-scanner-process.webp',
    'Team im Lager prüft sichere digitale Abläufe mit Scanner und Tablet.'
  ),
  Sicherheitschecks: createArticleImageAsset(
    'security-report-review.webp',
    'IT-Berater erklärt Befunde eines Sicherheitschecks an einem Laptop.'
  ),
  'Skalierbare IT für Dienstleister': createArticleImageAsset(
    'service-company-cloud-workflow.webp',
    'Dienstleistungsteam plant skalierbare digitale Zusammenarbeit mit einem IT-Berater.'
  ),
  Softwaretechnologien: createArticleImageAsset(
    'technology-stack-review.webp',
    'Team bewertet Technologieoptionen an einem Architekturdiagramm.'
  ),
  'stabilen IT-Betrieb': createArticleImageAsset(
    'server-room-maintenance.webp',
    'IT-Spezialist kontrolliert stabile Systeme in einem Serverraum.'
  ),
  'Technisch präzise arbeiten': createArticleImageAsset(
    'network-switch-service.webp',
    'IT-Techniker dokumentiert Netzwerkkabel bei einem Vor-Ort-Termin.'
  ),
  'Technologien und Partner': createArticleImageAsset(
    'technology-stack-review.webp',
    'Berater und Kunde prüfen eine technische Systemarchitektur gemeinsam.'
  ),
  Technologiepartner: createArticleImageAsset(
    'technology-stack-review.webp',
    'Team vergleicht Technologieoptionen an einem großen Bildschirm.'
  ),
  Unternehmen: createArticleImageAsset(
    'team-solution-planning.webp',
    'co-IT-Team plant gemeinsam eine kundenspezifische IT-Lösung.'
  ),
  'Über uns': createArticleImageAsset(
    'team-solution-planning.webp',
    'Team arbeitet gemeinsam an einer technischen Lösung in einem modernen Büro.'
  ),
  'Verantwortung in IT-Projekten': createArticleImageAsset(
    'project-responsibility-review.webp',
    'IT-Berater und Kundenteam klären Verantwortlichkeiten in einem Projekt.'
  ),
  Versicherungen: createArticleImageAsset(
    'insurance-folder-workflow.webp',
    'Versicherungsmitarbeiterin bespricht einen sicheren Aktenprozess mit einem IT-Berater.'
  ),
  'Vor-Ort-Leistungen': createArticleImageAsset(
    'onsite-workstation-support.webp',
    'IT-Techniker hilft einer Mitarbeiterin direkt am Büroarbeitsplatz.'
  ),
  'Vor-Ort-Service für Handwerk': createArticleImageAsset(
    'craft-tablet-schedule.webp',
    'Handwerker und IT-Berater prüfen digitale Einsatzplanung in der Werkstatt.'
  ),
  'Web- und Softwareentwicklung': createArticleImageAsset(
    'software-prototype-user-test.webp',
    'Entwickler beobachtet einen Nutzertest mit einem App-Prototyp auf einem Tablet.'
  ),
  'Webseiten-Builder mit KI': createArticleImageAsset(
    'website-touchscreen-draft.webp',
    'Unternehmer und Berater prüfen einen Webseitenentwurf an einem Touchscreen.'
  ),
  Webseitenentwurf: createArticleImageAsset(
    'website-touchscreen-draft.webp',
    'Berater und Unternehmer vergleichen Abschnitte eines Webseitenentwurfs.'
  ),
  'Webseitenentwurf mit KI': createArticleImageAsset(
    'website-touchscreen-draft.webp',
    'Unternehmerin prüft mit einem Berater einen KI-gestützten Webseitenentwurf.'
  ),
  Webseitenstrategie: createArticleImageAsset(
    'website-builder-workshop.webp',
    'Team entwickelt eine Webseitenstrategie mit Laptop und Notizen.'
  ),
  'Webseitenstrategie mit KI': createArticleImageAsset(
    'website-builder-workshop.webp',
    'Berater und Kundenteam strukturieren Inhalte für eine KI-gestützte Webseite.'
  ),
  'Zusammenarbeit ohne Blackbox': createArticleImageAsset(
    'project-scope-cards.webp',
    'Projektteam legt Aufgaben und Verantwortlichkeiten transparent auf dem Tisch aus.'
  ),
  'proaktiven IT-Betrieb': createArticleImageAsset(
    'managed-services-dashboard.webp',
    'IT-Berater prüft Monitoring-Daten mit einem Kunden im Büro.'
  )
};

export const createImage = (topic: string, src = placeholderImage): Article['image'] => ({
  src: articleImageAssets[topic]?.src ?? src,
  alt:
    articleImageAssets[topic]?.alt ?? (src === placeholderImage ? `Platzhalterbild für ${topic}` : `Bild zu ${topic}`)
});

export const createBackgroundImage = (topic: string, source = placeholderImage): PageContent['backgroundImage'] => ({
  source: articleImageAssets[topic]?.src ?? source,
  alt:
    articleImageAssets[topic]?.alt ??
    (source === placeholderImage ? `Platzhalterbild für ${topic}` : `Hintergrundbild zu ${topic}`)
});
