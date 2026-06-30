import { AnalysisIcon } from '../top-bar/icons/analysis-icon';
import { CareerIcon } from '../top-bar/icons/career-icon';
import { ContractIcon } from '../top-bar/icons/contract-icon';
import { LeadershipIcon } from '../top-bar/icons/leadership-icon';
import { ServiceIcon } from '../top-bar/icons/service-icon';
import { TargetIcon } from '../top-bar/icons/target-icon';
import { ToolsIcon } from '../top-bar/icons/tools-icon';
import type { MenuConfig } from './types';

export const menuConfig: MenuConfig = {
  items: [
    {
      text: 'Leistungen',
      path: '/leistungen',
      ad: {
        headline: 'IT-Leistungen abstimmen',
        description:
          'Gemeinsam klären wir, welche Leistungen zu Betrieb, Sicherheit und Wachstum Ihres Unternehmens passen.',

        image: (
          <img
            src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp'
            width='193'
            height='233'
          />
        ),
        link: '/contact',
        ctaText: 'Beratung anfragen'
      },
      items: [
        {
          text: 'Leistungen',
          isCategory: true,

          items: [
            {
              text: 'IT-Service Ortenaukreis',
              description: 'Schnell, persönlich, vor Ort',
              path: '/leistungen/it-service-ortenaukreis',
              icon: <ToolsIcon />
            },
            {
              text: 'Managed Services',
              description: 'IT-Betrieb planbarer machen',
              path: '/leistungen/managed-services',
              icon: <ServiceIcon />
            },
            {
              text: 'Microsoft 365 & Azure',
              description: 'Migration, Betrieb und Sicherheit',
              path: '/leistungen/microsoft-365-azure',
              icon: <ContractIcon />
            },
            {
              text: 'Cyber-Sicherheit',
              description: 'E-Mail, Awareness und Systeme',
              path: '/leistungen/cyber-sicherheit',
              icon: <TargetIcon />
            },
            {
              text: 'Web- & Softwareentwicklung',
              description: 'Anwendungen und Schnittstellen',
              path: '/leistungen/web-softwareentwicklung',
              icon: <AnalysisIcon />
            },
            {
              text: 'Digital- & KI-Strategie',
              description: 'Roadmaps für sinnvolle Umsetzung',
              path: '/leistungen/digital-ki-strategie',
              icon: <LeadershipIcon />
            }
          ]
        }
      ]
    },
    {
      text: 'Für Talente',
      ad: {
        headline: 'In Aufbruchstimmung',
        description:
          'Suchst du nach neuen Herausforderungen? Wir freuen uns auf deine Bewerbung!',

        image: (
          <img
            src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp'
            width='193'
            height='233'
          />
        ),
        link: 'https://karriere.co-it.eu/o/initiativbewerbung',
        ctaText: 'Initiativ bewerben'
      },
      items: [
        {
          text: 'Arbeite mit uns',
          isCategory: true,

          items: [
            {
              text: 'Karriere',
              description: 'Geprägt durch Menschen',
              path: '/career',
              icon: <CareerIcon />
            }
          ]
        }
      ]
    },
    { text: 'Über uns', path: '/about' },
    { text: 'Kontakt', path: '/contact', isCta: true }
  ]
};
