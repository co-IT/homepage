import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

const cyberPortalImage = '/img/cyber/cyber-portal/header.webp';

export const cyberAwarenessPortal: PageContent = {
  title: 'co-IT - Cyber Lounge',
  metaDescription:
    'Die Cyber Lounge bündelt Schulungen, Phishing-Simulationen und nachvollziehbare Nachweise in einer Plattform für praxisnahe Sensibilisierung.',
  headerHeading: 'Cyber Lounge',
  headerSubheading: 'Sensibilisierung und Phishing-Simulationen',
  backgroundImage: createBackgroundImage('Cyber Lounge', cyberPortalImage),
  contentHeading: 'Schulungen, Phishing-Simulationen und Nachweise in einer Plattform',
  articles: [
    {
      direction: 'right',
      heading: 'Sensibilisierung, die im Arbeitsalltag wirkt.',
      text: 'Die Cyber Lounge bündelt Schulungen, Phishing-Simulationen und nachvollziehbare Nachweise in einer Plattform für praxisnahe Sensibilisierung. Dabei geht es nicht nur um einzelne Lerninhalte, sondern um einen strukturierten Ablauf, der im Unternehmensalltag funktioniert: Schulungspläne, wiederkehrende Auffrischungen, Prüfungen und begleitende Vorlagen greifen sinnvoll zusammen. So entsteht ein belastbarer Prozess, mit dem Unternehmen Sicherheitsanforderungen nicht nur vermitteln, sondern auch organisatorisch besser verankern können.',
      image: {
        src: '/img/article-pages/cyber-lounge-sensibilisierung-workshop.png',
        alt: 'Drei Personen besprechen Auswertungen und Lernfortschritte der Cyber Lounge an einem grossen Bildschirm.'
      }
    },
    {
      direction: 'left',
      heading: 'Lernen, simulieren, auswerten.',
      text: 'Schulungen, Simulationen und Nachweise werden in einer Plattform zusammengeführt. Verantwortliche sehen, welche Inhalte abgeschlossen wurden, wie sich Ergebnisse entwickeln und wo weiterer Handlungsbedarf besteht. Gerade bei sehr unterschiedlichen Unternehmensgrößen ist das entscheidend: Die Anforderungen reichen von kleinen Unternehmen mit wenigen Beschäftigten bis zu großen Organisationen mit mehreren Tausend Anwendern. So bleiben Maßnahmen nicht nur messbar, sondern auch intern erklärbar, für Audits besser nutzbar und im Zeitverlauf gezielt weiterentwickelbar.',
      image: createImage('Lernen und Auswerten in der Cyber Lounge')
    },
    {
      direction: 'right',
      heading: 'Nachweise schaffen, Fortschritt sichtbar machen.',
      text: 'Die Cyber Lounge eignet sich für einzelne Unternehmen ebenso wie für Partnerlösungen und White-Label-Szenarien. Die Plattform bündelt Schulungen, Phishing-Simulationen und organisatorische Nachweise in einem gemeinsamen, alltagstauglichen Rahmen. So lassen sich Sensibilisierung, Dokumentation und nachvollziehbare Auswertungen strukturiert zusammenführen, ohne dass einzelne Maßnahmen nebeneinander stehen bleiben. Die Cyber Lounge schafft damit eine verlässliche Grundlage, um Sicherheitsanforderungen im Unternehmen dauerhaft und praxisnah zu begleiten.',
      image: createImage('Nachweise in der Cyber Lounge')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Praxisnahe Sensibilisierung zeigt ihren Wert erst dann, wenn sie in unterschiedlichen Unternehmensgrößen funktioniert, Ergebnisse nachvollziehbar macht und Verantwortliche im Alltag entlastet. Zwei Beispiele zeigen, wie solche Anforderungen konkret zusammenfinden.',
      examples: [
        {
          title: 'Portal für fast 1.000 Versicherungsnehmer nutzbar gemacht.',
          text: 'Im Umfeld von Cyber-Policen wurde ein E-Learning-Portal aufgebaut, das von fast 1.000 Versicherungsnehmern und mehreren Zehntausend Anwendern genutzt wird. Die Plattform verbindet Schulungspläne, Lerninhalte, Prüfungen, Vorlagen und Phishing-Simulationen in einem strukturierten Ablauf. Entscheidend war dabei, dass das Angebot sowohl für kleine Unternehmen mit wenigen Beschäftigten als auch für große Organisationen mit mehreren Tausend Nutzern praktikabel bleibt. So entsteht kein loses Schulungsangebot, sondern ein belastbarer Prozess für Sensibilisierung und Nachweisbarkeit.'
        },
        {
          title: 'Cyber-Risiken verständlich und greifbar vermitteln.',
          text: 'Die Plattform wurde nicht nur für Schulung und Nachweis konzipiert, sondern auch dafür, Cyber-Risiken für Versicherungsnehmer verständlich darzustellen. Dadurch kann sie im Kundengespräch als unterstützendes Werkzeug eingesetzt werden, wenn erklärt werden soll, welche Anforderungen an Sensibilisierung, Passwortverhalten oder Phishing-Prävention praktisch relevant sind. Der Mehrwert liegt damit nicht nur in den Inhalten selbst, sondern auch darin, dass Sicherheitsanforderungen nachvollziehbar vermittelt und mit konkreten Funktionen hinterlegt werden können.'
        }
      ]
    }
  ]
};
