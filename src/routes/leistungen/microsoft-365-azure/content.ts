import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const microsoft365Azure: PageContent = {
  title: 'co-IT - Microsoft 365 und Azure',
  metaDescription:
    'Microsoft 365 und Azure für Unternehmen: Migration, sichere Konfiguration, Teams, SharePoint, Exchange, Backup, Lizenzen und Betrieb.',
  headerHeading: 'Microsoft 365 & Azure',
  headerSubheading: 'Von Azure bis Teams',
  backgroundImage: createBackgroundImage('Microsoft 365 und Azure'),
  contentHeading: 'Microsoft 365 und Azure für Unternehmen',
  articles: [
    {
      direction: 'right',
      heading: 'Microsoft im Griff. Von Azure bis Teams.',
      text: 'Microsoft 365 und Azure sind für viele kleine und mittelständische Unternehmen das Fundament moderner Zusammenarbeit. Wir sorgen dafür, dass Sie jederzeit den Überblick behalten: über Nutzer, Sicherheit und Systeme. Von der Migration über sichere Grundeinstellungen bis zum laufenden Betrieb von Teams, SharePoint, Exchange, Backup, Lizenzmanagement und Azure.',
      image: createImage('Microsoft 365 und Azure')
    },
    {
      direction: 'left',
      heading: 'Migration mit Blick auf die tatsächliche Systemlandschaft.',
      text: 'Bei Microsoft-365-Migrationen geht es oft nicht nur um Postfächer, Domains und technische Grundeinstellungen. In vielen Unternehmen hängen daran zentrale Sammelpostfächer, historische E-Mails, unklare Bearbeitungszuständigkeiten und Prozessschritte, die bis in Warenwirtschaft, Bestellwesen oder Support reichen. Wir planen, testen und migrieren deshalb so, dass nicht nur die Technik umzieht, sondern Kommunikation, Verantwortlichkeiten und angeschlossene Arbeitsabläufe nach der Umstellung stabil und nachvollziehbar weiterlaufen.',
      image: {
        src: '/img/article-pages/microsoft-365-migration-exchange-tenant-detail.png',
        alt: 'IT-Berater verfolgt eine Microsoft-365-Migration mit Exchange-, Tenant- und Prozessschritten an zwei Monitoren.'
      }
    },
    {
      direction: 'right',
      heading: 'Nach der Migration beginnt die Betriebsdisziplin.',
      text: 'Nach der Migration beginnt der eigentliche Betriebsnutzen: Postfächer müssen zu den realen Zuständigkeiten passen, eingehende Nachrichten sauber bearbeitet werden können und E-Mail-Kommunikation darf nicht als loses Nebensystem neben der Warenwirtschaft weiterlaufen. Gleichzeitig sorgen SPF, DKIM, DMARC, DNSSEC und weitere Schutzmechanismen dafür, dass Sicherheit und Zustellbarkeit nicht dem Zufall überlassen bleiben. So wird Microsoft 365 nicht nur technisch eingeführt, sondern als verlässlicher Teil der täglichen Arbeitsprozesse nutzbar gemacht.',
      image: createImage('Microsoft-365-Betrieb')
    },
    {
      type: 'practice-slider',
      heading: 'Aus der Praxis',
      intro:
        'Migrationen gelingen nicht dadurch, dass Postfächer nur technisch verschoben werden. Entscheidend ist, dass bestehende Kommunikation, Zuständigkeiten und angeschlossene Prozesse danach sauber weiterlaufen. Zwei Beispiele zeigen, worauf es im Alltag ankommt.',
      examples: [
        {
          title: 'E-Mail-Migration mit ERP-Anbindung ohne spürbare Unterbrechung.',
          text: 'Bei einem produzierenden Betrieb wurde mit der Einführung eines neuen Warenwirtschaftssystems auch die bestehende E-Mail-Infrastruktur neu organisiert und nach Microsoft 365 überführt. Zuvor arbeiteten mehrere Mitarbeitende in zentralen Sammelpostfächern, ohne dass Bearbeitungsstände und Verantwortlichkeiten immer klar nachvollziehbar waren. Im Zuge der Umstellung wurden persönliche und geteilte Postfächer neu strukturiert, bisherige Adressen und vorhandene Nachrichten migriert und die E-Mail-Kommunikation direkt in die Warenwirtschaft eingebunden. Dadurch müssen Bestell-, Kunden- und Auftragsdaten nicht mehr manuell aus E-Mails übertragen werden, Bearbeitungsschritte bleiben nachvollziehbar und die Umstellung verlief im Arbeitsalltag nahezu unbemerkt.'
        },
        {
          title: 'E-Mail-Betrieb nach der Migration sicherer und klarer aufgestellt.',
          text: 'Neben der eigentlichen Migration wurde auch die Sicherheits- und Betriebsseite neu aufgesetzt. Dazu gehörten unter anderem SPF, DKIM, DMARC, DNSSEC und MTA-STS sowie Schutzmechanismen gegen Spam und Phishing. Gleichzeitig entstand eine Postfachstruktur mit persönlichen und geteilten Adressen, die besser zu Bestellungen, Support und benutzerspezifischen Berechtigungen in anderen Systemen passt. So wurde die Umstellung nicht nur technisch abgeschlossen, sondern in eine dauerhaft tragfähige Arbeitsgrundlage überführt.'
        }
      ]
    }
  ]
};
