import { component$ } from "@builder.io/qwik";

export const TeamSection = component$(() => {
  return (
    <div class="container mx-auto flex flex-col px-8 lg:px-0">
      <div class="text-center text-2xl lg:text-3xl font-normal text-black leading-10 max-w-5xl mx-auto">
        "Unsere Motivation ist es eine <span class="font-semibold text-secondary-900">aufgeschlossene Welt</span> zu schaffen, in der jeder <span class="font-semibold text-secondary-900">mutig und zuversichtlich</span> seine Herausforderungen meistert. Deshalb versprechen wir <span class="font-semibold text-secondary-900">Veränderungen zu etwas Positivem</span> zu machen, damit jeder <span class="font-semibold text-secondary-900">Herausforderungen als Chance</span> wahrnimmt, <span class="font-semibold text-secondary-900">aktiv mitgestaltet</span>, immer wieder <span class="font-semibold text-secondary-900">neue Wege beschreitet</span> und notwendige <span class="font-semibold text-secondary-900">Risiken mutig eingeht</span>."
      </div>

      <div class="flex justify-center my-12">
        <button class="bg-primary px-8 py-3 text-secondary-900 text-lg font-semibold leading-5 rounded">
          Jetzt bewerben
        </button>
      </div>

      <img src="/img/about/team.avif" alt="team" />
    </div>
  )
});