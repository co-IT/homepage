export const contractDocumentsByCategory: ContractDocumentsByCategory = [
  {
    category: 'Cyber Portal',
    documents: [
      {
        name: 'Basis-Paket: Neuerungen',
        versions: [
          {
            releasedAt: '13.03.2026',
            description: 'Reminder, Aktivitätskompass, neue Prüfung',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-basis_1-3.pdf'
          },
          {
            releasedAt: '26.02.2026',
            description: 'Schulungsmanagement, Aufklärungsseite',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-basis_1-2.pdf'
          },
          {
            releasedAt: '26.01.2026',
            description: 'Webinare, Phishing-Termine',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-basis_1-1.pdf'
          },
          {
            releasedAt: '05.12.2025',
            description: 'Suche, Kursverwaltung',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-basis_1-0.pdf'
          }
        ]
      },
      {
        name: 'Premium-Pakete: Neuerungen',
        versions: [
          {
            releasedAt: '13.03.2026',
            description: 'Personalisiertes Melden, Eigene Richtlinie erweitert',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-premium_1-3.pdf'
          },
          {
            releasedAt: '26.02.2026',
            description: 'Eigene Richtlinie in Aufklärungsseite',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-premium_1-2.pdf'
          },
          {
            releasedAt: '26.01.2026',
            description: 'Phishing-Simulationen deaktivieren',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-premium_1-1.pdf'
          },
          {
            releasedAt: '05.12.2025',
            description: 'Mehrfachaktionen',
            url: 'https://stcpmediaprod.blob.core.windows.net/cyber-portal-prod-release-notes/cyber-portal-premium_1-0.pdf'
          }
        ]
      }
    ]
  }
];

export type ContractDocumentsByCategory = {
  category: string;
  documents: ContractDocument[];
}[];

type ContractDocument = {
  name: string;
  versions: ContractDocumentVersion[];
};

type ContractDocumentVersion = {
  url: string;
  releasedAt: string;
  description: string;
};
