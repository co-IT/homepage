export const contractDocumentsByCategory: ContractDocumentsByCategory = [
  {
    category: 'Allgemeines',
    documents: [
      {
        name: 'AGB',
        version: '2',
        createdAt: '30.11.2023',
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/EcR6oU2HlNlCuzvzsQY43YwBFKOrPigAlmzLfT_cemTDNg?e=ZbltLx'
      }
    ]
  },
  {
    category: 'Cyber Lounge',
    documents: [
      {
        name: 'Nutzungsbedingungen',
        version: '1',
        createdAt: '28.02.2024',
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/EZPmd8gvdrhCpEDaMT6Dop8Bp66hzdQeTodg1-Ir8XrtZg?e=KcyXkK'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1',
        createdAt: '23.02.2024',
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/EQIqNFP3VbRCtIRDxuvhEcwBYql4VgpI4qsTakFuCadqfg?e=glBVmu'
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
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/ETLIzrA9t-NCgIwC8qH0s7IBHX5EGKA5S0znDnoEnqil-w?e=h9WDVS'
      },
      {
        name: 'Datenschutzerklärung',
        version: '1.1',
        createdAt: '09.04.2024',
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/EZVahRkg2LRPvJqyNwnhooMBQcrUVs5HdtPdtl8ETQaYYA?e=uHfgVN'
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
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/EaEKZlVJ8WRGvn7qRKJr-3cBH-cmMD4XVjTC1-Tb_UnHzw?e=eqHzqP'
      },
      {
        name: 'Nutzungsbedingungen',
        version: '1.1',
        createdAt: '23.05.2024',
        url: 'https://coiteu-my.sharepoint.com/:b:/g/personal/uli_armbruster_co-it_eu/EezyUlic12BFlusELPR3EDEBcI4rW61WHv5FawyX8TCbtw?e=jdbbGd'
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
