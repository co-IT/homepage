/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from '@builder.io/qwik';
import { Logo } from '~/components/logo';
import { NavMenu, type NavMenuConfig } from '../nav-menu/nav-menu';
import { AnalysisIcon } from './icons/analysis-icon';
import { CareerIcon } from './icons/career-icon';
import { ContractIcon } from './icons/contract-icon';
import { FaqIcon } from './icons/faq-icon';
import { LeadershipIcon } from './icons/leadership-icon';
import { PeopleIcon } from './icons/people-icon';
import { ServiceIcon } from './icons/service-icon';
import { TargetIcon } from './icons/target-icon';
import { ToolsIcon } from './icons/tools-icon';

export const TopBar = component$(() => {
  const ref = useSignal<HTMLElement>();
  const changeBgSig = useSignal(false);
  const navMenuConfig: NavMenuConfig = {
    items: [
      {
        text: 'For Business',
        ad: {
          headline: 'Get an offer today',
          description:
            'We help businesses succeed with customized software solutions',

          image: (
            <img
              src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp'
              width='193'
              height='233'
            />
          ),
          link: '/solutions',
          ctaText: 'Mehr erfahren'
        },
        items: [
          {
            text: 'About us',
            isCategory: true,

            items: [
              {
                text: 'How We Work',
                description: 'Lorem ipsum dolor sit amet',
                path: '/about',
                icon: <TargetIcon />
              },
              {
                text: 'Our Solutions',
                description: 'Lorem ipsum dolor sit amet',
                path: '/solutions',
                icon: <ServiceIcon />
              }
            ]
          },
          {
            text: 'Services',
            isCategory: true,

            items: [
              {
                text: 'IT Management',
                description: 'Lorem ipsum dolor sit amet',
                path: '/management',
                icon: <PeopleIcon />
              },
              {
                text: 'Software Development',
                description: 'Lorem ipsum dolor sit amet',
                path: '/services',
                icon: <ToolsIcon />
              },
              {
                text: 'Business Consultancy',
                description: 'Lorem ipsum dolor sit amet',
                path: '/management',
                icon: <AnalysisIcon />
              }
            ]
          }
        ]
      },
      {
        text: 'For Talents',
        ad: {
          headline: 'Know more about our culture',
          description:
            'We help businesses succeed with customized software solutions',

          image: (
            <img
              src='/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp'
              width='193'
              height='233'
            />
          ),
          link: '/solutions',
          ctaText: 'Mehr erfahren'
        },
        items: [
          {
            text: 'Work with us',
            isCategory: true,

            items: [
              {
                text: 'Career',
                description: 'Lorem ipsum dolor sit amet',
                path: '/about',
                icon: <CareerIcon />
              },
              {
                text: 'Leadership',
                description: 'Lorem ipsum dolor sit amet',
                path: '/solutions',
                icon: <LeadershipIcon />
              }
            ]
          },
          {
            text: 'Services',
            isCategory: true,

            items: [
              {
                text: 'Employment Contract',
                description: 'Lorem ipsum dolor sit amet',
                path: '/management',
                icon: <ContractIcon />
              },
              {
                text: 'FAQ',
                description: 'Lorem ipsum dolor sit amet',
                path: '/services',
                icon: <FaqIcon />
              }
            ]
          }
        ]
      },
      { text: 'About Us', path: '/solutions' },
      { text: 'Contact Us', path: '/solutions', isCta: true }
    ]
  };
  return (
    <>
      <div
        document:onScroll$={() => {
          changeBgSig.value = window.scrollY > 5;
        }}
        class={[
          'fixed z-50 w-full p-3 transition duration-300',
          changeBgSig.value ? 'bg-secondary-950' : ''
        ]}
      >
        <section ref={ref} class='container mx-auto flex w-full items-center'>
          <div class='mr-auto'>
            <Logo />
          </div>
          <NavMenu config={navMenuConfig} menuAnchorRef={ref} />
        </section>
      </div>
    </>
  );
});
