import type { Article } from '~/components/article-section/model';

export interface LeistungenPageContent {
  title: string;
  metaDescription: string;
  headerHeading: string;
  headerAccent: string;
  contentHeading: string;
  contentText?: string;
  articles: Article[];
}

const placeholderImage = '/img/leistungen/placeholder.svg';

const createImage = (topic: string): Article['image'] => ({
  src: placeholderImage,
  alt: `Platzhalterbild für ${topic}`
});

export const leistungenOverview: LeistungenPageContent = {
  title: 'co-IT - Leistungen',
  metaDescription:
    'IT-Service, Managed Services, Microsoft 365, Cyber-Sicherheit, Softwareentwicklung und Digitalstrategie für kleine und mittelständische Unternehmen.',
  headerHeading: 'Leistungen',
  headerAccent: 'IT, Sicherheit, Software und Strategie',
  contentHeading:
    'IT-Leistungen für Betrieb, Sicherheit, Software und Strategie',
  contentText:
    'IT-Probleme entstehen selten isoliert. Ein Microsoft-365-Thema berührt Sicherheit, ein Softwareprojekt den späteren Betrieb, eine Digitalstrategie die vorhandene Infrastruktur. Deshalb verbinden wir IT-Service, Managed Services, Cyber-Sicherheit, Softwareentwicklung und Beratung in einem abgestimmten Leistungsangebot für kleine und mittelständische Unternehmen.',
  articles: [
    {
      direction: 'right',
      heading: 'Schnell. Persönlich. Vor Ort.',
      text: 'Wenn Hardware, Arbeitsplätze, Netzwerke, Drucker oder Server physisch betreut werden müssen, zählt Nähe. Für Unternehmen im Ortenaukreis übernehmen wir Vor-Ort-Service rund um Achern, Sasbach, Renchen, Kappelrodeck, Appenweier, Bühl und die umliegende Region.',
      image: createImage('IT-Service im Ortenaukreis'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/it-service-ortenaukreis/',
        ariaLabel: 'Mehr über IT-Service im Ortenaukreis erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Probleme erkennen, bevor sie zu Ausfällen werden.',
      text: 'Viele IT-Probleme kündigen sich im Verborgenen an: fehlende Updates, auslaufende Speicherkapazitäten, fehlerhafte Backups oder unbemerkte Systemwarnungen. Mit Managed Services überwachen, warten und betreuen wir Ihre IT proaktiv, damit Risiken früher sichtbar und Ausfälle besser vermeidbar werden.',
      image: createImage('Managed Services'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/managed-services/',
        ariaLabel: 'Mehr über Managed Services erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Microsoft 365 richtig betreiben.',
      text: 'Microsoft 365 und Azure sind für viele kleine und mittelständische Unternehmen das Fundament moderner Zusammenarbeit. Wir unterstützen bei Migration, sicheren Grundeinstellungen, Benutzerverwaltung, Teams, SharePoint, Exchange, Backup, Lizenzmanagement und Azure-Betrieb.',
      image: createImage('Microsoft 365 und Azure'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/microsoft-365-azure/',
        ariaLabel: 'Mehr über Microsoft 365 und Azure erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'Cyber-Sicherheit verständlich und wirksam machen.',
      text: 'Angriffe beginnen häufig mit E-Mails, schwachen Passwörtern, Fehlkonfigurationen oder unsicheren Entscheidungen im Arbeitsalltag. Wir verbinden technische Schutzmaßnahmen mit Awareness, Phishing-Simulationen, Passwort-Management und verständlichen Sicherheitschecks.',
      image: createImage('Cyber-Sicherheit'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/cyber-sicherheit/',
        ariaLabel: 'Mehr über Cyber-Sicherheit erfahren'
      }
    },
    {
      direction: 'right',
      heading: 'Software, die einfach passt.',
      text: 'Wenn Standardsoftware nicht mehr zu Ihren Abläufen passt, entwickeln wir individuelle Webanwendungen, Schnittstellen, Portale und Backend-Systeme, die Prozesse vereinfachen und langfristig wartbar bleiben.',
      image: createImage('Web- und Softwareentwicklung'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/web-softwareentwicklung/',
        ariaLabel: 'Mehr über Web- und Softwareentwicklung erfahren'
      }
    },
    {
      direction: 'left',
      heading: 'KI nutzen. Aber sinnvoll.',
      text: 'Künstliche Intelligenz und Digitalisierung helfen nur dann, wenn sie echte Aufgaben im Unternehmen lösen. Wir identifizieren sinnvolle Einsatzbereiche - zum Beispiel bei Dokumenten, Recherche, Angeboten, internen Wissensfragen oder wiederkehrenden Aufgaben - und leiten daraus konkrete nächste Schritte mit realistischem Umsetzungsrahmen ab.',
      image: createImage('Digital- und KI-Strategie'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/leistungen/digital-ki-strategie/',
        ariaLabel: 'Mehr über Digital- und KI-Strategie erfahren'
      }
    }
  ]
};

export const itServiceOrtenaukreis: LeistungenPageContent = {
  title: 'co-IT - IT-Service Ortenaukreis',
  metaDescription:
    'Regionaler IT-Service im Ortenaukreis für Unternehmen rund um Achern, Sasbach, Renchen, Kappelrodeck, Appenweier und Bühl.',
  headerHeading: 'IT-Service Ortenaukreis',
  headerAccent: 'Schnell, persönlich, vor Ort',
  contentHeading: 'IT-Service im Ortenaukreis für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Schnell. Persönlich. Vor Ort.',
      text: 'Wenn IT-Systeme streiken, zählt jede Minute. Unser lokales Team ist im Raum Achern ansässig und in der gesamten Ortenau für Sie im Einsatz - von Sasbach über Renchen und Kappelrodeck bis Appenweier, Bühl und umliegende Orte. Kein endloses Ferndiagnose-Ping-Pong, sondern ein Techniker, der Ihre Infrastruktur kennt und bei Bedarf direkt vor Ort unterstützt.',
      image: createImage('regionalen IT-Service')
    },
    {
      direction: 'left',
      heading: 'Was wir vor Ort leisten.',
      text: 'Wenn Technik physisch angefasst, geprüft oder ausgetauscht werden muss, kommen wir direkt zu Ihnen. Wir unterstützen bei Arbeitsplätzen, Netzwerken, Servern, Druckern, Peripherie, Standortanbindungen und akuten Störungen - schnell, pragmatisch und regional.',
      image: createImage('Vor-Ort-Leistungen')
    },
    {
      direction: 'right',
      heading: 'Regional verankert und auf Augenhöhe.',
      text: 'Lokale Präsenz bedeutet bei der co-IT nicht nur geografische Nähe, sondern auch Verständnis für die Unternehmensstruktur im Ortenaukreis. Wir betreuen kleine und mittelständische Unternehmen - von der Arztpraxis über Handwerksbetriebe bis zum produzierenden Unternehmen mit mehreren Standorten.',
      image: createImage('regionale IT-Betreuung')
    }
  ]
};

export const managedServices: LeistungenPageContent = {
  title: 'co-IT - Managed Services',
  metaDescription:
    'Managed Services für sicheren, stabilen und planbaren IT-Betrieb mit Monitoring, Patch-Management, Backup und klaren Prozessen.',
  headerHeading: 'Managed Services',
  headerAccent: 'IT-Betrieb planbarer machen',
  contentHeading: 'Managed Services für sicheren und stabilen IT-Betrieb',
  articles: [
    {
      direction: 'right',
      heading: 'Ihre IT läuft. Planbarer.',
      text: 'Proaktiver Betrieb statt reaktive Feuerwehr. Wir überwachen Ihre Systeme, erkennen Probleme, bevor sie spürbar werden und halten Ihre IT-Umgebung durch strukturiertes Patch-Management aktuell.',
      image: createImage('Managed Services')
    },
    {
      direction: 'left',
      heading: 'Was Ihre IT im Alltag stabiler macht.',
      text: 'Remote-Administration, Endpoint-Monitoring, Backup und Wiederherstellung, Patch-Management für Windows und Drittanbieter-Software, Microsoft 365 Disaster Recovery, dokumentierte Tickets, regelmäßige Prüfungen und klare Prozesse schaffen Transparenz über Zustand und Risiken Ihrer IT.',
      image: createImage('stabilen IT-Betrieb')
    },
    {
      direction: 'right',
      heading: 'Vom ständigen Feuerlöschen zum Brandschutz.',
      text: 'Viele Unternehmen reagieren auf IT-Probleme erst, wenn es zu spät ist. Managed Services setzen früher an: Wir überwachen Systeme, halten Ihre Umgebung aktuell, dokumentieren Veränderungen und verbessern kontinuierlich. Unser Ziel ist es nicht nur, Brände schnell zu löschen - sondern dafür zu sorgen, dass Brandherde gar nicht erst entstehen.',
      image: createImage('proaktiven IT-Betrieb')
    }
  ]
};

export const microsoft365Azure: LeistungenPageContent = {
  title: 'co-IT - Microsoft 365 und Azure',
  metaDescription:
    'Microsoft 365 und Azure für Unternehmen: Migration, sichere Konfiguration, Teams, SharePoint, Exchange, Backup, Lizenzen und Betrieb.',
  headerHeading: 'Microsoft 365 & Azure',
  headerAccent: 'Von Teams bis Azure',
  contentHeading: 'Microsoft 365 und Azure für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Microsoft im Griff. Von Teams bis Azure.',
      text: 'Microsoft 365 und Azure sind heute das Rückgrat moderner KMU-IT - aber nur, wenn sie richtig konfiguriert, sicher betrieben und kontinuierlich gewartet werden. Wir begleiten Sie von der Migration bis zum laufenden Betrieb.',
      image: createImage('Microsoft 365 und Azure')
    },
    {
      direction: 'left',
      heading: 'Migration ohne Stillstand.',
      text: 'Fehlkonfigurationen bei Exchange-Migrationen, unsichere Tenant-Einstellungen, fehlende Zugriffsregeln oder unklare Lizenzmodelle sind häufige Stolpersteine. Wir planen, testen und migrieren mit klarer Dokumentation und möglichst geringer Unterbrechung im Tagesgeschäft.',
      image: createImage('Microsoft-365-Migration')
    },
    {
      direction: 'right',
      heading: 'Damit Microsoft 365 nicht nebenbei verwaltet wird.',
      text: 'Nach der Migration beginnt die eigentliche Arbeit: Lizenzmanagement, Benutzerverwaltung, Teams-Administration, SharePoint-Strukturen, Rollen- und Rechtekonzepte, Backup und Azure-Kostenkontrolle. Wir verbinden Administration mit sicherem Betrieb.',
      image: createImage('Microsoft-365-Betrieb')
    }
  ]
};

