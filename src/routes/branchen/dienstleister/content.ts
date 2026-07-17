import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const servicesImage = '/img/solutions/header.webp';

export const dienstleister: PageContent = {
  title: 'co-IT - Dienstleister',
  metaDescription:
    'IT, Cloud und Software für Dienstleistungsunternehmen mit Microsoft 365, Teams, SharePoint, Azure, Passwort-Management und Managed Services.',
  headerHeading: 'Dienstleister',
  headerSubheading: 'Abläufe verbinden, Kommunikation entlasten',
  backgroundImage: createBackgroundImage('Dienstleister', servicesImage),
  contentHeading: 'IT, Cloud und Software für moderne Dienstleistungsunternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Dienstleistung lebt von sauberen Informationsflüssen.',
      text: 'Dienstleister arbeiten mit Terminen, Kundendaten, Angeboten, Projekten, Telefonaten, Dokumenten und Abstimmungen. Sobald Informationen manuell zwischen Systemen übertragen werden müssen oder Verantwortlichkeiten unklar sind, leidet nicht nur die Effizienz, sondern oft auch die Servicequalität. Gute IT entlastet deshalb nicht erst am Ende, sondern direkt im laufenden Arbeitsprozess.',
      image: createImage('Dienstleister')
    },
    {
      direction: 'left',
      heading: 'Systeme verbinden statt Daten doppelt pflegen.',
      text: 'Gerade in kaufmännischen Dienstleistungsprozessen steckt viel Potenzial in Schnittstellen zwischen CRM, Telefonie, Dokumentenmanagement, Zeiterfassung und Lohnbuchhaltung. Wir analysieren die tatsächlichen Abläufe mit den späteren Anwendern und entwickeln daraus Integrationen, die Medienbrüche beseitigen, Fehler reduzieren und wiederkehrende Aufgaben zuverlässig automatisieren.',
      image: createImage('Cloud-Prozesse für Dienstleister')
    },
    {
      direction: 'right',
      heading: 'Digitalisierung muss im Alltag angenommen werden.',
      text: 'Technisch richtige Lösungen helfen nur, wenn sie von den Teams im Alltag wirklich genutzt werden. Deshalb verbinden wir Cloud, Sicherheit, Softwareentwicklung und dokumentierte Prozesse so, dass neue Strukturen nicht am Fachbereich vorbeigeplant werden. Das macht Dienstleistungsunternehmen auch dann stabiler, wenn Teamgröße, Standorte oder Anforderungen wachsen.',
      image: createImage('Skalierbare IT für Dienstleister')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Typische Beispiele aus kaufmännischen Dienstleistungsprozessen zeigen, wo Integrationen schnell spürbar entlasten können.',
      examples: [
        {
          title: 'Telefonie direkt aus dem CRM starten.',
          text: 'Durch die Integration eines CTI-Clients in ein CRM-System mussten Telefonnummern nicht mehr vielfach pro Tag manuell abgetippt werden. Stattdessen konnte der Anruf direkt aus dem Kundenkontext gestartet werden. Das sparte pro Mitarbeitendem täglich rund 20 bis 30 Minuten und wurde teamübergreifend sehr gut angenommen.'
        },
        {
          title: 'Abwesenheiten automatisch in die Lohnbuchhaltung übertragen.',
          text: 'Ein Import aus der Zeiterfassung ersetzte die monatliche manuelle Übertragung unterschiedlicher Abwesenheitsarten in die Lohnbuchhaltung. Dadurch entfielen ein bis zwei manuelle Arbeitstage pro Monat, während Fehler und nachträgliche Lohnkorrekturen deutlich reduziert wurden.'
        },
        {
          title: 'Dokumente revisionssicher archivieren.',
          text: 'Für ein Warenwirtschaftssystem wurde eine Schnittstelle zu einem Dokumentenmanagementsystem umgesetzt, über die rund 500.000 Geschäftsdokumente pro Jahr automatisiert archiviert werden. Unterlagen lassen sich dadurch deutlich schneller finden und bleiben nachvollziehbar an der richtigen Stelle verfügbar.'
        }
      ]
    }
  ]
};
