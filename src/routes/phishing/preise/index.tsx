import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { CheckIcon } from '../../../components/icons';
import style from './styles.css?inline';

type PhisingFeature = {
  text: string;
  detail: string;
};

const starterFeatures: PhisingFeature[] = [
  { text: '1 E-Mail / Monat / Anwender', detail: '' },
  { text: 'E-Mail-Support', detail: '' },
  { text: 'Frequenz: 1 pro Monat', detail: '' },
  { text: 'Sprachniveau: Akzeptabel', detail: '' }
];

const profiFeatures: PhisingFeature[] = [
  { text: '1 E-Mail / Monat / Anwender', detail: '' },
  { text: 'E-Mail-Support', detail: '' },
  { text: 'Frequenz: 1 pro Monat', detail: '' },
  { text: 'Sprachniveau: Hoch', detail: '' },
  { text: 'Personalisierte Anrede', detail: '' },
  { text: 'Authentische Absenderadressen', detail: '' },
  { text: 'Inhalte: Microsoft', detail: '' }
];

const expertFeatures: PhisingFeature[] = [
  { text: '1 E-Mail / Monat / Anwender', detail: '' },
  { text: 'E-Mail-Support', detail: '' },
  { text: 'Frequenz: 1 pro Monat', detail: '' },
  { text: 'Sprachniveau Hoch', detail: '' },
  { text: 'Personalisierte Anrede', detail: '' },
  { text: 'Authentische Absenderadressen', detail: '' },
  { text: 'Inhalte: Microsoft', detail: '' },
  { text: 'Inhalte: Zahlungsaufforderung', detail: '' },
  { text: 'Anzeigename Cyber-Verantwortlicher', detail: '' },
  { text: 'Englischsprachige Texte', detail: '' },
  { text: 'Telefonischer Support', detail: '' },
  { text: 'Einfluss auf Weiterentwicklung', detail: '' },
  { text: 'Unternehmenszertifikat Phising', detail: '' }
];

export default component$(() => {
  useStyles$(style);

  useVisibleTask$(() => {
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
    <div class='mt-8 grid place-content-center'>
      <h2 class='text-xl font-bold text-secondary-900'>
        Legen Sie die Anzahl der Phishing-Email-Empfänger fest.
      </h2>

      <div class='mb-4 mt-4 flex items-center gap-2 p-4 shadow-md'>
        <span class='font-semibold'>Anzahl Anwender</span>

        <input
          type='number'
          id='count'
          required
          value='1'
          min='1'
          class='rounded-md border border-secondary-900'
        />
      </div>

      <h2 class='text-xl font-bold text-secondary-900'>
        Sie das Paket aus, das am besten zu Ihnen passt.
      </h2>

      <div class='pricing-tiers'>
        <div class='card grid items-start gap-8 shadow-md' id='bronze'>
          <div class='features'>
            <h3 class='heading'>Starter</h3>
            <ul>
              {starterFeatures.map((feature, key) => {
                return (
                  <li key={key} class='align-center flex gap-1 p-2'>
                    <CheckIcon />
                    <span>{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class='prices self-end'>
            <span>Benutzer / Monat</span>
            <span id='bronzePerUser' class='price'></span>
            <span>Gesamt / Monat</span>
            <span id='bronzePerMonth' class='price'></span>
            <span>Gesamt / Jahr</span>
            <span id='bronzePerYear' class='price'></span>
          </div>
        </div>
        <div class='card grid items-start gap-8 shadow-xl' id='silber'>
          <div class='features'>
            <h3 class='heading'>Profi</h3>
            <ul>
              {profiFeatures.map((feature, key) => {
                return (
                  <li key={key} class='flex gap-1 p-2'>
                    <CheckIcon />
                    <span>{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class='prices self-end'>
            <span>Benutzer / Monat</span>
            <span id='silberPerUser' class='price'></span>
            <span>Gesamt / Monat</span>
            <span id='silberPerMonth' class='price'></span>
            <span>Gesamt / Jahr</span>
            <span id='silberPerYear' class='price'></span>
          </div>
        </div>
        <div class='card grid items-start gap-8 shadow-md' id='gold'>
          <div class='features'>
            <h3 class='heading'>Experte</h3>
            <ul>
              {expertFeatures.map((feature, key) => {
                return (
                  <li key={key} class='align-center flex gap-1 p-2'>
                    <CheckIcon />
                    <span>{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class='prices self-end'>
            <span>Benutzer / Monat</span>
            <span id='goldPerUser' class='price'></span>
            <span>Gesamt / Monat</span>
            <span id='goldPerMonth' class='price'></span>
            <span>Gesamt / Jahr</span>
            <span id='goldPerYear' class='price'></span>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',

  frontmatter: {
    header: {
      type: 'default',
      configuration: {
        heading: 'Phishing'
      }
    }
  }
};
