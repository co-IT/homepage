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
            url: 'https://e.co-IT.eu/cyber-portal/cyber-portal-basis_1-0.pdf'
          }
        ]
      },
      {
        name: 'Premium-Pakete: Neuerungen',
        versions: [
          {
            releasedAt: '05.12.2025',
            description: 'Mehrfachaktionen',
            url: 'https://e.co-IT.eu/cyber-portal/cyber-portal-premium_1-0.pdf'
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
