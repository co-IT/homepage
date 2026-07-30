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
      text: 'Fehlkonfigurationen bei Exchange-Migrationen, unsichere Tenant-Einstellungen, unklare Lizenzmodelle oder lückenhafte Berechtigungskonzepte sind häufige Stolpersteine. In der Praxis hängen an einer Migration aber oft noch deutlich mehr Themen: bestehende Domains, historische E-Mails, gemeinsam genutzte Postfächer, ERP-Schnittstellen, Bestellprozesse und Supportabläufe. Wir planen, testen und migrieren deshalb so, dass nicht nur die Technik umzieht, sondern die Kommunikation im Unternehmen stabil bleibt und bestehende Arbeitsprozesse nach der Umstellung besser statt komplizierter funktionieren.',
      image: {
        src: '/img/article-pages/microsoft-365-migration-exchange-tenant-detail.png',
        alt: 'IT-Berater verfolgt eine Microsoft-365-Migration mit Exchange-, Tenant- und Prozessschritten an zwei Monitoren.'
      }
    },
    {
      direction: 'right',
      heading: 'Nach der Migration beginnt die Betriebsdisziplin.',
      text: 'Nach der Migration beginnt die eigentliche Arbeit: persönliche und geteilte Postfächer sauber strukturieren, Zuständigkeiten klarer machen, SPF, DKIM, DMARC und weitere Schutzmechanismen korrekt betreiben sowie Exchange Online sinnvoll in bestehende Abläufe einbinden. Gerade wenn E-Mails für Support, Bestellungen oder ERP-Prozesse relevant sind, muss der Betrieb verlässlich tragen. Wir verbinden deshalb Administration, Sicherheit und Prozessverständnis, damit Microsoft 365 nicht nur eingeführt, sondern im Alltag dauerhaft sauber genutzt werden kann.',
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
          text: 'Bei einem Kunden wurde im Zuge eines neuen ERP-Systems auch die bestehende E-Mail-Infrastruktur modernisiert und nach Microsoft 365 überführt. Die Herausforderung bestand nicht nur in der Migration der Postfächer, sondern auch darin, bisherige E-Mail-Adressen, historische Nachrichten, gemeinsam genutzte Postfächer und die künftige ERP-Anbindung sauber mitzudenken. Zusätzlich wurden persönliche und geteilte Postfächer neu strukturiert, damit Zuständigkeiten klarer werden. Nach der Umstellung blieben Versand, Empfang und vorhandene E-Mails verfügbar, ohne dass für die Anwender spürbare Probleme auftraten.'
        },
        {
          title: 'E-Mail-Betrieb nach der Migration sicherer und klarer aufgestellt.',
          text: 'Neben der eigentlichen Migration wurde auch die Sicherheits- und Betriebsseite neu aufgesetzt. Dazu gehörten unter anderem SPF, DKIM, DMARC, DNSSEC und MTA-STS sowie Schutzmechanismen gegen Spam und Phishing. Gleichzeitig entstand eine Postfachstruktur mit persönlichen und geteilten Adressen, die besser zu Bestellungen, Support und benutzerspezifischen Berechtigungen in anderen Systemen passt. So wurde die Umstellung nicht nur technisch abgeschlossen, sondern in eine dauerhaft tragfähige Arbeitsgrundlage überführt.'
        }
      ]
    }
  ]
};
