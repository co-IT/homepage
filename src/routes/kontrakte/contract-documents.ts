export const contractDocumentsByCategory: ContractDocumentsByCategory = [
  {
    category: 'Allgemeines',
    documents: [
      {
        name: 'AGB',
        version: '2.0',
        createdAt: '30.11.2023',
        url: 'https://dl.co-it.eu/kontrakte/AGB_v2.0.pdf'
      },
      {
        name: 'AGB',
        version: '1.0',
        createdAt: '04.05.2022',
        url: 'https://dl.co-it.eu/kontrakte/AGB_v1.0.pdf'
      },
      {
        name: 'Datenschutzerklärung',
        version: '2.1',
        createdAt: '01.07.2025',
        url: 'https://dl.co-it.eu/kontrakte/Website_Datenschutz_v2.1.pdf'
      },
      {
        name: 'Datenschutzerklärung',
        version: '2.0',
        createdAt: '25.04.2023',
        url: 'https://dl.co-it.eu/kontrakte/Website_Datenschutz_v2.0.pdf'
      }
    ]
  },
  {
    category: 'Cyber Lounge',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        version: '1.0',
        createdAt: '28.02.2024',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Lounge Nutzungsbedingungen v1.0.pdf'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1.0',
        createdAt: '23.02.2024',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Lounge_Datenschutzerklärung_v1.0.pdf'
      },
      {
        name: 'Leistungsumfang',
        version: '1.0',
        createdAt: '23.02.2024',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Lounge_Leistungsumfang_v1.0.pdf'
      }
    ]
  },
  {
    category: 'Cyber Portal',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        version: '1.1',
        createdAt: '09.04.2024',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Nutzungsbedingungen_v1.1.pdf'
      },
      {
        name: 'Nutzungsbedingungen',
        version: '1.0',
        createdAt: '14.03.2021',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Nutzungsbedingungen_v1_0.pdf'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1.1',
        createdAt: '09.04.2024',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Datenschutzerklärung_v1.1.pdf'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1.0',
        createdAt: '14.03.2021',
        url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Datenschutzerklärung v1.0.pdf'
      }
    ]
  },
  {
    category: 'Passwortmanager',
    documents: [
      {
        name: 'AVV',
        version: '1.1',
        createdAt: '23.05.2024',
        url: 'https://dl.co-it.eu/kontrakte/Passwort-Manager_AVV_v1.1.pdf  '
      },
      {
        name: 'Nutzungsbedingungen',
        version: '1.1',
        createdAt: '23.05.2024',
        url: 'https://dl.co-it.eu/kontrakte/Passwort-Manager_Nutzungsbedingungen_ v1.1.pdf'
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
  version: string;
  createdAt: string;
  url: string;
};
