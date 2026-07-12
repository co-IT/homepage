/* eslint-disable qwik/jsx-img */
import { AiStrategyIcon } from '../top-bar/icons/ai-strategy-icon';
import { AwarenessPortalIcon } from '../top-bar/icons/awareness-portal-icon';
import { CompanyIcon } from '../top-bar/icons/company-icon';
import { CyberSecurityIcon } from '../top-bar/icons/cyber-security-icon';
import { EnergyIndustryIcon } from '../top-bar/icons/energy-industry-icon';
import { HandcraftIndustryIcon } from '../top-bar/icons/handcraft-industry-icon';
import { HealthcareIndustryIcon } from '../top-bar/icons/healthcare-industry-icon';
import { InsuranceIndustryIcon } from '../top-bar/icons/insurance-industry-icon';
import { ManagedServicesIcon } from '../top-bar/icons/managed-services-icon';
import { ManufacturingIndustryIcon } from '../top-bar/icons/manufacturing-industry-icon';
import { MicrosoftCloudIcon } from '../top-bar/icons/microsoft-cloud-icon';
import { OnSiteServiceIcon } from '../top-bar/icons/on-site-service-icon';
import { PasswordManagerIcon } from '../top-bar/icons/password-manager-icon';
import { PhishingSimulationIcon } from '../top-bar/icons/phishing-simulation-icon';
import { PublicSectorIcon } from '../top-bar/icons/public-sector-icon';
import { RegionIcon } from '../top-bar/icons/region-icon';
import { SecurityCheckIcon } from '../top-bar/icons/security-check-icon';
import { ServiceIndustryIcon } from '../top-bar/icons/service-industry-icon';
import { SoftwareDevelopmentIcon } from '../top-bar/icons/software-development-icon';
import { TechnologyPartnerIcon } from '../top-bar/icons/technology-partner-icon';
import { WebsiteBuilderIcon } from '../top-bar/icons/website-builder-icon';
import { WholesaleIndustryIcon } from '../top-bar/icons/wholesale-industry-icon';
import { WorkingMethodIcon } from '../top-bar/icons/working-method-icon';
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
            alt='Team bespricht IT-Leistungen an einem Tablet'
            width='193'
            height='233'
            class='h-[14.5rem] w-48 object-cover'
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
              icon: <OnSiteServiceIcon />
            },
            {
              text: 'Managed Services',
              description: 'IT-Betrieb planbarer machen',
              path: '/leistungen/managed-services',
              icon: <ManagedServicesIcon />
            },
            {
              text: 'Microsoft 365 & Azure',
              description: 'Migration, Betrieb und Sicherheit',
              path: '/leistungen/microsoft-365-azure',
              icon: <MicrosoftCloudIcon />
            },
            {
              text: 'Cyber-Sicherheit',
              description: 'E-Mail, Awareness und Systeme',
              path: '/leistungen/cyber-sicherheit',
              icon: <CyberSecurityIcon />
            },
            {
              text: 'Web- & Softwareentwicklung',
              description: 'Anwendungen und Schnittstellen',
              path: '/leistungen/web-softwareentwicklung',
              icon: <SoftwareDevelopmentIcon />
            },
            {
              text: 'Digital- & KI-Strategie',
              description: 'Roadmaps für sinnvolle Umsetzung',
              path: '/leistungen/digital-ki-strategie',
              icon: <AiStrategyIcon />
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
            class='h-[14.5rem] w-48 object-cover'
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
              icon: <AwarenessPortalIcon />
            },
            {
              text: 'Phishing-Simulationen',
              description: 'Risiken im Alltag sichtbar machen',
              path: '/produkte-loesungen/phishing-simulationen',
              icon: <PhishingSimulationIcon />
            },
            {
              text: 'Passwort-Manager für Unternehmen',
              description: 'Zugänge kontrolliert verwalten',
              path: '/produkte-loesungen/passwort-manager-unternehmen',
              icon: <PasswordManagerIcon />
            },
            {
              text: 'Sicherheitschecks',
              description: 'E-Mail, DNS und Webseite prüfen',
              path: '/produkte-loesungen/sicherheitschecks',
              icon: <SecurityCheckIcon />
            },
            {
              text: 'Webseiten-Builder mit KI',
              description: 'Struktur und Inhalte schneller klären',
              path: '/produkte-loesungen/webseiten-builder-ki',
              icon: <WebsiteBuilderIcon />
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
            class='h-[14.5rem] w-48 object-cover'
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
              icon: <InsuranceIndustryIcon />
            },
            {
              text: 'Energiesektor',
              description: 'Stabile IT für kritische Prozesse',
              path: '/branchen/energiesektor',
              icon: <EnergyIndustryIcon />
            },
            {
              text: 'Gesundheitswesen',
              description: 'Sensible Daten verlässlich schützen',
              path: '/branchen/gesundheitswesen',
              icon: <HealthcareIndustryIcon />
            },
            {
              text: 'Großhandel',
              description: 'Schnittstellen und Abläufe beschleunigen',
              path: '/branchen/grosshandel',
              icon: <WholesaleIndustryIcon />
            },
            {
              text: 'Lohnfertiger',
              description: 'Produktionsnahe Prozesse modernisieren',
              path: '/branchen/lohnfertiger',
              icon: <ManufacturingIndustryIcon />
            },
            {
              text: 'Handwerk',
              description: 'IT, die im Alltag funktioniert',
              path: '/branchen/handwerk',
              icon: <HandcraftIndustryIcon />
            },
            {
              text: 'Dienstleister',
              description: 'Cloud, Kommunikation und Software',
              path: '/branchen/dienstleister',
              icon: <ServiceIndustryIcon />
            },
            {
              text: 'Behörden',
              description: 'Nachvollziehbare sichere Lösungen',
              path: '/branchen/behoerden',
              icon: <PublicSectorIcon />
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
        description: 'Pragmatischer Technologiepartner für Mittelstand, IT-Betrieb, Softwareentwicklung und Beratung.',
        image: (
          <img
            src='/img/about/team.webp'
            alt='co-IT Team'
            width='193'
            height='233'
            class='h-[14.5rem] w-48 object-cover'
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
              icon: <CompanyIcon />
            },
            {
              text: 'Region & Einsatzgebiet',
              description: 'Lokal vor Ort, digital deutschlandweit',
              path: '/ueber-uns/region-einsatzgebiet',
              icon: <RegionIcon />
            },
            {
              text: 'Arbeitsweise',
              description: 'Analysieren, umsetzen, betreuen',
              path: '/ueber-uns/arbeitsweise',
              icon: <WorkingMethodIcon />
            },
            {
              text: 'Technologien & Partner',
              description: 'Tragfähige Technologien sinnvoll einsetzen',
              path: '/ueber-uns/technologien-partner',
              icon: <TechnologyPartnerIcon />
            }
          ]
        }
      ]
    }
  ]
};
