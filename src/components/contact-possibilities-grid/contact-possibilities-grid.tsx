import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

const iconStrokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '1.75'
} as const;

const CalendarOutlineIcon = (props: QwikIntrinsicElements['svg']) => (
  <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <rect {...iconStrokeProps} x='3.5' y='5.25' width='17' height='15.25' rx='2.5' />
    <path {...iconStrokeProps} d='M7.5 3.25V7.25' />
    <path {...iconStrokeProps} d='M16.5 3.25V7.25' />
    <path {...iconStrokeProps} d='M3.5 9.25H20.5' />
    <path {...iconStrokeProps} d='M8.25 14.5L10.75 17L15.75 12' />
  </svg>
);

const PhoneOutlineIcon = (props: QwikIntrinsicElements['svg']) => (
  <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <path
      {...iconStrokeProps}
      d='M2.25 6.75C2.25 15.035 8.964 21.75 17.25 21.75H18.75C19.371 21.75 19.875 21.246 19.875 20.625L20.391 13.365C20.435 12.744 19.931 12.24 19.31 12.24L16.588 11.333C16.03 11.147 15.42 11.31 15.03 11.724L13.393 13.361C11.712 12.68 10.32 11.288 9.639 9.607L11.276 7.97C11.69 7.58 11.853 6.97 11.667 6.412L10.76 3.69C10.76 3.069 10.256 2.565 9.635 2.609L3.375 3.125C2.754 3.169 2.25 3.673 2.25 4.294V6.75Z'
    />
  </svg>
);

const MailOutlineIcon = (props: QwikIntrinsicElements['svg']) => (
  <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <rect {...iconStrokeProps} x='3.5' y='5.5' width='17' height='13' rx='2.5' />
    <path {...iconStrokeProps} d='M4.25 6.75L12 12.25L19.75 6.75' />
  </svg>
);

const contactActions = [
  {
    title: 'Termin vereinbaren',
    description: 'Buchen Sie sich direkt einen passenden, unverbindlichen Gesprächstermin.',
    buttonLabel: 'Termin buchen',
    href: 'https://calendly.com/uli-armbruster/videokonferenz-30min',
    external: true,
    icon: CalendarOutlineIcon
  },
  {
    title: 'Anrufen',
    description: 'Sie möchten Ihr Anliegen kurz einordnen? Rufen Sie uns gerne direkt an.',
    buttonLabel: 'Jetzt anrufen',
    href: 'tel:+49721935163052',
    external: false,
    icon: PhoneOutlineIcon
  },
  {
    title: 'E-Mail schreiben',
    description: 'Schicken Sie uns Ihr Anliegen. Wir melden uns bei Ihnen zeitnah zurück.',
    buttonLabel: 'E-Mail senden',
    href: 'mailto:angebot@co-IT.eu',
    external: false,
    icon: MailOutlineIcon
  }
] as const;

export const ContactPossibilitiesGrid = component$(() => {
  return (
    <div class='relative isolate w-full'>
      <div
        aria-hidden='true'
        class='pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-[22rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:w-[30rem]'
      />

      <div class='rounded-[2.5rem] border border-secondary-900/5 bg-gradient-to-b from-white to-slate-50 px-4 py-10 shadow-[0_28px_80px_rgba(2,2,77,0.08)] sm:px-8 sm:py-12 lg:px-12 lg:py-16'>
        <div class='mx-auto max-w-4xl text-center'>
          <div class='mx-auto mb-6 h-2 w-20 rounded-full bg-primary shadow-[0_0_0_8px_rgba(255,193,56,0.14)]' />

          <h2 class='text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl'>
            Bereit für den nächsten Schritt?
          </h2>

          <p class='mx-auto mt-5 max-w-3xl text-lg leading-8 text-secondary-900/75 sm:text-xl'>
            In einem kurzen Gespräch klären wir, was Sie brauchen und wie wir Sie unterstützen können.
          </p>
        </div>

        <div class='mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {contactActions.map(action => {
            const Icon = action.icon;

            return (
              <article
                key={action.title}
                class='group flex h-full flex-col rounded-[2rem] bg-white px-6 py-8 text-center shadow-[0_18px_45px_rgba(2,2,77,0.08)] ring-1 ring-secondary-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(2,2,77,0.12)]'
              >
                <div class='bg-primary/12 group-hover:bg-primary/16 mx-auto flex h-36 w-36 items-center justify-center rounded-full text-primary transition duration-300 sm:h-40 sm:w-40'>
                  <Icon class='h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]' />
                </div>

                <h3 class='mt-8 text-2xl font-bold text-secondary-900'>{action.title}</h3>

                <p class='mx-auto mt-5 max-w-sm text-base leading-8 text-secondary-900/80 lg:text-lg'>
                  {action.description}
                </p>

                <div class='mt-auto pt-8'>
                  <a
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                    class='inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-secondary-900 shadow-[0_12px_30px_rgba(255,193,56,0.28)] transition duration-300 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-900 focus-visible:ring-offset-2'
                  >
                    {action.buttonLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
});
