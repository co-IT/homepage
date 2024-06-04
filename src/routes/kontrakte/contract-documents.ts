export const contractDocumentsByCategory: ContractDocumentsByCategory = [
  {
    category: 'Allgemeines',
    documents: [
      {
        name: 'AGB',
        version: '2',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FAGB%20v2%20vom%202024%2D05%2D23%20final%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
      }
    ]
  },
  {
    category: 'Cyber Lounge',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        version: '1',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FCyber%20Lounge%20Nutzungsbedingungen%20v1%2E0%20final%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FCyber%20Lounge%20Datenschutzerkl%C3%A4rung%20v1%2E0%2Efinal%20docx%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
      }
    ]
  },
  {
    category: 'Cyber Portal',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        version: '1.1',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FCyber%20Portal%20Nutzungsbedingungen%20v1%2E1%20final%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1.1',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FCyber%20Portal%20Datenschutzerkl%C3%A4rung%20v1%2E1%2Efinal%20docx%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
      }
    ]
  },
  {
    category: 'Passwortmanager',
    documents: [
      {
        name: 'AVV',
        version: '1.1',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FAVV%20Passwort%2DManager%20v1%2E1%20final%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
      },
      {
        name: 'Nutzungsbedingungen',
        version: '1.1',
        createdAt: '03.06.2024',
        url: 'https://coiteu-my.sharepoint.com/personal/uli_armbruster_co-it_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente%2FNutzungsbedingungen%20Passwort%2DManager%20v1%2E1%20final%2Epdf&parent=%2Fpersonal%2Fuli%5Farmbruster%5Fco%2Dit%5Feu%2FDocuments%2FShared%2Fco%2DIT%2FVertragsdokumente&ga=1'
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
