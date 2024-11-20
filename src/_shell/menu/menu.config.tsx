import { CareerIcon } from '../top-bar/icons/career-icon';
import { ServiceIcon } from '../top-bar/icons/service-icon';
import { TargetIcon } from '../top-bar/icons/target-icon';
import type { MenuConfig } from './types';
import { PasswordManagerIcon } from '../top-bar/icons/password-manager-icon';
import { EmailSicherheitsschulungIcon } from '~/_shell/top-bar/icons/email-sicherheitsschulung-icon';
import { ItSicherheitsauditIcon } from '~/_shell/top-bar/icons/it-sicherheitsaudit-icon';
import { RgpdIcon } from '~/_shell/top-bar/icons/rgpd-icon';
import { CyberPortalIcon } from '~/_shell/top-bar/icons/cyber-portal-icon';

export const menuConfig: MenuConfig = {
  items: [
    {
      text: 'Für Unternehmen',
      ad: {
        headline: 'Sprechen Sie uns an',
        description: 'Gemeinsam besprechen wir Ihre Bedarfe und setzen diese für Sie auf Wunsch um.',

        image: <img src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp' width='193' height='233' />,
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
        },
        {
          text: 'Cyber Portfolio',
          isCategory: true,

          items: [
            {
              text: 'Cyber Portal',
              description: 'Sicher fühlen. Sicher sein.',
              path: '/cyber/cyber-portal',
              icon: <CyberPortalIcon />
            },
            {
              text: 'E-Mail-Sicherheitsschulung',
              description: 'TODO',
              path: '/cyber/email-sicherheitsschulung',
              icon: <EmailSicherheitsschulungIcon />
            },
            {
              text: 'Passwort-Manager',
              description: 'Passwort-Manager für Unternehmen',
              path: '/cyber/passwort-manager',
              icon: <PasswordManagerIcon />
            },
            {
              text: 'IT-Sicherheitsaudit',
              description: 'TODO',
              path: '/cyber/it-sicherheitsaudit',
              icon: <ItSicherheitsauditIcon />
            },
            {
              text: 'RGPD',
              description: 'TODO',
              path: '/cyber/rgpd',
              icon: <RgpdIcon />
            }
          ]
        }
      ]
    },
    {
      text: 'Für Talente',
      ad: {
        headline: 'In Aufbruchstimmung',
        description: 'Suchst du nach neuen Herausforderungen? Wir freuen uns auf deine Bewerbung!',

        image: <img src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp' width='193' height='233' />,
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
