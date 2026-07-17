import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const phishingImage = '/img/cyber/cyber-portal/white-label/phishing-simulationen.webp';

export const phishingSimulationen: PageContent = {
  title: 'co-IT - Phishing-Simulationen',
  metaDescription:
    'Realistische Phishing-Simulationen für Unternehmen, um Risiken sichtbar zu machen und konkrete Maßnahmen abzuleiten.',
  headerHeading: 'Phishing-Simulationen',
  headerSubheading: 'Risiken sichtbar machen',
  backgroundImage: createBackgroundImage('Phishing-Simulationen', phishingImage),
  contentHeading: 'Realistische Phishing-Simulationen für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Trainieren, bevor es ernst wird.',
      text: 'Phishing-Simulationen zeigen, wie anfällig ein Unternehmen für täuschend echte Angriffe ist - ohne echten Schaden zu verursachen. Mitarbeitende erleben realistische Szenarien, treffen Entscheidungen im Arbeitsalltag und erhalten direktes Feedback. So werden Risiken sichtbar, bevor ein echter Vorfall entsteht.',
      image: createImage('Phishing-Simulationen')
    },
    {
      direction: 'left',
      heading: 'Realistische Szenarien statt plumper Testmails.',
      text: 'Gute Simulationen orientieren sich an echten Kommunikationsmustern: Lieferanteninformationen, interne Freigaben, Paketbenachrichtigungen, Rechnungen, Bewerbungsmails oder gefälschte Portale. Dadurch entsteht ein realistisches Bild der tatsächlichen Angriffsfläche - nicht nur technisch, sondern auch mit Blick auf Gewohnheiten, Zeitdruck und Verantwortlichkeiten im Arbeitsalltag.',
      image: createImage('Realistische Phishing-Szenarien')
    },
    {
      direction: 'right',
      heading: 'Aus Klicks werden konkrete Maßnahmen.',
      text: 'Die Frage ist nicht, ob ein Klick passiert, sondern wann - und was daraus gelernt wird. Im Fokus stehen dabei keine einzelnen Personen, sondern erkennbare Muster: Zeitdruck, Autorität, Neugier, Unsicherheit oder fehlende Meldewege. Daraus entstehen konkrete Maßnahmen für Schulungen, Prozesse und Technik, die intern nachvollziehbar begründet werden können.',
      image: createImage('Auswertung von Phishing-Simulationen')
    }
  ]
};