export const cyberSicherheit: LeistungenPageContent = {
  title: 'co-IT - Cyber-Sicherheit',
  metaDescription:
    'Cyber-Sicherheit für E-Mail, Mitarbeitende und Systeme mit E-Mail-Härtung, Awareness, Phishing-Simulationen und Sicherheitschecks.',
  headerHeading: 'Cyber-Sicherheit',
  headerAccent: 'Verständlich und wirksam',
  contentHeading: 'Cyber-Sicherheit für E-Mail, Mitarbeitende und Systeme',
  articles: [
    {
      direction: 'right',
      heading: 'Viele Angriffe beginnen nicht im Serverraum.',
      text: 'Viele Angriffe beginnen nicht im Serverraum, sondern mit einer glaubwürdigen E-Mail, einem schwachen Passwort oder einer falschen Entscheidung unter Zeitdruck. Firewalls und Antivirensoftware allein schützen nicht gegen Social Engineering, kompromittierte Zugangsdaten und organisatorische Schwachstellen.',
      image: createImage('Cyber-Sicherheit')
    },
    {
      direction: 'left',
      heading: 'E-Mail-Sicherheit auf technischer Ebene.',
      text: 'Wir prüfen und härten Ihre E-Mail-Infrastruktur mit SPF, DKIM, DMARC, MTA-STS, TLS-RPT, DANE und DNSSEC. Diese Protokolle reduzieren das Risiko von Spoofing, Manipulation und Fehlkonfigurationen und schaffen eine belastbare Grundlage für sichere Kommunikation.',
      image: createImage('E-Mail-Sicherheit')
    },
    {
      direction: 'right',
      heading: 'Awareness, die messbar wird.',
      text: 'Viele Mitarbeitende erkennen einfache Phishing-Mails sofort. Kritisch wird es bei realistischen Szenarien, die Zeitdruck, Vertrauen oder gewohnte Abläufe ausnutzen. Mit Awareness-Trainings, Phishing-Simulationen, Passwort-Management, Microsoft-365-Härtung und verständlichem Feedback machen wir Sicherheitsverhalten sichtbar und entwickelbar - als Lernmoment statt als Vorwurf.',
      image: createImage('Awareness und Phishing-Simulationen')
    }
  ]
};

