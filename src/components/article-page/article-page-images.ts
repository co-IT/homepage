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
    'phishing-analytics-evaluation.webp',
    'Security-Analyst und Teamlead werten Ergebnisse einer Phishing-Simulation an Monitoren aus.'
  ),
  'Awareness und Phishing-Simulationen': createArticleImageAsset(
    'awareness-team-training-table.webp',
    'Mitarbeitende besprechen Sicherheitsrisiken in einem praxisnahen Awareness-Training.'
  ),
  Behörden: createArticleImageAsset(
    'public-office-scanner-workflow.webp',
    'Verwaltungsmitarbeiterin scannt Formulare in einem älteren Amt, während ein IT-Spezialist einen Arbeitsplatz betreut.'
  ),
  'Betreibbare Technologien': createArticleImageAsset(
    'server-cabinet-operability-check.webp',
    'IT-Spezialist prüft betreibbare Systeme direkt an einem Serverschrank.'
  ),
  'Cloud-Prozesse für Dienstleister': createArticleImageAsset(
    'cloud-workflow-dashboard-discussion.webp',
    'Dienstleistungsteam prüft Cloud-Prozesse an einem Dashboard mit einem IT-Berater.'
  ),
  Branchen: createArticleImageAsset(
    'architecture-workshop-display.webp',
    'Team ordnet technische Abläufe und Systemarchitektur an einem großen Display.'
  ),
  'Cyber-Awareness-Portal': createArticleImageAsset(
    'awareness-results-review.webp',
    'Verantwortliche prüfen Lernfortschritte eines Cyber-Awareness-Portals mit einem IT-Berater.'
  ),
  'Cyber-Sicherheit': createArticleImageAsset(
    'awareness-poster-workshop.webp',
    'IT-Berater erklärt einem Team typische Sicherheitsrisiken und Schutzmassnahmen an einem grossen Bildschirm.'
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
    'public-office-counter-digitization.webp',
    'Mitarbeitende digitalisieren Formulare an einem Schalter in einem klassischen Amtsbüro.'
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
    'public-office-digital-form.webp',
    'Verwaltungsmitarbeiterin verarbeitet Papierakten und digitale Formulare an einem Amtsarbeitsplatz.'
  ),
  'E-Mail-Sicherheit': createArticleImageAsset(
    'email-security-review.webp',
    'IT-Berater und Kundin pruefen E-Mail-Sicherheitsprotokolle wie SPF, DKIM und DMARC an zwei Bildschirmen.'
  ),
  'Einführung von Passwort-Management': createArticleImageAsset(
    'passwort-manager-strukturierte-einfuehrung.webp',
    'IT-Berater bespricht mit zwei Ansprechpartnern die strukturierte Einfuehrung eines Passwort-Managers mit Migrationsplan und Schulungsunterlagen.'
  ),
  Energiesektor: createArticleImageAsset(
    'energy-high-voltage-tablet.webp',
    'Techniker mit Helmen prüfen ein Tablet vor einer Hochspannungsanlage.'
  ),
  Gesundheitswesen: createArticleImageAsset(
    'healthcare-clinic-it-support.webp',
    'Ärztin und medizinische Fachangestellte prüfen Praxis-IT mit einem IT-Spezialisten im Behandlungsraum.'
  ),
  Großhandel: createArticleImageAsset(
    'wholesale-warehouse-scanner.webp',
    'Lagermitarbeiter scannt Ware an Paletten, während eine Kollegin digitale Bestelldaten prüft.'
  ),
  'Handlungsempfehlungen aus Sicherheitschecks': createArticleImageAsset(
    'security-recommendation-priorities.webp',
    'IT-Berater priorisiert konkrete Empfehlungen aus einem Sicherheitscheck mit einem Kunden.'
  ),
  Handwerk: createArticleImageAsset(
    'craft-roof-digital-plan.webp',
    'Handwerker prüft einen digitalen Einsatzplan auf einem Tablet direkt auf einer Baustelle am Dach.'
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
    'healthcare-access-control-workstation.webp',
    'Praxispersonal nutzt sichere Anmeldung an einem Klinikarbeitsplatz mit Unterstützung eines IT-Spezialisten.'
  ),
  'KI-Einsatzbereiche im Mittelstand': createArticleImageAsset(
    'ai-document-automation.webp',
    'Mitarbeiterin testet Dokumentenautomatisierung mit einem IT-Berater am Scanner.'
  ),
  'KI-Roadmap und Compliance': createArticleImageAsset(
    'ai-roadmap-tablet-review.webp',
    'Team prüft eine KI-Roadmap und Compliance-Schritte auf einem Tablet.'
  ),
  'Klare Einsatzgebiete': createArticleImageAsset(
    'project-responsibility-table.webp',
    'Projektteam klärt Einsatzgebiete und Verantwortlichkeiten an einem Arbeitstisch.'
  ),
  'Kontrolle über Zugangsdaten': createArticleImageAsset(
    'passwort-management-zugriffsrechte-kontrolle.webp',
    'IT-Experte und Kundin pruefen Rollen, Freigaben, Team-Sammlungen und Sicherheitsrichtlinien in einem Passwort-Management-Dashboard.'
  ),
  'Legacy-Modernisierung': createArticleImageAsset(
    'legacy-archive-modernization.webp',
    'Mitarbeiterin hält einen alten Ordner, während ein Entwickler einen modernen Prozess zeigt.'
  ),
  'Lernen und Auswerten im Cyber-Awareness-Portal': createArticleImageAsset(
    'awareness-certificates-review.webp',
    'Verantwortliche ordnen Nachweise und Zertifikate aus einem Cyber-Awareness-Portal.'
  ),
  Lohnfertiger: createArticleImageAsset(
    'production-cnc-quality-control.webp',
    'Mitarbeiter prüfen gefertigte Metallteile und Qualitätsdaten in einer Produktionshalle.'
  ),
  'Managed Services': createArticleImageAsset(
    'server-room-maintenance.webp',
    'IT-Spezialist kontrolliert Systeme in einem Serverraum mit einer Kundin.'
  ),
  'Microsoft 365 und Azure': createArticleImageAsset(
    'microsoft-365-overview-admin.webp',
    'IT-Berater erklärt Microsoft-365- und Azure-Dienste an einem großen Dashboard.'
  ),
  'Microsoft-365-Betrieb': createArticleImageAsset(
    'microsoft-365-operations-admin.webp',
    'IT-Berater und Kundin prüfen Microsoft-365-Administration, Lizenzen und Azure-Kosten an einem Dashboard.'
  ),
  'Microsoft-365-Migration': createArticleImageAsset(
    'microsoft-365-migration-plan.webp',
    'IT-Berater und Kundin prüfen einen Microsoft-365-Migrationsplan mit Pilot-, Test-, Rollback- und Stabilisierungsphasen an zwei Bildschirmen.'
  ),
  'Mittelstand verstehen': createArticleImageAsset(
    'mittelstand-it-consulting.webp',
    'IT-Berater bespricht pragmatische nächste Schritte mit einem mittelständischen Unternehmen.'
  ),
  'Nachweise im Cyber-Awareness-Portal': createArticleImageAsset(
    'awareness-progress-workshop-board.webp',
    'Verantwortliche dokumentieren Fortschritte und Nachweise aus einem Awareness-Portal.'
  ),
  'Phishing-Simulationen': createArticleImageAsset(
    'phishing-email-decision.webp',
    'Mitarbeiterin erkennt eine verdächtige E-Mail am Arbeitsplatz und entscheidet über den nächsten Schritt.'
  ),
  'Passwort-Manager für Unternehmen': createArticleImageAsset(
    'passwort-management-digitale-identitaeten.webp',
    'IT-Sicherheitsberater und Ansprechpartnerin pruefen digitale Identitaeten, geschuetzte Zugangsdaten und Passwort-Risiken an einem Dashboard.'
  ),
  'Produkte und Lösungen': createArticleImageAsset(
    'digital-solutions-workshop.webp',
    'Team bespricht digitale Lösungen an Laptops und Tablets in einem strukturierten Workshop.'
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
    'regional-office-handshake-view.webp',
    'IT-Berater trifft einen regionalen Kunden in einem Unternehmensbüro.'
  ),
  'regionale IT-Betreuung': createArticleImageAsset(
    'regional-network-cabinet-service.webp',
    'IT-Techniker prüft Netzwerktechnik bei einem regionalen Kunden vor Ort.'
  ),
  'regionalen IT-Service': createArticleImageAsset(
    'onsite-desk-support-review.webp',
    'IT-Techniker unterstützt einen regionalen Kunden direkt am Arbeitsplatz.'
  ),
  'Remote-Leistungen': createArticleImageAsset(
    'remote-support-home-office.webp',
    'IT-Berater leistet Remote-Support aus einem ruhigen Homeoffice.'
  ),
  'Schnittstellen im Großhandel': createArticleImageAsset(
    'wholesale-conveyor-scanner-integration.webp',
    'Großhandelsmitarbeiter prüft Scanner, Förderband und digitale Bestelldaten an einer Packstation.'
  ),
  'Sichere Kommunikation im Energiesektor': createArticleImageAsset(
    'energy-control-room-radio.webp',
    'Leitstellenmitarbeiter und IT-Spezialist prüfen Funkkommunikation im Energiesektor.'
  ),
  'Sicherheit für Produktionsdaten': createArticleImageAsset(
    'production-machine-access-control.webp',
    'Produktionsmitarbeiter nutzt sichere Anmeldung an einem Maschinenterminal neben CNC-Anlagen.'
  ),
  'Sicherheit für Versicherungen': createArticleImageAsset(
    'insurance-security-advisory-table.webp',
    'Versicherungsmitarbeitende prüfen Sicherheitsmaßnahmen für vertrauliche digitale Prozesse.'
  ),
  'Sicherheit im Großhandel': createArticleImageAsset(
    'wholesale-scanner-process.webp',
    'Team im Lager prüft sichere digitale Abläufe mit Scanner und Tablet.'
  ),
  Sicherheitschecks: createArticleImageAsset(
    'security-dns-email-check.webp',
    'IT-Spezialist prüft E-Mail- und DNS-Sicherheitskonfigurationen an einem technischen Arbeitsplatz.'
  ),
  'Skalierbare IT für Dienstleister': createArticleImageAsset(
    'service-process-consulting.webp',
    'Dienstleistungsteam plant skalierbare digitale Prozesse mit einem IT-Berater.'
  ),
  Softwaretechnologien: createArticleImageAsset(
    'technology-options-tablet-review.webp',
    'Team bewertet Technologieoptionen an Tablet und Architekturdiagramm.'
  ),
  'stabilen IT-Betrieb': createArticleImageAsset(
    'operations-monitoring-room.webp',
    'IT-Spezialisten prüfen Monitoring-Daten für einen stabilen IT-Betrieb.'
  ),
  'Technisch präzise arbeiten': createArticleImageAsset(
    'server-rack-technology-review.webp',
    'IT-Techniker dokumentiert technische Systeme direkt an einem Serverschrank.'
  ),
  'Technologien und Partner': createArticleImageAsset(
    'technology-stack-review.webp',
    'Berater und Kunde prüfen eine technische Systemarchitektur an einem großen Bildschirm.'
  ),
  Technologiepartner: createArticleImageAsset(
    'software-development-review.webp',
    'Team vergleicht Technologieoptionen und Partnerlösungen an einem Bildschirm.'
  ),
  Unternehmen: createArticleImageAsset(
    'company-team-laptop-planning.webp',
    'co-IT-Team plant eine kundenspezifische IT-Lösung an Laptops.'
  ),
  'Über uns': createArticleImageAsset(
    'project-team-table-planning.webp',
    'Team arbeitet gemeinsam an einer technischen Lösung an einem Projekttisch.'
  ),
  'Verantwortung in IT-Projekten': createArticleImageAsset(
    'project-responsibility-review.webp',
    'IT-Berater und Kundenteam klären Verantwortlichkeiten in einem Projekt.'
  ),
  Versicherungen: createArticleImageAsset(
    'insurance-claims-document-scan.webp',
    'Versicherungsmitarbeiterin scannt Schadenakten und prüft einen digitalen Vorgang am Arbeitsplatz.'
  ),
  'Vor-Ort-Leistungen': createArticleImageAsset(
    'onsite-workstation-support.webp',
    'IT-Techniker verbindet eine Dockingstation am Arbeitsplatz, während eine Kundin den Vor-Ort-Service begleitet.'
  ),
  'Vor-Ort-Service für Handwerk': createArticleImageAsset(
    'craft-workshop-network-service.webp',
    'IT-Techniker tauscht Netzwerktechnik in einer Werkstatt aus, während ein Handwerker zusieht.'
  ),
  'Web- und Softwareentwicklung': createArticleImageAsset(
    'software-prototype-user-test.webp',
    'Entwickler und Kundin prüfen eine individuelle Webanwendung mit Schnittstellen- und Prozesslogik.'
  ),
  'Webseiten-Builder mit KI': createArticleImageAsset(
    'website-sitemap-wall-workshop.webp',
    'Unternehmerin und Berater strukturieren Webseiteninhalte mit Wireframes und Sitemap-Karten an einer Wand.'
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
    'IT-Berater und Kundin planen Schutzmaßnahmen an einem Whiteboard, während Monitoring-Dashboards im Hintergrund laufen.'
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
