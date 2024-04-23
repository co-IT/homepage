import {
  component$,
  useComputed$,
  useSignal,
  useStore,
  useStyles$,
  useTask$
} from '@builder.io/qwik';

import { Section } from '~/components/section';

import {
  ContentOverlapPortrait,
  VideoOverlapLandscape
} from '~/components/content-overlap';

import {
  HeadingSegmentSecondary,
  HeadingSegmentSecondary800
} from '~/components/heading-segment';
import { LinkCallToAction } from '~/components/link-call-to-action';

import { ShieldCheckmarkIcon } from '~/components/icons/shield-checkmark-icon';
import { StarIcon } from '~/components/icons/star-icon';
import { ThumbsUpIcon } from '~/components/icons/thumbs-up-icon';
import { YouTubeVideoGrid } from '~/components/youtube';

import {
  cyberVerantwortlicheVideos,
  expertFeatures,
  profiFeatures,
  starterFeatures,
  wuerttembergischeFeatures
} from './resources';

import type { DocumentHead } from '@builder.io/qwik-city';
import { LinkedHeading } from '~/components/link-heading';
import { PricePerUsePerMonth } from '~/components/pricing/price-per-user-per-month';
import { ProductFeatureList } from '~/components/product-feature-list';

import { CyberLoungeLogo } from '../../../components/cyber-lounge-logo/cyber-lounge-logo';
import style from './styles.css?inline';