export const webSoftwareentwicklung: LeistungenPageContent = {
  title: 'co-IT - Web- und Softwareentwicklung',
  metaDescription:
    'Web- und Softwareentwicklung für digitale Geschäftsprozesse: Webanwendungen, Schnittstellen, Portale und moderne Backend-Systeme.',
  headerHeading: 'Web- & Softwareentwicklung',
  headerAccent: 'Software, die passt',
  contentHeading:
    'Web- und Softwareentwicklung für digitale Geschäftsprozesse',
  articles: [
    {
      direction: 'right',
      heading: 'Software, die passt. Nicht Software, die man anpassen muss.',
      text: 'Standardsoftware erreicht ihre Grenzen genau dort, wo Ihr Geschäftsprozess individuell wird. Wir entwickeln webbasierte Anwendungen, Portale, Schnittstellen und Backend-Systeme, die auf Ihre Abläufe zugeschnitten sind - wartbar, skalierbar und langfristig tragfähig.',
      image: createImage('Web- und Softwareentwicklung')
    },
    {
      direction: 'left',
      heading: 'Technologien, die langfristig betreibbar bleiben.',
      text: 'Frontend, Backend und Cloud müssen langfristig zusammenpassen. Wir setzen unter anderem auf Angular, .NET, Node.js und Azure, wenn sie fachlich und technisch sinnvoll sind. Entscheidend ist nicht der einzelne Technologiebegriff, sondern eine Architektur, die wartbar, erweiterbar und zuverlässig betreibbar bleibt.',
      image: createImage('Softwaretechnologien')
    },
    {
      direction: 'right',
      heading: 'Von der Legacy-Ablösung zum modernen System.',
      text: 'Viele kritische Prozesse laufen auf Access-Datenbanken, Excel-Automatisierungen, proprietären Desktop-Anwendungen oder gewachsenen Insellösungen. Wir analysieren, was wirklich gebraucht wird, und modernisieren schrittweise - migrationsbegleitet, risikoarm und mit klarer Roadmap.',
      image: createImage('Legacy-Modernisierung')
    }
  ]
};

