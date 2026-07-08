import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

const CalendarFilledIcon = (props: QwikIntrinsicElements['svg']) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
      <path d='M8 2v4m8-4v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18M9 16l2 2l4-4' />
    </g>
  </svg>
);

const PhoneFilledIcon = (props: QwikIntrinsicElements['svg']) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <path
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
      d='M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384'
    />
  </svg>
);

const MailFilledIcon = (props: QwikIntrinsicElements['svg']) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
      <path d='m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
      <rect width='20' height='16' x='2' y='4' rx='2' />
    </g>
  </svg>
);

const contactActions = [
  {
    title: 'Termin vereinbaren',
    description: 'Buchen Sie sich direkt einen passenden, unverbindlichen Gesprächstermin.',
    buttonLabel: 'Termin buchen',
    href: 'https://calendly.com/uli-armbruster/videokonferenz-30min',
    external: true,
    icon: CalendarFilledIcon
  },
  {
    title: 'Anrufen',
    description: 'Sie möchten Ihr Anliegen kurz einordnen? Rufen Sie uns gerne direkt an.',
    buttonLabel: 'Jetzt anrufen',
    href: 'tel:+49721935163052',
    external: false,
    icon: PhoneFilledIcon
  },
  {
    title: 'E-Mail schreiben',
    description: 'Schicken Sie uns Ihr Anliegen. Wir melden uns bei Ihnen zeitnah zurück.',
    buttonLabel: 'E-Mail senden',
    href: 'mailto:angebot@co-IT.eu',
    external: false,
    icon: MailFilledIcon
  }
] as const;

export const ContactPossibilitiesGrid = component$(() => {
  return (
    <div class='w-full'>
      <div class='mx-auto max-w-4xl text-center'>
        <h2 class='text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl'>
          Bereit für den nächsten Schritt?
        </h2>

        <p class='mx-auto mt-5 max-w-3xl text-lg leading-8 text-secondary-900/75 sm:text-xl'>
          In einem kurzen Gespräch klären wir, was Sie brauchen und wie wir Sie unterstützen können.
        </p>
      </div>

      <div class='mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {contactActions.map(action => {
          const Icon = action.icon;

          return (
            <article
              key={action.title}
              class='group flex h-full flex-col rounded-none bg-white px-5 py-5 text-center shadow-[0_14px_32px_rgba(2,2,77,0.08)] ring-1 ring-secondary-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(2,2,77,0.12)]'
            >
              <div class='bg-primary/12 group-hover:bg-primary/16 mx-auto flex h-28 w-28 items-center justify-center rounded-full text-primary transition duration-300 sm:h-32 sm:w-32'>
                <Icon class='h-12 w-12 sm:h-14 sm:w-14' />
              </div>

              <p class='mx-auto mt-5 max-w-xs text-base leading-7 text-secondary-900/80'>{action.description}</p>

              <div class='mt-5'>
                <a
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noreferrer' : undefined}
                  class='inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3.5 text-base font-semibold text-secondary-900 shadow-[0_10px_24px_rgba(255,193,56,0.26)] transition duration-300 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-900 focus-visible:ring-offset-2'
                >
                  {action.buttonLabel}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
});
