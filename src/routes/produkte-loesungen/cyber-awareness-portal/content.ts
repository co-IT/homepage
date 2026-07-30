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
      image: createImage('Cyber Lounge')
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
        'Praxisnahe Sensibilisierung zeigt ihren Wert erst dann, wenn sie in unterschiedlichen Unternehmensgrößen funktioniert, Ergebnisse nachvollziehbar macht und Verantwortliche im Alltag entlastet. Zwei Beispiele aus der Praxis zeigen, wie Schulungen, Simulationen und Nachweise in einem gemeinsamen Rahmen sinnvoll zusammengeführt werden können.',
      examples: [
        {
          title: 'Anforderungen aus dem Versicherungsumfeld in eine nutzbare Plattform übersetzen.',
          text: 'In einem Projekt für eine namhafte deutsche Versicherung wurde ein E-Learning-Portal entwickelt, das Versicherungsnehmern im Rahmen ihres Vertrags zur Verfügung gestellt wird. Die Herausforderung bestand darin, Anforderungen aus Versicherungsbedingungen in konkrete und alltagstaugliche Funktionen zu übersetzen. So mussten Schulungen, Prüfungen, Phishing-Simulationen und Vorlagen so aufbereitet werden, dass sie für sehr unterschiedliche Unternehmensgrößen nutzbar bleiben. Das Beispiel zeigt, wie aus allgemeinen Anforderungen eine strukturierte Plattform entstehen kann, die Sensibilisierung planbar, nachvollziehbar und dauerhaft umsetzbar macht.'
        },
        {
          title: 'Nachweise und Auswertungen für viele Anwender übersichtlich nutzbar machen.',
          text: 'Im Versicherungskontext zeigte sich außerdem, wie wichtig nachvollziehbare Auswertungen und dokumentierte Nachweise sind, wenn sehr viele Anwender und Unternehmen betreut werden. Schulungsstände, Prüfergebnisse und weitere Maßnahmen dürfen dann nicht in einzelnen Insellösungen verstreut sein. Erst wenn diese Informationen gebündelt vorliegen, können Verantwortliche Entwicklungen sinnvoll einordnen, Handlungsbedarf erkennen und nächste Schritte gezielt ableiten. Genau darin liegt der praktische Wert einer Plattform, die Schulungen, Simulationen und Dokumentation in einem gemeinsamen Rahmen zusammenführt.'
        }
      ]
    }
  ]
};
