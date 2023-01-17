import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContentOverlapLandscape } from '../components/content-overlap/content-overlap-landscape';
import { ContentOverlapPortrait } from '../components/content-overlap/content-overlap-portrait';
import { Heading } from '../components/heading/heading';
import { LinkCallToAction } from '../components/link-call-to-action/link-call-to-action';

export default component$(() => {
  return (
    <div class="container mx-auto flex flex-col space-y-96">
      <ContentOverlapPortrait
        image={{
          source: '/img/landing-page/developers-tablet.jpg',
          alternateText: '2 Developers checking an App on a tablet'
        }}
      >
        <section q:slot="article" class="flex flex-col space-y-4">
          <Heading>
            <span q:slot="primary">Denken Sie auch in</span>
            <span q:slot="accent">ganzheitlichen Lösungen?</span>
          </Heading>
          <p class="leading-7">
            Dann bringen wir Ihre Ideen auf die Straße, ebenen Ihnen neue Wege
            und schaffen gemeinsam nachhaltige Werte. Unsere Leidenschaft ist es
            Veränderungen zu etwas Positivem zu machen.
          </p>
          <LinkCallToAction href="/">Mehr erfahren</LinkCallToAction>
        </section>
      </ContentOverlapPortrait>

      <ContentOverlapLandscape
        image={{
          source: '/img/landing-page/cooking-session.jpg',
          alternateText: 'Our team cooking a delicious meal'
        }}
      >
        <section q:slot="article" class="flex flex-col space-y-4">
          <Heading>
            <span q:slot="primary">Machen Menschen für Sie auch den</span>
            <span q:slot="accent">Unterschied?</span>
          </Heading>
          <p class="leading-7">
            Dann haben wir für Sie echte Game Changer in unseren Reihen.
            Motiviert durch den Fachkräftemangel, rekrutieren wir mit eigenen
            HR-Spezialisten und qualitätsgetriebenem Auswahlprozess unsere
            Talente. Dank unserer Werteorientierten Unternehmenskultur und
            unserer Team-zentrierten Lösungsmentalität halten und entwickeln wir
            unsere Mitarbeiter.
          </p>
          <LinkCallToAction href="/">Mehr erfahren</LinkCallToAction>
        </section>
      </ContentOverlapLandscape>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
};
