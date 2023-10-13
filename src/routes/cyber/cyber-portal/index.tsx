import {
  component$,
  useComputed$,
  useSignal,
  useStore,
  useStyles$,
  useTask$
} from '@builder.io/qwik';

import { BlackCloseIcon, CheckIcon } from '~/components/icons';
import { InfoPopover } from '~/components/info-popover/info-popover';
import { SectionArea } from '~/components/section-area';

import {
  ContentOverlapPortrait,
  VideoOverlapLandscape
} from '~/components/content-overlap';
import { HeadingArticle } from '~/components/heading-article';
import {
  HeadingSegmentSecondary,
  HeadingSegmentSecondary800
} from '~/components/heading-segment';
import { LinkCallToAction } from '~/components/link-call-to-action';

import type { DocumentHead } from '@builder.io/qwik-city';
import { ShieldCheckmarkIcon } from '../../../components/icons/shield-checkmark-icon';
import { StarIcon } from '../../../components/icons/star-icon';
import { ThumbsUpIcon } from '../../../components/icons/thumbs-up-icon';
import { Modal, ModalContent, ModalHeader } from '../../../components/qwik-ui';
import style from './styles.css?inline';

type PhishingFeature = {
  text: string;
  detail?: string;
};

const starterFeatures: PhishingFeature[] = [
  {
    text: 'Anzahl E-Mails: 12',
    detail: 'Anzahl der Phising Mails pro Anwender und Jahr'
  },
  {
    text: 'E-Mail-Support',
    detail:
      'Unsere Reaktionszeit wird an Werktagen innerhalb 48 Stunden in deutscher Sprache gewährleistet.'
  },
  { text: 'Frequenz: 1 pro Monat' },
  {
    text: 'Sprachniveau: Mittel',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausiblität geachtet.'
  },
  {
    text: 'Zahlweise: monatlich',
    detail:
      'Auch bei einer längeren Vertragslaufzeit als 1 Monat rechnen wir monatlich ab, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den einzelnen Zahlungsterminen pro Monat für die gesamte Vertragslaufzeit.'
  }
];

const profiFeatures: PhishingFeature[] = [
  {
    text: 'Anzahl E-Mails: 24',
    detail: 'Anzahl der Phising Mails pro Anwender und Jahr'
  },
  {
    text: 'E-Mail-Support',
    detail:
      'Unsere Reaktionszeit wird an Werktagen innerhalb 48 Stunden in deutscher Sprache gewährleistet.'
  },
  {
    text: 'Frequenz: je Monat',
    detail:
      'Im Tarif "Profi" werden die zwei monatlichen E-Mails an aufeinanderfolgneden Tagen versendet.'
  },
  {
    text: 'Sprachniveau: Hoch',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausibilität geachtet.'
  },
  {
    text: 'Zahlweise: monatlich',
    detail:
      'Auch bei einer längeren Vertragslaufzeit als 1 Monat rechnen wir monatlich ab, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den einzelnen Zahlungsterminen pro Monat für die gesamte Vertragslaufzeit.'
  },
  {
    text: 'Personalisierte Anrede',
    detail:
      'In einem Teil der Phishing-Mails wird auch personalisierte Ansprache verwendet, das heißt die E-Mails enthalten Anrede und Name des Anwenders. Damit werden Ihre Anwender noch besser für besonders gefährliche Phishings sensibilisiert.'
  },
  {
    text: 'Authentische Absenderadressen',
    detail:
      'In einem Teil der Phishing-Mails werden passend zu deren Inhalten glaubwürdige Domains verwendet. Geht es in der Mail zum Beispiel um Urheberrechtsverstöße, so würde als Absender klage@kanzlei-abele.de verwendet werden.'
  },
  {
    text: 'Inhalte: Microsoft',
    detail:
      'In einem Teil der Phising-Mails wird auf Produkte wie Outlook und Teams eingegangen. Besonders wenn Sie Microsoft-Produkte einsetzten, erhalten erfahrungsgemäß diese Phishing-Mails gesteigerte Aufmerksamkeit.'
  }
];

