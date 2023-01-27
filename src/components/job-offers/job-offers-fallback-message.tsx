import { component$ } from '@builder.io/qwik';

export const JobOffersFallbackMessage = component$(() => {
  return (
    <p>
      Please check our Job-Offers
      <a href="https://karriere.co-it.eu" target="_blank">
        here
      </a>
      .
    </p>
  );
});
