import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { Section } from '~/components/section';

import { ContentOverlapPortrait, VideoOverlapLandscape } from '~/components/content-overlap';

import { HeadingSegmentSecondary, HeadingSegmentSecondary800 } from '~/components/heading-segment';

import { passwortManagerFeatures, ihreMarkeVideos, passwortManagerFeatures2 } from './resources';

import { LinkedHeading } from '~/components/link-heading';

import { YouTubeVideoGrid } from '~/components/youtube';
import { LinkCallToAction } from '../phishing/components';

import { ArticleCard } from '~/components/article-section/article-card';
import { CheckList } from '~/components/check-list';
import { HintCard } from '~/components/hint-card';

export default component$(() => {
  return (
    <>
      <Section>
        <ArticleCard
          article={{
            direction: 'right',
            image: {
              src: '/img/placeholder.svg',
              alt: 'Placeholder'
            },
            heading: 'Passwörtern den Schrecken nehmen',
            text: `Was haben das On /Offboarding von Mitarbeitern, die Vielfalt an Arbeitsgeräten und die DSGVO gemeinsam? Sie erfordern eine flexible, anwenderfreundliche und sichere Organisation von Passwörtern und vertraulichen Daten.

Durch unsere Spezialisierung auf die Geschäftsprozesse in kleinen und mittelständischen Unternehmen können wir dort starten, wo Sie sich gerade befinden. In kleinen Schritten adaptieren wir gemeinsam mit Ihnen die Organisation und den Einsatz von Passwörtern sowie digitaler Identitäten. Mittels flexibler und moderner Konzepte stärken Sie nachhaltig Ihre Unternehmenssicherheit.`
          }}
        ></ArticleCard>
      </Section>

      <Section id='funktionen' backgroundColor='gray'>
        <div class='flex flex-wrap-reverse items-center justify-between gap-y-5'>
          <section class='max-w-lg'>
            <HintCard>
              <ul class='ml-6 list-disc'>
                <li>
                  Unser Passwort-Manager wird in <span class='font-bold'>Deutschland gehostet</span>
                </li>
                <li>
                  Auf Wunsch kann das Produkt auch direkt auf <span class='font-bold'>Ihrer Infrastruktur</span>{' '}
                  betrieben werden
                </li>
              </ul>
            </HintCard>
          </section>
          <section class='flex max-w-xl flex-col gap-4 px-4'>
            <LinkedHeading href='#funktionen'>
              <HeadingSegmentSecondary text='Digitale Identitäten' />{' '}
              <HeadingSegmentSecondary800 text='sicher und zentral organisieren' />
            </LinkedHeading>
            <CheckList entries={passwortManagerFeatures} />
          </section>
        </div>
      </Section>

      <Section id='funktionen2'>
        <div class='flex flex-wrap items-center gap-x-32 gap-y-5'>
          <section class='flex max-w-xl flex-col gap-4 px-4'>
            <LinkedHeading href='#funktionen2'>
              <HeadingSegmentSecondary text='Vertrauliche Daten geschützt übermitteln' />
              {' - '}
              <HeadingSegmentSecondary800 text='ohne technische Hürden' />
            </LinkedHeading>
            <p>
              Mit unserem Passwortmanager ist es Ihnen möglich Inhalte, z.B. Texte oder Dateien, verschlüsselt in Form
              von sicheren Links an Ihre Geschäftspartner zu verschicken.
            </p>
            <p>
              Seien es vertrauliche Unterlagen für Ihren Wirtschaftsprüfer, Zugänge an externe Dienstleister oder
              Arbeitsvertäge an Ihre Bewerber.
            </p>
          </section>
          <section class='max-w-lg'>
            <div class='mx-auto flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-md'>
              <CheckList entries={passwortManagerFeatures2}></CheckList>
            </div>
          </section>
        </div>
      </Section>

      <div class='grid place-items-center'>
        <LinkCallToAction href='https://e.co-IT.eu/cyber/schulung' target='_blank'>
          Unkompliziert starten, flexibel anpassen, nachhaltig verbessern
        </LinkCallToAction>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Passwort-Manager',
  meta: [
    {
      name: 'description',
      content: 'Passwort-Manager für Unternehmen'
    },
    {
      name: 'keywords',
      content: 'Cyber-Produkt, Digitale Sicherheit, Passwort-Manager, Vaultwarden, Bitwarden'
    }
  ],

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/placeholder.svg',
          alt: 'Placeholder'
        },
        heading: 'Passwort-Manager',
        headingAccent: 'Passwort-Manager für Unternehmen'
      }
    },
    footer: {
      attributions: [
        {
          title: 'Designed by Freepik',
          images: [
            {
              title: 'Hervorstechen anders Sein',
              href: 'https://www.freepik.com/free-photo/close-up-cute-child-portrait_19917228.htm#query=anders%20sein&position=30&from_view=search&track=ais&uuid=c24d694c-a41f-4103-adcf-f2dbbc5da8be'
            },
            {
              title: 'Keyboard',
              href: 'https://de.freepik.com/fotos-kostenlos/vorderansichtarzt-der-medizinisches-element-haelt_12412966.htm#page=3&query=medizin%20baustein&position=13&from_view=search&track=ais&uuid=f0b16208-40f7-4803-915b-235db8c7ae36'
            }
          ]
        }
      ]
    }
  }
};