const expertFeatures: PhishingFeature[] = [
  {
    text: 'Anzahl E-Mails: 52',
    detail: 'Anzahl der Phising Mails pro Anwender und Jahr'
  },
  { text: 'E-Mail-Support' },
  {
    text: 'Frequenz: wöchentlich',
    detail:
      'Im Tarif "Experte" kommt pro Woche zu einer zufälligen Zeit die Phising-Mail.'
  },
  {
    text: 'Sprachniveau Hoch',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausibilität geachtet.'
  },
  {
    text: 'Zahlweise: monatlich',
    detail:
      'Auch bei einer längeren Vertragslaufzeit als 1 Monat rechnen wir monatlich ab, d.h. Sie müssen nicht in Vorleistung gehen. Sie erhalten zu Vertragsbeginn eine Rechnung mit den einzelnen Zahlungsterminen pro Monat für die gesamte Vertragslaufzeit.'
  },
  {
    text: 'Personalisierte Anrede',
    detail:
      'In einem Teil der Phishing-Mails wird auch personalisierte Ansprache verwendet, das heißt die E-Mails enthalten Anrede und Name des Anwenders. Damit werden Ihre Anwender noch besser für besonders gefährliche Phishings sensibilisiert.'
  },
  {
    text: 'Authentische Absenderadressen',
    detail:
      'In einem Teil der Phishing-Mails werden passend zu deren Inhalten glaubwürdige Domains verwendet. Geht es in der Mail zum Beispiel um Urheberrechtsverstöße, so würde als Absender klage@kanzlei-abele.de verwendet werden.'
  },
  {
    text: 'Inhalte: Microsoft',
    detail:
      'In einem Teil der Phising-Mails wird auf Produkte wie Outlook und Teams eingegangen. Besonders wenn Sie Microsoft-Produkte einsetzten, erhalten erfahrungsgemäß diese Phishing-Mails gesteigerte Aufmerksamkeit.'
  },
  {
    text: 'Inhalte: Zahlungsaufforderung',
    detail:
      'In einem Teil der Phishing-Mails wird der Anwender aufgefordert sich mit einer Zahlungsaufforderung auseinanderzusetzen. Zum einen adressieren Sie damit gezielt Ihr Rechnungswesen. Zum anderen erhalten erfahrungsgemäß diese Phising-Mails gesteigerte Aufmerksamkeit.'
  },
  {
    text: 'Anzeigename Cyber-Verantwortlicher',
    detail:
      'In einem Teil der Phishing-Mails wird in der Grußformel der Name des Cyber-Verantwortlichen Ihres Unternehmens genannt. Zudem wird dieser Name als Anzeigename dargestellt. Damit werden Ihre Anwender auch für Phishing-Mails innerhalb Ihres Unternehmens sensibilisiert.'
  },
  {
    text: 'Englischsprachige Texte',
    detail:
      'Zusätzlich zur Standardsprache Deutsch erhalten Ihre Anwender auf Mails in englischer Sprache. Das ist zum Beispiel hilfreich, wenn Sie regelmäßig mit internationalen Kontakten kommunizieren.'
  },
  {
    text: 'Telefonischer Support',
    detail:
      'Unsere Erreichbarkeit ist an Werktagen von 9 - 16 Uhr in deutscher Sprache gewährleistet.'
  },
  {
    text: 'Einfluss auf Weiterentwicklung',
    detail:
      'Nehmen Sie Einfluss auf die weiter Produktentwicklung und stimmen Sie über neue Funktionalitäten ab.'
  },
  { text: 'Unternehmenszertifikat Phising' }
];

