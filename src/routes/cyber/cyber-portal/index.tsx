import {
  component$,
  useComputed$,
  useSignal,
  useStyles$,
  useVisibleTask$
} from '@builder.io/qwik';

import { CheckIcon } from '~/components/icons';
import { InfoPopover } from '~/components/info-popover/info-popover';
import { SectionArea } from '~/components/section-area';

import type { DocumentHead } from '@builder.io/qwik-city';
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
    text: 'Frequenz: je Monat (aufeinanderfolgende Tage)',
    detail:
      'Im Tarif "Profi" werden die zwei monatlichen E-Mails an aufeinanderfolgneden Tagen versendet.'
  },
  {
    text: 'Sprachniveau: Hoch',
    detail:
      'Das Sprachniveau variiert zw. niedrig und hoch. Bei mittlerem Niveau wird korrekte Rechtschreibung und Grammatik benutzt. Auf hohem Sprachniveau wird zusätzlich auf eine klare Semantik und Plausibilität geachtet.'
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

  const bronzePerYearDiscountSig = useSignal(0);
  const bronzePerYearDiscountEuro = useComputed$(() =>
    bronzePerYearDiscountSig.value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })
  );

  const silberPerYearDiscountSig = useSignal(0);
  const silberPerYearDiscountEuro = useComputed$(() =>
    silberPerYearDiscountSig.value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })
  );

  const goldPerYearDiscountSig = useSignal(0);
  const goldPerYearDiscountEuro = useComputed$(() =>
    goldPerYearDiscountSig.value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })
  );

  useVisibleTask$(() => {
    const discount = 0.12;

    const bronzePerUserElement = document.getElementById('bronzePerUser');
    const bronzePerMonthElement = document.getElementById('bronzePerMonth');
    const bronzePerYearElement = document.getElementById('bronzePerYear');
    const silverPerUserElement = document.getElementById('silberPerUser');
    const silverPerMonthElement = document.getElementById('silberPerMonth');
    const silverPerYearElement = document.getElementById('silberPerYear');
    const goldPerUserElement = document.getElementById('goldPerUser');
    const goldPerMonthElement = document.getElementById('goldPerMonth');
    const goldPerYearElement = document.getElementById('goldPerYear');

    const count = document.getElementById('count') as HTMLInputElement;

    if (!count) return;

    count.addEventListener('input', element => {
      const value = (element.target as HTMLInputElement).valueAsNumber;

      if (!isNaN(value)) updatePrices(value);
    });

    const initialValue = 1;

    count.value = initialValue.toString();
    updatePrices(initialValue);

    function updatePrices(userCount: number) {
      count.innerText = userCount.toString();
      const bronzePerUserPerMonth = calculateBronzePricing(userCount);
      const bronzePerMonth = bronzePerUserPerMonth * userCount;
      const bronzePerYear = bronzePerMonth * 12;
      bronzePerYearDiscountSig.value = bronzePerYear - bronzePerYear * discount;

      if (
        !bronzePerUserElement ||
        !bronzePerMonthElement ||
        !bronzePerYearElement ||
        !silverPerUserElement ||
        !silverPerMonthElement ||
        !silverPerYearElement ||
        !goldPerUserElement ||
        !goldPerMonthElement ||
        !goldPerYearElement
      ) {
        return;
      }

      bronzePerUserElement.innerText = bronzePerUserPerMonth.toLocaleString(
        'de-DE',
        { style: 'currency', currency: 'EUR' }
      );

      bronzePerMonthElement.innerText = bronzePerMonth.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });

      bronzePerYearElement.innerText = bronzePerYear.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });

      const silberPerUserPerMonth = bronzePerUserPerMonth * 1.3;
      const silberPerMonth = silberPerUserPerMonth * userCount;
      const silberPerYear = silberPerMonth * 12;
      silberPerYearDiscountSig.value = silberPerYear - silberPerYear * discount;

      silverPerUserElement.innerText = silberPerUserPerMonth.toLocaleString(
        'de-DE',
        { style: 'currency', currency: 'EUR' }
      );

      silverPerMonthElement.innerText = silberPerMonth.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });

      silverPerYearElement.innerText = silberPerYear.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });

      const goldPerUserPerMonth = bronzePerUserPerMonth * 2;
      const goldPerMonth = goldPerUserPerMonth * userCount;
      const goldPerYear = goldPerMonth * 12;
      goldPerYearDiscountSig.value = goldPerYear - goldPerYear * discount;

      goldPerUserElement.innerText = goldPerUserPerMonth.toLocaleString(
        'de-DE',
        {
          style: 'currency',
          currency: 'EUR'
        }
      );

      goldPerMonthElement.innerText = goldPerMonth.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });

      goldPerYearElement.innerText = goldPerYear.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });
    }
    function calculateBronzePricing(wantedUsers: number) {
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

      const preis = calculatePointOnLine(
        lastSmaller.user,
        lastSmaller.price,
        lastBigger.user,
        lastBigger.price,
        wantedUsers
      );
      return preis;
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
        <HeadingArticle text=' Wählen Sie das Paket aus, das am besten zu Ihnen passt.' />
        <div class='mb-4 flex max-w-xs items-center gap-2 rounded-3xl p-8 shadow-md'>
          <h3 class='text-xl font-bold'>Anzahl Anwender</h3>

          <input
            type='number'
            id='count'
            required
            value='1'
            min='1'
            max='6000'
            class='border-b border-secondary-900 text-center'
          />
        </div>

        <div class='pricing-tiers'>
          <div
            class='card grid max-w-xs items-start gap-8 shadow-md'
            id='bronze'
          >
            <div class='features'>
              <h3 class='heading'>Starter</h3>
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
            <div class='prices self-end'>
              <span>Anwender / Monat</span>
              <span id='bronzePerUser' class='price'></span>
              <span class='hidden'>Gesamt / Monat</span>
              <span id='bronzePerMonth' class='price hidden'></span>
              <span>Gesamt / Jahr</span>
              <span id='bronzePerYear' class='text-right line-through'></span>
              <span class='grid items-center rounded bg-secondary-900 text-center text-xs font-medium text-accent accent-primary'>
                12% Rabatt
              </span>
              <span class='price'>{bronzePerYearDiscountEuro}</span>
            </div>
          </div>
          <div
            class='card grid max-w-xs items-start gap-8 shadow-xl'
            id='silber'
          >
            <div class='features'>
              <h3 class='heading'>Profi</h3>
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

            <div class='prices self-end'>
              <span>Benutzer / Monat</span>
              <span id='silberPerUser' class='price'></span>
              <span class='hidden'>Gesamt / Monat</span>
              <span id='silberPerMonth' class='price hidden'></span>
              <span>Gesamt / Jahr</span>
              <span id='silberPerYear' class='text-right line-through'></span>
              <span class='grid items-center rounded bg-secondary-900 text-center text-xs font-medium text-accent accent-primary'>
                12% Rabatt
              </span>
              <span class='price'>{silberPerYearDiscountEuro}</span>
            </div>
          </div>
          <div class='card grid max-w-lg items-start gap-8 shadow-md' id='gold'>
            <div class='features'>
              <h3 class='heading'>Experte</h3>
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

            <div class='prices self-end'>
              <span>Benutzer / Monat</span>
              <span id='goldPerUser' class='price'></span>
              <span class='hidden'>Gesamt / Monat</span>
              <span id='goldPerMonth' class='price hidden'></span>
              <span>Gesamt / Jahr</span>
              <span id='goldPerYear' class='text-right line-through'></span>
              <span class='grid items-center rounded bg-secondary-900 text-center text-xs font-medium text-accent accent-primary'>
                12% Rabatt
              </span>
              <span class='price'>{goldPerYearDiscountEuro}</span>
            </div>
          </div>
        </div>
      </SectionArea>

      <SectionArea backgroundColor='gray'>
        <div class='mb-14 flex flex-col items-center gap-y-4'>
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

          <LinkCallToAction
            href='https://e.co-IT.eu/cyber/umfrage'
            target='_blank'
          >
            Jetzt mitgestalten
          </LinkCallToAction>
        </div>
      </SectionArea>

      <SectionArea>
        <VideoOverlapLandscape youTubeVideoId='KSSDqIIikvQ'>
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

      <SectionArea backgroundColor='gray'>
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

      <SectionArea>
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