export default component$(() => {
  useStyles$(style);

  const userCountSig = useSignal<string>('10');
  const rangeValueSig = useSignal<string>('1');

  const pricingTier = useStore({
    starter: {
      pricePerUserPerMonth: 0,
      pricePerMonth: 0
    },
    professional: {
      pricePerUserPerMonth: 0,
      pricePerYearMonth: 0
    },
    expert: {
      pricePerUserPerMonth: 0,
      pricePerMonth: 0
    }
  });

  const durationInMonthSig = useComputed$(() => {
    const durationMonthMap = {
      1: 1,
      2: 3,
      3: 6,
      4: 12,
      5: 18,
      6: 24,
      7: 36,
      8: 48
    } as const;

    const range = rangeValueSig.value || 1;

    //@ts-ignore
    return durationMonthMap[range] as number;
  });

  const discountSig = useComputed$(() => {
    const discountsAccordingToTerm = {
      1: 0,
      3: 0.02,
      6: 0.04,
      12: 0.1,
      18: 0.12,
      24: 0.15,
      36: 0.18,
      48: 0.2
    } as const;

    // @ts-ignore
    return discountsAccordingToTerm[durationInMonthSig.value];
  });

  useTask$(({ track }) => {
    const userCount = track(() => userCountSig.value);
    const discount = track(() => discountSig.value);

    if (discount === undefined) {
      return;
    }

    updatePrices(+userCount);

    function updatePrices(userCount: number) {
      const basePrice = calculateBasePrice(userCount);

      pricingTier.starter.pricePerUserPerMonth =
        basePrice - basePrice * discount;

      pricingTier.starter.pricePerMonth =
        pricingTier.starter.pricePerUserPerMonth * userCount;

      pricingTier.professional.pricePerUserPerMonth =
        basePrice * 1.3 - basePrice * 1.3 * discount;

      pricingTier.professional.pricePerYearMonth =
        pricingTier.professional.pricePerUserPerMonth * userCount;

      pricingTier.expert.pricePerUserPerMonth =
        basePrice * 2 - basePrice * 2 * discount;

      pricingTier.expert.pricePerMonth =
        pricingTier.expert.pricePerUserPerMonth * userCount;
    }

    function calculateBasePrice(wantedUsers: number) {
      wantedUsers = wantedUsers < 1 ? 1 : wantedUsers;
      const pricingBronze = [
        { user: 1, price: 20 },
        { user: 5, price: 5 },
        { user: 10, price: 3 },
        { user: 25, price: 2.75 },
        { user: 50, price: 2.5 },
        { user: 75, price: 1.5 },
        { user: 100, price: 1 },
        { user: 200, price: 0.93 },
        { user: 250, price: 0.84 },
        { user: 500, price: 0.6 },
        { user: 750, price: 0.5 },
        { user: 1000, price: 0.4 },
        { user: 2000, price: 0.38 },
        { user: 3000, price: 0.36 },
        { user: 4000, price: 0.34 },
        { user: 5000, price: 0.32 },
        { user: 6000, price: 0.3 }
      ];
      const lastElement = pricingBronze[pricingBronze.length - 1];
      if (wantedUsers > lastElement.user) return lastElement.price;

      let lastBigger = pricingBronze[0];
      let lastSmaller = pricingBronze[0];

      for (let i = 1; i < pricingBronze.length; i++) {
        lastBigger = pricingBronze[i];
        if (pricingBronze[i].user > wantedUsers) break;
        lastSmaller = pricingBronze[i];
      }

      const price = calculatePointOnLine(
        lastSmaller.user,
        lastSmaller.price,
        lastBigger.user,
        lastBigger.price,
        wantedUsers
      );

      return price;
    }

    function calculatePointOnLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x: number
    ) {
      let slope = (y2 - y1) / (x2 - x1);
      if (isNaN(slope)) slope = 0;
      const yIntercept = y1 - slope * x1;
      return slope * x + yIntercept;
    }
  });

  return (
    <>
      <Section id='unser_antrieb'>
        <ContentOverlapPortrait
          image={{
            source: '/img/cyber/cyber-portal/man-with-rocket.webp',
            alternateText: 'Man looking at the sunset'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#unser_antrieb'>
              <HeadingSegmentSecondary text='Unser' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Antrieb' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Wir wollen Ihnen die fachliche Kompetenz, die praktischen
              Fähigkeiten und das notwendige Wissen vermitteln, damit Sie sich
              in der digitalen Welt sicher zu fühlen und sicher sind. Die Cyber
              Lounge bietet Ihnen und Ihren Anwendern einen Raum, um
              nachhaltiges Praxiswissen auf verständliche Weise zu erlernen,
              dieses mit intensiven Prüfungen und realistischen Simulationen zu
              festigen und dabei Lernfortschritte systematisch sicherzustellen.
            </p>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='leistungen' backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='_SZyfQB7n7k'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#leistungen'>Leistungen</LinkedHeading>
            <p class='leading-7'>
              Bei der Cyber Lounge handelt es sich um eine Plattform, in dem der
              Fokus auf hochwertige Phishing-Simulationen, praxisrelevantes
              Wissen und leicht zu bedienenden Funktionen gelegt wird.
              <br />
              Die Cyber Lounge bietet Ihnen sechs Kurse mit praktischen
              Fähigkeiten und essenziellem Wissen für den sicheren Umgang in der
              digitalen Welt. In vier Examen mit anspruchsvollen, interaktiven
              Prüfungen können Ihre Anwender das Gelernte festigen. Abgerundet
              wird die Leistung mit dem Werkzeugkasten, der unter anderem die
              eigene Passwortsicherheit prüfen kann.
              <br />
              Die Cyber Lounge bietet Ihnen <strong>sechs Kurse</strong> mit
              insgesamt <strong>26 Lektionen</strong> mit praktischen
              Fähigkeiten und essenziellem Wissen für den sicheren Umgang in der
              digitalen Welt. In vier Examen mit anspruchsvollen, interaktiven
              Prüfungen können Ihre Anwender das Gelernte festigen. Abgerundet
              wird die Leistung mit dem Werkzeugkasten, der unter anderem die
              eigene Passwortsicherheit prüfen kann.
            </p>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='ihr_plus_an_sicherheit'>
        <VideoOverlapLandscape youTubeVideoId='FjThxiKBApc'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#ihr_plus_an_sicherheit'>
              <HeadingSegmentSecondary text='Ihr' />{' '}
              <HeadingSegmentSecondary800 text='Plus' />{' '}
              <HeadingSegmentSecondary text='an' />{' '}
              <HeadingSegmentSecondary800 text='Sicherheit' />
            </LinkedHeading>
            <section>
              <p class='leading-7'>
                Mit den Phishing-Paketen setzen Sie in Ihrem Unternehmen neue
                Maßstäbe hinsichtlich des Sicherheitsbewusstseins Ihrer
                Mitarbeiter.
                <br />
                Die Phishing-Mails durchlaufen in einer Testgruppe aus mehreren
                Unternehmen mit über 300 Anwendern einem Praxischeck. Mit Hilfe
                eines linguistischen Psychologen werden die Anwender sprachlich
                subtil zum Öffnen der betrügerischen Mails bewegt.
                <br />
                Flankiert wird der Erstellungsprozess von unserer generativen
                KI. Mit diesen Maßnahmen stellen wir sicher, dass unsere
                Phishing-Simulationen nur schwer als solche zu erkennen sind.
                <br />
                <br />
                Die Ergebnisse unserer Testgruppe werden in unterschiedliche{' '}
                <strong>Klickquoten</strong> unterteilt:
              </p>
              <ul>
                <li>
                  &gt;&nbsp;20% - <strong>verdächtig</strong>
                </li>
                <li>
                  &gt;&nbsp;40% - <strong>ungewiss</strong>
                </li>
                <li>
                  &gt;&nbsp;60% - <strong>authentisch</strong>
                </li>
                <li>
                  &gt;&nbsp;80% - <strong>täuschend echt</strong>
                </li>
              </ul>
              <p>
                Mit der hohen Qualität unserer Phishing-Simulationen schützen
                Sie sich und Ihr Unternehmen vor modernen, KI-gestützten
                Phishing-Angriffen, wie sie immer häufiger auftreten.
              </p>
            </section>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='pakete_preise' backgroundColor='gray'>
        <section class='grid gap-8 px-4'>
          <LinkedHeading href='#pakete_preise'>
            Pakete <HeadingSegmentSecondary800 text='&' /> Preisgestaltung
          </LinkedHeading>

          <p class='leading-7'>
            Hier finden Sie alle Informationen zu den erweiterten Paketen auf
            einen Blick. <br /> Der Konfigurator unterstützt Sie bei der Auswahl
            des passenden Pakets.
          </p>

          <div class='flex flex-wrap items-center gap-4 rounded-3xl'>
            <section class='flex flex-wrap gap-4'>
              <span class='text-xl font-bold'>Anzahl Empfänger</span>
              <input
                type='number'
                bind:value={userCountSig}
                onKeyUp$={() => {
                  if (+userCountSig.value < 0) {
                    userCountSig.value = '1';
                  }
                }}
                required
                value='10'
                min='1'
                max='6000'
                class='border-b border-secondary-900 text-center'
              />
            </section>
            <section class='flex flex-wrap items-center gap-4'>
              <span class='text-xl font-bold'>Laufzeit</span>
              <input
                type='range'
                bind:value={rangeValueSig}
                required
                min='1'
                max='8'
                step='1'
              />
              {durationInMonthSig.value === 1 && (
                <small class='min-w-[4rem]'>
                  {durationInMonthSig.value} Monat
                </small>
              )}
              {durationInMonthSig.value > 1 && (
                <small class='min-w-[4rem]'>
                  {durationInMonthSig.value} Monate
                </small>
              )}

              <span
                class={`${
                  discountSig.value === 0 ? 'opacity-50' : ''
                } grid w-32 items-center rounded bg-secondary-900 p-2 text-center text-xs font-medium text-primary`}
              >
                {discountSig.value * 100}% Rabatt
              </span>
            </section>
          </div>

          <div class='pricing-tiers'>
            {/* Starter */}
            <div class='card grid items-start gap-8 shadow-md'>
              <div class='features'>
                <h3 class='mb-8 flex items-center gap-4 text-3xl font-bold'>
                  <ThumbsUpIcon />
                  Starter
                </h3>
                <ul>
                  <ProductFeatureList features={starterFeatures} />
                </ul>
              </div>

              <div class='grid gap-8 self-end'>
                <PricePerUsePerMonth
                  usersCount={+userCountSig.value}
                  pricePerUser={pricingTier.starter.pricePerUserPerMonth}
                />
                <LinkCallToAction
                  href='https://forms.office.com/e/x9y2sJSm8P'
                  target='_blank'
                  class='mx-auto'
                >
                  Anfordern
                </LinkCallToAction>
              </div>
            </div>

            {/* Profi */}
            <div class='card grid items-start gap-8 shadow-xl'>
              <div class='features'>
                <h3 class='mb-8 flex items-center gap-4 text-3xl font-bold'>
                  <StarIcon />
                  Profi
                </h3>
                <ul>
                  <ProductFeatureList features={profiFeatures} />
                </ul>
              </div>

              <div class='grid gap-8 self-end'>
                <PricePerUsePerMonth
                  usersCount={+userCountSig.value}
                  pricePerUser={pricingTier.professional.pricePerUserPerMonth}
                />
                <LinkCallToAction
                  href='https://forms.office.com/e/x9y2sJSm8P'
                  target='_blank'
                  class='mx-auto'
                >
                  Anfordern
                </LinkCallToAction>
              </div>
            </div>

            {/* Expert */}
            <div class='card grid items-start gap-8 shadow-md' id='gold'>
              <div class='features'>
                <h3 class='mb-8 flex items-center gap-4 text-3xl font-bold'>
                  <ShieldCheckmarkIcon />
                  Experte
                </h3>
                <ul>
                  <ProductFeatureList features={expertFeatures} />
                </ul>
              </div>
              <div class='grid gap-8 self-end'>
                <PricePerUsePerMonth
                  usersCount={+userCountSig.value}
                  pricePerUser={pricingTier.expert.pricePerUserPerMonth}
                />
                <LinkCallToAction
                  href='https://forms.office.com/e/x9y2sJSm8P'
                  target='_blank'
                  class='mx-auto'
                >
                  Anfordern
                </LinkCallToAction>
              </div>
            </div>
          </div>
        </section>
      </Section>

      <Section id='demozugang_anfragen'>
        <div class='grid grid-flow-row justify-center gap-16 sm:grid-flow-col'>
          <div class='card mx-auto grid items-start gap-8 shadow-md'>
            <CyberLoungeLogo />
            <ProductFeatureList features={wuerttembergischeFeatures} />
          </div>
          <section class='flex max-w-md flex-col gap-4 px-4'>
            <LinkedHeading href='#demozugang_anfragen'>
              <HeadingSegmentSecondary text='Demozugang' />{' '}
              <HeadingSegmentSecondary800 text='anfragen' />
            </LinkedHeading>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
              Testen Sie mit dem kostenfreien Demo-Paket bereits alle Vorteile
              des Experten-Pakets. Für die kommenden 8 Wochen erhalten Sie 8
              hochwertige Phishing-Simulationen. Diese E-Mails zeichnen sich
              durch anspruchsvolle Sprache und präzise Semantik aus, verwenden
              authentische Absenderadressen und beinhalten eine persönliche
              Anrede, um die Authentizität zu steigern.
            </p>

            <LinkCallToAction
              href='https://forms.office.com/e/x9y2sJSm8P'
              target='_blank'
            >
              Demozugang anfragen
            </LinkCallToAction>
          </section>
        </div>
      </Section>

      <Section id='fordern_sie_ihr_angebot_an'>
        <div class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#fordern_sie_ihr_angebot_an'>
            Fordern Sie Ihr{' '}
            <HeadingSegmentSecondary800 text='individuelles Angebot' /> an.
          </LinkedHeading>

          <p class='max-w-2xl'>
            Sichern Sie sich Ihr maßgeschneidertes Angebot - unkompliziert und
            in nur wenigen Schritten! Nach Ihrer Anfrage werden wir uns
            persönlich bei Ihnen melden, um alle Details zu besprechen.
          </p>

          <LinkCallToAction
            href='https://forms.office.com/e/x9y2sJSm8P'
            target='_blank'
          >
            Jetzt Angebot anfordern
          </LinkCallToAction>
        </div>
      </Section>

      <Section id='wichtig_fuer_cyber_verantwortliche' backgroundColor='gray'>
        <section class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#wichtig_fuer_cyber_verantwortliche'>
            Wichtig für{' '}
            <HeadingSegmentSecondary800 text='Cyber-Verantwortliche' />
          </LinkedHeading>

          <p class='mx-auto max-w-xl leading-7'>
            Die besten Phishing-Mails helfen nichts, wenn diese nicht den
            Posteingang des Empfängers erreichen. Geben Sie deshalb unseren
            E-Mail-Server und unsere Domains in Ihrer Firewall und in den
            Postfächern frei. Nur dadurch können Sie sicherstellen, dass
            Auswertungen zum Klickverhalten korrekt sind. Damit Sie schnell
            starten können, haben wir für gängige Produkte wie Microsofts
            "Exchange Server" Anleitungsvideos bereitgestellt.
          </p>

          <LinkCallToAction
            href='https://e.co-it.eu/cyberportal-adminkonfiguration'
            target='_blank'
          >
            Freigaberegeln anschauen
          </LinkCallToAction>

          <YouTubeVideoGrid videos={cyberVerantwortlicheVideos} />
        </section>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Cyber Lounge: Stärken Sie Ihre digitale Sicherheit!',
  meta: [
    {
      name: 'description',
      content:
        'Mehr digitale Sicherheit durch praxisrelevantes Wissen und hochwertige Phishing-Simulationen, um sich in der digitalen Welt sicher zu fühlen und zu sein.'
    },
    {
      name: 'keywords',
      content:
        'Cyber Lounge, Digitale Sicherheit, Praxisrelevantes Wissen, Phishing-Simulationen, Digitale Welt'
    }
  ],

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/cyber/cyber-portal/header.webp',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Cyber Lounge',
        headingAccent: 'Sicher fühlen. Sicher sein.'
      }
    }
  }
};
