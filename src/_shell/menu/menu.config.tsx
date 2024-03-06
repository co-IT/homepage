import { CareerIcon } from '../top-bar/icons/career-icon';
import { ServiceIcon } from '../top-bar/icons/service-icon';
import { TargetIcon } from '../top-bar/icons/target-icon';
import type { MenuConfig } from './types';

export const menuConfig: MenuConfig = {
  items: [
    {
      text: 'Für Unternehmen',
      ad: {
        headline: 'Sprechen Sie uns an',
        description:
          'Gemeinsam besprechen wir Ihre Bedarfe und setzen diese für Sie auf Wunsch um.',

        image: (
          <img
            src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp'
            width='193'
            height='233'
          />
        ),
        link: '/contact',
        ctaText: 'Kontakt aufnehmen'
      },
      items: [
        {
          text: 'Was wir bieten',
          isCategory: true,

          items: [
            {
              text: 'Lösungen',
              description: 'Alles aus einer Hand',
              path: '/solutions',
              icon: <TargetIcon />
            },
            {
              text: 'Qualität',
              description: 'Auf den Punkt abgestimmt',
              path: '/quality',
              icon: <ServiceIcon />
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
    {
      text: 'Cyber-Verteidigung',
      items: [
        {
          text: 'Produkte',
          isCategory: true,

          items: [
            {
              text: 'Cyber Lounge',
              description: 'Sicher fühlen. Sicher sein.',
              path: '/cyber-verteidigung/produkte/cyber-lounge',
              icon: <CareerIcon />
            },
            {
              text: 'Ihr Security Portal',
              description: 'Ihre eigene Cyber Lounge',
              path: '/cyber/ihre-marke',
              icon: <CareerIcon />
            },
            {
              text: 'Passwort-Manager',
              description: 'Digitale Identitäten sicher organisieren.',
              path: '/produkte/passwort-manager',
              icon: <CareerIcon />
            }
          ]
        },
        {
          text: 'Leistungen',
          isCategory: true,

          items: [
            {
              text: 'Sicherheitsaudit',
              description: 'Den Ernstfall proben',
              path: '/cyber-verteidigung/leistungen/e-mail-sicherheitsschulung',
              icon: <CareerIcon />
            },
            {
              text: 'E-Mail Sicherheitsschulung',
              description: 'Sicher fühlen, heißt nicht sicher sein',
              path: '/cyber-verteidigung/leistungen/sicherheitsaudit',
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
