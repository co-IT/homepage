export const contractDocumentsByCategory: ContractDocumentsByCategory = [
  {
    category: 'Allgemeines',
    documents: [
      {
        name: 'AGB',
        versions: [
          {
            version: '2.1',
            validFrom: '27.10.2025',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/AGB_v2.1.pdf'
          },
          {
            version: '2.0',
            validFrom: '30.11.2023',
            validTo: '26.10.2025',
            url: 'https://dl.co-it.eu/kontrakte/AGB_v2.0.pdf'
          },
          {
            version: '1.0',
            validFrom: '04.05.2022',
            validTo: '29.11.2023',
            url: 'https://dl.co-it.eu/kontrakte/AGB_v1.0.pdf'
          }
        ]
      },
      {
        name: 'Datenschutzerklärung',
        versions: [
          {
            version: '2.2',
            validFrom: '27.10.2025',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Website_Datenschutz_v2.2.pdf'
          },
          {
            version: '2.1',
            validFrom: '01.07.2025',
            validTo: '26.10.2025',
            url: 'https://dl.co-it.eu/kontrakte/Website_Datenschutz_v2.1.pdf'
          },
          {
            version: '2.0',
            validFrom: '25.04.2023',
            validTo: '30.06.2025',
            url: 'https://dl.co-it.eu/kontrakte/Website_Datenschutz_v2.0.pdf'
          }
        ]
      }
    ]
  },
  {
    category: 'Cyber Lounge',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        versions: [
          {
            version: '1.0',
            validFrom: '28.02.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Lounge Nutzungsbedingungen v1.0.pdf'
          }
        ]
      },
      {
        name: 'Datenschutzerklärung',
        versions: [
          {
            version: '1.0',
            validFrom: '23.02.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Lounge_Datenschutzerklärung_v1.0.pdf'
          }
        ]
      },
      {
        name: 'Leistungsumfang',
        versions: [
          {
            version: '1.0',
            validFrom: '23.02.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Lounge_Leistungsumfang_v1.0.pdf'
          }
        ]
      }
    ]
  },
  {
    category: 'Cyber Portal',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        versions: [
          {
            version: '1.1',
            validFrom: '09.04.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Nutzungsbedingungen_v1.1.pdf'
          },
          {
            version: '1.0',
            validFrom: '14.03.2021',
            validTo: '08.04.2024',
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Nutzungsbedingungen_v1_0.pdf'
          }
        ]
      },
      {
        name: 'Datenschutzerklärung',
        versions: [
          {
            version: '1.1',
            validFrom: '09.04.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Datenschutzerklärung_v1.1.pdf'
          },
          {
            version: '1.0',
            validFrom: '14.03.2021',
            validTo: '08.04.2024',
            url: 'https://dl.co-it.eu/kontrakte/Cyber_Portal_Datenschutzerklärung v1.0.pdf'
          }
        ]
      }
    ]
  },
  {
    category: 'Passwortmanager',
    documents: [
      {
        name: 'AVV',
        versions: [
          {
            version: '1.1',
            validFrom: '23.05.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Passwort-Manager_AVV_v1.1.pdf  '
          }
        ]
      },
      {
        name: 'Nutzungsbedingungen',
        versions: [
          {
            version: '1.1',
            validFrom: '23.05.2024',
            validTo: undefined,
            url: 'https://dl.co-it.eu/kontrakte/Passwort-Manager_Nutzungsbedingungen_ v1.1.pdf'
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
  version: string;
  url: string;
  validFrom: string;
  validTo?: string;
};
