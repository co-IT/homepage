import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const webSoftwareentwicklung: PageContent = {
  title: 'co-IT - Web- und Softwareentwicklung',
  metaDescription:
    'Web- und Softwareentwicklung für digitale Geschäftsprozesse mit Webanwendungen, Schnittstellen, Portalen und individueller Prozesssoftware.',
  headerHeading: 'Web- & Softwareentwicklung',
  headerSubheading: 'Prozesse erst verstehen. Dann Software entwickeln.',
  backgroundImage: createBackgroundImage('Web- und Softwareentwicklung'),
  contentHeading: 'Web- und Softwareentwicklung für digitale Geschäftsprozesse',
  articles: [
    {
      direction: 'right',
      heading: 'Erst die Arbeit verstehen. Dann die Software entwickeln.',
      text: 'Viele Softwareprojekte scheitern nicht an der Technik, sondern an falschen Annahmen über den Arbeitsalltag. Deshalb sprechen wir nicht nur mit Projektverantwortlichen, sondern mit den Mitarbeitenden, die den Prozess später wirklich leben. So entstehen Webanwendungen, Portale und interne Werkzeuge, die nicht an einer PowerPoint-Prozessgrafik ausgerichtet sind, sondern an der gelebten Praxis im Unternehmen.',
      image: {
        src: '/img/article-pages/software-prototype-user-test.webp',
        alt: 'Entwickler und Kundin prüfen eine individuelle Webanwendung mit Schnittstellen- und Prozesslogik.'
      }
    },
    {
      direction: 'left',
      heading: 'Systeme verbinden. Medienbrüche beseitigen.',
      text: 'Besonders viel Potenzial steckt oft nicht in einer komplett neuen Anwendung, sondern in sauber verbundenen Systemen. Wir entwickeln Schnittstellen und ETL-Prozesse zwischen Warenwirtschaft, CRM, Dokumentenmanagement, Telefonie, Zeiterfassung und Lohnbuchhaltung, damit Daten nicht mehrfach erfasst, kopiert oder manuell übertragen werden müssen. So werden aus Einzellösungen durchgängige digitale Geschäftsprozesse.',
      image: createImage('Softwaretechnologien')
    },
    {
      direction: 'right',
      heading: 'Modernisierung mit Rücksicht auf das Tagesgeschäft.',
      text: 'Gewachsene Anwendungen lassen sich selten einfach abschalten und ersetzen. Bestehende Daten, Nummernkreise, Folgeprozesse, Versandabläufe oder Rückfallwege müssen mitgedacht werden. Wir modernisieren deshalb schrittweise, testen reale Prozessvarianten und validieren kritische Funktionen früh, damit neue Lösungen nicht nur moderner aussehen, sondern im Betrieb auch zuverlässig tragen.',
      image: createImage('Legacy-Modernisierung')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Einige typische Beispiele zeigen, wie individuelle Software und Schnittstellen im Alltag konkrete Engpässe auflösen können.',
      examples: [
        {
          title: 'CRM und Telefonie direkt zusammenbringen.',
          text: 'In einem Projekt wurde ein CRM-System mit einem CTI-Client verbunden. Telefonnummern mussten dadurch nicht mehr 30- bis 80-mal pro Arbeitstag manuell abgetippt werden, sondern konnten direkt aus dem CRM an die Telefonie übergeben werden. Das sparte laut interner Einschätzung pro Mitarbeitendem täglich rund 20 bis 30 Minuten und wurde abteilungsübergreifend sehr positiv aufgenommen.'
        },
        {
          title: 'Abwesenheiten automatisiert in die Lohnbuchhaltung übernehmen.',
          text: 'Für einen Import aus der Zeiterfassung in die Lohnbuchhaltung wurde eine fachlich differenzierte Logik für unterschiedliche Abwesenheitsarten umgesetzt. Dadurch entfielen jeden Monat ein bis zwei manuelle Arbeitstage für die Datenerfassung, gleichzeitig sank die Fehleranfälligkeit bei der Lohnvorbereitung deutlich.'
        },
        {
          title: 'Geschäftsdokumente revisionssicher archivieren.',
          text: 'Für ein Warenwirtschaftssystem wurde eine Schnittstelle zu einem Dokumentenmanagementsystem umgesetzt, über die rund 500.000 Dokumente pro Jahr automatisiert und revisionssicher archiviert werden. Wichtige Unterlagen sind damit schneller auffindbar und verschwinden nicht mehr in unstrukturierten Postfächern.'
        },
        {
          title: 'Webshop, Warenwirtschaft und Versand gemeinsam modernisieren.',
          text: 'In einem Migrationsprojekt wurden Webshop, Warenwirtschaft und Versand so weiterentwickelt, dass manuelle Exporte, Copy-and-paste-Schritte und unnötige Systemwechsel reduziert werden konnten. Gleichzeitig blieben bestehende Historien, Nummernkreise und ein sinnvoller Rückfallweg auf das alte Verfahren erhalten.'
        }
      ]
    }
  ]
};
