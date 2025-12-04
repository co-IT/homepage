export const contractDocumentsByCategory: ContractDocumentsByCategory = [
  {
    category: 'Cyber Portal',
    documents: [
      {
        name: 'Basis-Paket: Neuerungen',
        versions: [
          {
            releasedAt: '05.12.2025',
            description: 'Suche, Kursverwaltung',
            url: 'https://e.co-it.eu/cyber-portal/release-notes/basis-1-0'
          }
        ]
      },
      {
        name: 'Premium-Pakete: Neuerungen',
        versions: [
          {
            releasedAt: '05.12.2025',
            description: 'Mehrfachaktionen',
            url: 'https://e.co-it.eu/cyber-portal/release-notes/premium-1-0'
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
