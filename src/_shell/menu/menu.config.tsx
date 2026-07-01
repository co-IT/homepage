/* eslint-disable qwik/jsx-img */
import { AnalysisIcon } from '../top-bar/icons/analysis-icon';
import { ContractIcon } from '../top-bar/icons/contract-icon';
import { FaqIcon } from '../top-bar/icons/faq-icon';
import { LeadershipIcon } from '../top-bar/icons/leadership-icon';
import { PeopleIcon } from '../top-bar/icons/people-icon';
import { ServiceIcon } from '../top-bar/icons/service-icon';
import { TargetIcon } from '../top-bar/icons/target-icon';
import { ToolsIcon } from '../top-bar/icons/tools-icon';
import type { MenuConfig } from './types';

const navAdImageClass = 'h-[14.5rem] w-48 object-cover';

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
            alt='Team bespricht IT-Leistungen an einem Tablet'
            width='193'
            height='233'
            class={navAdImageClass}
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
      text: 'Produkte & Lösungen',
      path: '/produkte-loesungen',
      ad: {
        headline: 'Digitale Lösungen einordnen',
        description:
          'Wir prüfen, welche Plattform, welches Produkt oder welcher Check konkret zu Ihrer Situation passt.',
        image: (
          <img
            src='/img/cyber/cyber-portal/header.webp'
            alt='Cyber-Awareness-Portal auf einem Bildschirm'
            width='193'
            height='233'
            class={navAdImageClass}
          />
        ),
        link: '/contact',
        ctaText: 'Lösung besprechen'
      },
      items: [
        {
          text: 'Produkte & Lösungen',
          isCategory: true,
          items: [
            {
              text: 'Cyber-Awareness-Portal',
              description: 'Trainings, Nachweise und Simulationen',
              path: '/produkte-loesungen/cyber-awareness-portal',
              icon: <TargetIcon />
            },
            {
              text: 'Phishing-Simulationen',
              description: 'Risiken im Alltag sichtbar machen',
              path: '/produkte-loesungen/phishing-simulationen',
              icon: <FaqIcon />
            },
            {
              text: 'Passwort-Manager für Unternehmen',
              description: 'Zugänge kontrolliert verwalten',
              path: '/produkte-loesungen/passwort-manager-unternehmen',
              icon: <ContractIcon />
            },
            {
              text: 'Sicherheitschecks',
              description: 'E-Mail, DNS und Webseite prüfen',
              path: '/produkte-loesungen/sicherheitschecks',
              icon: <AnalysisIcon />
            },
            {
              text: 'Webseiten-Builder mit KI',
              description: 'Struktur und Inhalte schneller klären',
              path: '/produkte-loesungen/webseiten-builder-ki',
              icon: <ToolsIcon />
            }
          ]
        }
      ]
    },
    {
      text: 'Branchen',
      path: '/branchen',
      ad: {
        headline: 'Branchenkontext verstehen',
        description:
          'Wir betrachten IT, Sicherheit und Software immer im Kontext Ihrer Abläufe, Risiken und Prioritäten.',
        image: (
          <img
            src='/img/about/team-reviewing-a-solution.webp'
            alt='Team prüft eine Lösung gemeinsam am Arbeitsplatz'
            width='193'
            height='233'
            class={navAdImageClass}
          />
        ),
        link: '/contact',
        ctaText: 'Bedarf klären'
      },
      items: [
        {
          text: 'Branchen',
          isCategory: true,
          items: [
            {
              text: 'Versicherungen',
              description: 'Vertrauen digital absichern',
              path: '/branchen/versicherungen',
              icon: <ContractIcon />
            },
            {
              text: 'Energiesektor',
              description: 'Stabile IT für kritische Prozesse',
              path: '/branchen/energiesektor',
              icon: <TargetIcon />
            },
            {
              text: 'Gesundheitswesen',
              description: 'Sensible Daten verlässlich schützen',
              path: '/branchen/gesundheitswesen',
              icon: <PeopleIcon />
            },
            {
              text: 'Großhandel',
              description: 'Schnittstellen und Abläufe beschleunigen',
              path: '/branchen/grosshandel',
              icon: <AnalysisIcon />
            },
            {
              text: 'Lohnfertiger',
              description: 'Produktionsnahe Prozesse modernisieren',
              path: '/branchen/lohnfertiger',
              icon: <ToolsIcon />
            },
            {
              text: 'Handwerk',
              description: 'IT, die im Alltag funktioniert',
              path: '/branchen/handwerk',
              icon: <ServiceIcon />
            },
            {
              text: 'Dienstleister',
              description: 'Cloud, Kommunikation und Software',
              path: '/branchen/dienstleister',
              icon: <LeadershipIcon />
            },
            {
              text: 'Behörden',
              description: 'Nachvollziehbare sichere Lösungen',
              path: '/branchen/behoerden',
              icon: <FaqIcon />
            }
          ]
        }
      ]
    },
    {
      text: 'Über uns',
      path: '/ueber-uns',
      ad: {
        headline: 'co-IT kennenlernen',
        description:
          'Pragmatischer Technologiepartner für Mittelstand, IT-Betrieb, Softwareentwicklung und Beratung.',
        image: (
          <img
            src='/img/about/team.webp'
            alt='co-IT Team'
            width='193'
            height='233'
            class={navAdImageClass}
          />
        ),
        link: '/contact',
        ctaText: 'Kontakt aufnehmen'
      },
      items: [
        {
          text: 'Über uns',
          isCategory: true,
          items: [
            {
              text: 'Unternehmen',
              description: 'IT, Software und Beratung aus einer Hand',
              path: '/ueber-uns/unternehmen',
              icon: <PeopleIcon />
            },
            {
              text: 'Region & Einsatzgebiet',
              description: 'Lokal vor Ort, digital deutschlandweit',
              path: '/ueber-uns/region-einsatzgebiet',
              icon: <TargetIcon />
            },
            {
              text: 'Arbeitsweise',
              description: 'Analysieren, umsetzen, betreuen',
              path: '/ueber-uns/arbeitsweise',
              icon: <AnalysisIcon />
            },
            {
              text: 'Technologien & Partner',
              description: 'Tragfähige Technologien sinnvoll einsetzen',
              path: '/ueber-uns/technologien-partner',
              icon: <ToolsIcon />
            }
          ]
        }
      ]
    }
  ]
};