export const digitalKiStrategie: LeistungenPageContent = {
  title: 'co-IT - Digital- und KI-Strategie',
  metaDescription:
    'Digital- und KI-Strategie für Wachstum, Effizienz und Modernisierung mit priorisierter Roadmap und realistischem Umsetzungsrahmen.',
  headerHeading: 'Digital- & KI-Strategie',
  headerAccent: 'KI sinnvoll nutzen',
  contentHeading:
    'Digital- und KI-Strategie für Wachstum, Effizienz und Modernisierung',
  articles: [
    {
      direction: 'right',
      heading: 'KI sinnvoll einsetzen statt nur ausprobieren.',
      text: 'Viele Unternehmen experimentieren mit KI-Tools, ohne zu wissen, wo sie wirklich Wert schaffen. Wir helfen Ihnen, sinnvolle Einsatzbereiche auf Basis Ihrer Prozesse, Datengrundlage und strategischen Ziele zu bewerten - nicht auf Basis von Hype.',
      image: createImage('Digital- und KI-Strategie')
    },
    {
      direction: 'left',
      heading: 'Wo KI im Mittelstand wirklich funktioniert.',
      text: 'Dokumentenverarbeitung, Kundenkommunikation, interne Wissensbasen, Qualitätsprüfung, Angebotsprozesse, Recherche, Klassifikation und Prozessautomatisierung sind Bereiche, in denen KI im KMU-Umfeld messbare Effizienzgewinne erzielen kann.',
      image: createImage('KI-Einsatzbereiche im Mittelstand')
    },
    {
      direction: 'right',
      heading: 'Strategie ohne Compliance ist keine Strategie.',
      text: 'Wir prüfen geeignete Prozesse, notwendige Daten, bestehende Risiken, Compliance-Anforderungen und technische Voraussetzungen. Daraus entsteht kein abstraktes Strategiepapier, sondern eine priorisierte Roadmap mit konkreten Maßnahmen, Verantwortlichkeiten und realistischem Umsetzungsrahmen.',
      image: createImage('KI-Roadmap und Compliance')
    }
  ]
};
