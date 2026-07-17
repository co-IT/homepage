import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const phishingImage = '/img/cyber/cyber-portal/white-label/phishing-simulationen.webp';

export const phishingSimulationen: PageContent = {
  title: 'co-IT - Phishing-Simulationen',
  metaDescription:
    'Realistische Phishing-Simulationen für Unternehmen, um Risiken sichtbar zu machen und konkrete Maßnahmen abzuleiten.',
  headerHeading: 'Phishing-Simulationen',
  headerSubheading: 'Realistisch simulieren. Gezielt daraus lernen.',
  backgroundImage: createBackgroundImage('Phishing-Simulationen', phishingImage),
  contentHeading: 'Realistische Phishing-Simulationen für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Trainieren, bevor es ernst wird.',
      text: 'Phishing-Simulationen zeigen, wie anfällig ein Unternehmen für täuschend echte Angriffe ist - ohne echten Schaden zu verursachen. Mitarbeitende erleben realistische Szenarien, treffen Entscheidungen im Arbeitsalltag und erhalten direktes Feedback. So werden Risiken sichtbar, bevor ein echter Vorfall entsteht. Unsere Erfahrung zeigt dabei immer wieder: Selbst allgemeine Kampagnen erreichen oft überraschend hohe Klickraten.',
      image: createImage('Phishing-Simulationen')
    },
    {
      direction: 'left',
      heading: 'Branchentypische Szenarien statt plumper Testmails.',
      text: 'Gute Simulationen orientieren sich an echten Kommunikationsmustern: Lieferanteninformationen, interne Freigaben, Paketbenachrichtigungen, Rechnungen, Bewerbungsmails oder gefälschte Portale. Bei Bedarf werden die Inhalte gezielt auf Unternehmen, Branche und typische Anlässe zugeschnitten - bis hin zu ähnlich geschriebenen Domains, plausiblen Absenderidentitäten oder mehrstufigen Angriffsszenarien.',
      image: createImage('Realistische Phishing-Szenarien')
    },
    {
      direction: 'right',
      heading: 'Aus Klicks werden konkrete Maßnahmen.',
      text: 'Die Frage ist nicht, ob ein Klick passiert, sondern wann - und was daraus gelernt wird. Im Fokus stehen dabei keine einzelnen Personen, sondern erkennbare Muster: Zeitdruck, Autorität, Neugier, Unsicherheit oder fehlende Meldewege. Aus den Ergebnissen leiten wir konkrete Maßnahmen für Schulungen, Prozesse und Technik ab - zum Beispiel gezielte Nachschulungen, klarere Prüfmerkmale, Notfallpläne oder technische Anpassungen in der E-Mail-Darstellung.',
      image: createImage('Auswertung von Phishing-Simulationen')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Drei typische Beispiele zeigen, wie Phishing-Simulationen je nach Branche und Kommunikationssituation unterschiedlich aufgebaut werden.',
      examples: [
        {
          title: 'Versicherungskontext mit dokumentierbaren Ergebnissen.',
          text: 'Phishing-Simulationen werden unter anderem für Geschäftskunden einer namhaften deutschen Versicherung eingesetzt. Dabei greifen wir auf bestehende Szenarien für unterschiedliche Branchen und Unternehmensgrößen zurück und passen diese bei Bedarf an den konkreten Unternehmenskontext an. So entstehen belastbare Auswertungen und nachvollziehbare Maßnahmen statt einer generischen Einmalaktion.'
        },
        {
          title: 'Arztpraxen mit zentraler E-Mail-Adresse gezielt absichern.',
          text: 'In Arztpraxen läuft eingehende externe Kommunikation oft über zentrale Adressen wie info@. Dadurch tragen wenige Personen einen großen Teil der E-Mail-Verantwortung. Für solche Konstellationen entwickeln wir branchenspezifische Szenarien, etwa angebliche Kontaktaufnahmen einer fiktiven Apotheke, und leiten daraus gezielte Schulungen für die zuständigen Mitarbeitenden ab.'
        },
        {
          title: 'Spear-Phishing mit ähnlicher Domain realistisch nachbilden.',
          text: 'In einem weiteren Praxisbeispiel wurde ein großer Pharmakonzern über eine ähnlich aussehende Domain nachgeahmt und mit einer vermeintlichen Warnung zu einem weit verbreiteten Medikament verbunden. Aus der Auswertung entstanden konkrete Prüfhinweise zu E-Mail-Adressen, ein Notfallplan für Fehlhandlungen und die technische Empfehlung, eingehende Nachrichten standardmäßig als reinen Text anzuzeigen.'
        }
      ]
    }
  ]
};