export default component$(() => {
  useStyles$(style);

  const userCountSig = useSignal<string>('10');
  const rangeValueSig = useSignal<string>('1');

  const surveyModalShow = useSignal<boolean>(false);
  const offerModalShow = useSignal<boolean>(false);

  const toEuro = (amount: number) =>
    amount.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR'
    });

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

  const pricingScaleSig = useComputed$(() => {
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
    const pricingScale = track(() => pricingScaleSig.value);

    if (userCount === undefined || pricingScale === undefined) {
      return;
    }

    updatePrices(+userCount);

    function updatePrices(userCount: number) {
      const basePrice = calculateBasePrice(userCount);

      pricingTier.starter.pricePerUserPerMonth =
        basePrice - basePrice * pricingScale;

      pricingTier.starter.pricePerMonth =
        pricingTier.starter.pricePerUserPerMonth * userCount;

      pricingTier.professional.pricePerUserPerMonth =
        basePrice * 1.3 - basePrice * 1.3 * pricingScale;

      pricingTier.professional.pricePerYearMonth =
        pricingTier.professional.pricePerUserPerMonth * userCount;

      pricingTier.expert.pricePerUserPerMonth =
        basePrice * 2 - basePrice * 2 * pricingScale;

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
      <SectionArea backgroundColor='gray'>
        <ContentOverlapPortrait
          image={{
            source: '/img/cyber/cyber-portal/man-with-rocket.jpg',
            alternateText: 'Man looking at the sunset'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Unser' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Antrieb' />
            </h2>
            <p class='pb-4 leading-7'>
              Wir wollen allen die fachliche Kompetenz, die praktischen
              Fähigkeiten und das notwendige Wissen vermitteln, um in der
              digitalen Welt sich sicher zu fühlen und sicher zu sein. Das Cyber
              Portal bietet Ihnen und Ihren Anwendern einen Raum, um
              nachhaltiges Praxiswissen auf verständliche Weise zu erlernen,
              dieses mit intensiven Prüfungen und realistischen Simulationen zu
              festigen und dabei Lernfortschritte methodisch sicherzustellen.
            </p>
          </section>
        </ContentOverlapPortrait>
      </SectionArea>

      <SectionArea>
        <VideoOverlapLandscape youTubeVideoId='_SZyfQB7n7k'>
          <section class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Kostenfreie Basisversion' />
            </h2>
            <p class='leading-7'>
              Beim Cyber Portal handelt es sich um eine Individuallösung, deren
              Weiterentwicklung von der Württembergischen Versicherung
              beauftragt und finanziert wird. Die Basisversion ist und bleibt
              für alle Versicherungsnehmer kostenfrei. Mit mehreren 1.000
              Unternehmen unterschiedlicher Größen, die in mehr als 40 Branchen
              aktiv sind, ist es trotz starker Bemühungen nicht immer möglich
              alle individuellen Wünsche und Bedarfe zu adressieren. Mit unseren
              kostengünstigen Zusatzpaketen schlagen wir die Brücke für all
              jene, die ein deutliches Plus an Sicherheit erzielen wollen.
              Aufgrund der kostenfreien Basisversion müssen wir nur die
              Mehrleistung weiterberechnen und können deutlich niedrigere Preise
              anbieten als vergleichbare Plattformen.
            </p>
            <LinkCallToAction
              href='https://e.co-IT.eu/cyber/faq'
              target='_blank'
            >
              Details zur Weiterentwicklung
            </LinkCallToAction>
          </section>
        </VideoOverlapLandscape>
      </SectionArea>

      <SectionArea backgroundColor='gray'>
        <ContentOverlapPortrait
          image={{
            source: '/img/cyber/cyber-portal/planning-table.jpg',
            alternateText: 'Man looking at the sunset'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Plus an' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Sicherheit' />
            </h2>
            <p class='pb-4 leading-7'>
              Doch was bringt Ihnen eine günstige Lösung, wenn der Mehrwert
              fehlt? Darum setzen wir ausschließlich Themen um, die Sie sich
              wünschen: Jeder Abonnent eines jeden Pakets darf abstimmen, was
              als nächstes realisiert wird. Abonnenten des Pakets „Experte“
              können zudem auf die Auswahl, über die abgestimmt wird, Einfluss
              nehmen. Und Sie haben noch einen weiteren Vorteil: Sie müssen kein
              neues Produkt evaluieren und einführen. Die Integration der
              Zusatzfunktionen erfolgt nahtlos und sofort bei Kauf. Das kann
              besonders größeren Unternehmen und Behörden helfen, kraftraubende
              Genehmigungsprozesse zu beschleunigen und langwierige
              Ausschreibungsverfahren zu umgehen. Das Basisprodukt ist in Ihrem
              Haus schließlich freigegeben und bereits eingeführt.
            </p>
          </section>
        </ContentOverlapPortrait>
      </SectionArea>

      <SectionArea>
        <HeadingArticle text='Wählen Sie das Paket aus, das am besten zu Ihnen passt.' />
        <div class='mb-4 flex flex-wrap items-center justify-center gap-4 rounded-3xl p-8 shadow-md'>
          <section class='flex gap-4'>
            <span class='text-xl font-bold'>Anzahl Anwender</span>
            <input
              type='number'
              bind:value={userCountSig}
              required
              value='10'
              min='1'
              max='6000'
              class='border-b border-secondary-900 text-center'
            />
          </section>
          <section class='flex gap-4'>
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
              <small>mindestens {durationInMonthSig.value} Monat</small>
            )}
            {durationInMonthSig.value > 1 && (
              <small>mindestens {durationInMonthSig.value} Monate</small>
            )}
          </section>
        </div>

        <div class='pricing-tiers justify-center'>
          <div class='card grid items-start gap-8 shadow-md'>
            <div class='features'>
              <h3 class='mb-4 flex items-center gap-4 text-3xl font-bold'>
                <ThumbsUpIcon />
                Starter
              </h3>
              <ul>
                {starterFeatures.map((feature, key) => {
                  return (
                    <li
                      key={key}
                      class='align-center grid grid-cols-[auto_auto_1fr] justify-items-end gap-2 pb-4'
                    >
                      <CheckIcon />
                      <span>{feature.text}</span>
                      {feature.detail && <InfoPopover text={feature.detail} />}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class='prices justify-end self-end'>
              <span>Anwender / Monat</span>
              <span class='price'>
                {toEuro(pricingTier.starter.pricePerUserPerMonth)}
              </span>
              <span>Gesamt / Monat</span>
              <span class='price'>
                {toEuro(pricingTier.starter.pricePerMonth)}
              </span>
            </div>
          </div>

          <div class='card grid items-start gap-8 shadow-xl'>
            <div class='features'>
              <h3 class='mb-4 flex items-center gap-4 text-3xl font-bold'>
                <StarIcon />
                Profi
              </h3>
              <ul>
                {profiFeatures.map((feature, key) => {
                  return (
                    <li
                      key={key}
                      class='align-center grid grid-cols-[auto_auto_1fr] justify-items-end gap-2 pb-4'
                    >
                      <CheckIcon />
                      <span>{feature.text}</span>
                      {feature.detail && <InfoPopover text={feature.detail} />}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div class='prices justify-end self-end '>
              <span>Anwender / Monat</span>
              <span class='price'>
                {toEuro(pricingTier.professional.pricePerUserPerMonth)}
              </span>
              <span>Gesamt / Monat</span>
              <span class='price'>
                {toEuro(pricingTier.professional.pricePerYearMonth)}
              </span>
            </div>
          </div>
          <div class='card grid items-start gap-8 shadow-md' id='gold'>
            <div class='features'>
              <h3 class='mb-4 flex items-center gap-4 text-3xl font-bold'>
                <ShieldCheckmarkIcon />
                Experte
              </h3>
              <ul>
                {expertFeatures.map((feature, key) => {
                  return (
                    <li
                      key={key}
                      class='align-center grid grid-cols-[auto_auto_1fr] justify-items-end gap-2 pb-4'
                    >
                      <CheckIcon />
                      <span>{feature.text}</span>
                      {feature.detail && <InfoPopover text={feature.detail} />}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div class='prices justify-end self-end'>
              <span>Anwender / Monat</span>
              <span class='price'>
                {toEuro(pricingTier.expert.pricePerUserPerMonth)}
              </span>
              <span>Gesamt / Monat</span>
              <span class='price'>
                {toEuro(pricingTier.expert.pricePerMonth)}
              </span>
            </div>
          </div>
        </div>
      </SectionArea>

      <SectionArea backgroundColor='gray'>
        <div class='mb-14 flex flex-col  items-center gap-y-10'>
          <div class='h-1 w-10 bg-primary' />

          <h2 class='text-secondary text-4xl font-bold leading-10 text-secondary-900'>
            Fordern Sie Ihr individuelles Angebot an.
          </h2>

          <p class='max-w-2xl'>
            Sichern Sie sich Ihr maßgeschneidertes Angebot - unkompliziert und
            in nur wenigen Schritten! Nach Ihrer Anfrage werden wir uns
            persönlich bei Ihnen melden, um alle Details zu besprechen
          </p>

          <LinkCallToAction onClick$={() => (offerModalShow.value = true)}>
            Jetzt Angebot anfordern
          </LinkCallToAction>
          <Modal bind:show={offerModalShow}>
            <ModalHeader class='flex items-center justify-between bg-black px-8 pb-8 pt-14'>
              <h2 class='text:md font-bold text-white md:text-4xl'>
                <i class='mb-2 block h-[4px] w-10 bg-primary' />
                <span>Angebot anfordern</span>
              </h2>
              <button
                class='cursor-pointer'
                onClick$={() => (offerModalShow.value = false)}
              >
                <BlackCloseIcon />
              </button>
            </ModalHeader>
            <ModalContent>
              <iframe
                src='https://forms.office.com/e/x9y2sJSm8P?embed=true'
                class='m-0 max-h-screen min-h-[80vh] min-w-[80vw] max-w-full border-0'
              ></iframe>
            </ModalContent>
          </Modal>
        </div>
      </SectionArea>

      <SectionArea>
        <div class='mb-14 flex flex-col items-center gap-y-10'>
          <div class='h-1 w-10 bg-primary' />

          <h2 class='text-secondary text-4xl font-bold leading-10 text-secondary-900'>
            Teilen Sie uns Ihre Meinung mit
          </h2>

          <p class='max-w-xl'>
            Um unsere Pakete noch genauer auf Ihre Bedarfe zuschneiden zu
            können, machen wir aktuell eine anonyme Umfrage Teil Sie uns mit,
            wie ein perfekt auf Sie abgestimmtes Paket aussieht. Die Umfrage
            dauert nur 1-2 Minuten.
          </p>

          <LinkCallToAction onClick$={() => (surveyModalShow.value = true)}>
            Jetzt mitgestalten
          </LinkCallToAction>
          <Modal bind:show={surveyModalShow}>
            <ModalHeader class='flex items-center justify-between bg-black px-8 pb-8 pt-14'>
              <h2 class='text:md font-bold text-white md:text-4xl'>
                <i class='mb-2 block h-[4px] w-10 bg-primary' />
                <span>Umfrage</span>
              </h2>
              <button
                class='cursor-pointer'
                onClick$={() => (surveyModalShow.value = false)}
              >
                <BlackCloseIcon />
              </button>
            </ModalHeader>
            <ModalContent>
              <iframe
                src='https://forms.office.com/Pages/ResponsePage.aspx?id=hqVrfY9Jf0mmHhFRXNyN_57QTiT3NkFCvqHHDSVqQ7RURDdIWlhERzZWNEJINUI4M1paNDRLN0pEVi4u&embed=true'
                class='m-0 max-h-screen min-h-[80vh] min-w-[80vw] max-w-full border-0'
              ></iframe>
            </ModalContent>
          </Modal>
        </div>
      </SectionArea>

      <SectionArea backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='FjThxiKBApc'>
          <section class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Alle Funktionen vorgestellt' />
            </h2>
            <p class='leading-7'>
              In diesem Video stellen wir Ihnen alle Funktionen detailliert vor,
              sodass Sie genau wissen, was Sie mit welchem Paket bekommen.
            </p>
            <LinkCallToAction
              href='https://e.co-IT.eu/cyber/anfrage'
              target='_blank'
            >
              Klären Sie Ihre Fragen mit uns persönlich.
            </LinkCallToAction>
          </section>
        </VideoOverlapLandscape>
      </SectionArea>

      <SectionArea>
        <div class='mb-14 flex flex-col items-center gap-y-4'>
          <div class='h-1 w-10 bg-primary' />

          <h2 class='text-secondary text-4xl font-bold leading-10 text-secondary-900'>
            Sie wollen Ihre Anwender schulen?
          </h2>

          <p class='max-w-xl'>
            Für Kunden, die persönliche Schulung zu schätzen wissen, flankieren
            wir unser Portal mit maßgeschneiderten Trainings vor Ort und remote.
            Vereinbaren Sie gerne direkt einen Telefontermin.
          </p>

          <LinkCallToAction
            href='https://e.co-IT.eu/cyber/schulung'
            target='_blank'
          >
            Telefontermin auswählen.
          </LinkCallToAction>
        </div>
      </SectionArea>

      <SectionArea backgroundColor='gray'>
        <div class='mb-14 flex flex-col items-center gap-y-4'>
          <div class='h-1 w-10 bg-primary' />

          <h2 class='text-secondary text-4xl font-bold leading-10 text-secondary-900'>
            Sie suchen einen Partner für IT-Sicherheit?
          </h2>

          <p class='max-w-xl'>
            Wir wären nicht, wer wir sind, wenn wir Veränderung nicht ganz zu
            Ende denken würden: Regelmäßig erreichen uns Anrufe und Mails, ob
            wir eine Bestandsaufnahme des IT-Sicherheit durchführen und - falls
            notwendig - Lücken schließen können. Die gute Antwort lautet: Ja.
            Die Inhalte für das Cyber Portal entstanden aus unseren
            Erkenntnissen und Erfahrungen, die wir in unserer Funktion als
            IT-Systemhaus gewinnen konnten. Hier können Sie eine kostenfreie,
            30-minütige Erstberatung.
          </p>

          <LinkCallToAction
            href='https://e.co-it.eu/cyber/erstberatung'
            target='_blank'
          >
            Erstberatung vereinbaren
          </LinkCallToAction>
        </div>
      </SectionArea>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/cyber/cyber-portal/header.jpg',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Cyber Portal',
        headingAccent: 'Sicher fühlen. Sicher sein.'
      }
    }
  }
};
