import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Modal,
  ModalContent,
  ModalHeader
} from '@qwik-ui/headless';
import type { NavMenuConfig } from '../../nav-menu/nav-menu';

import { Link } from '@builder.io/qwik-city';
import { CaretIcon, CloseIcon, MenuIcon } from './icons';

import Logo from './logo-blue.svg?jsx';
import mobileNavigationStyles from './mobile-navigation.css?inline';

type MobileNavigationProps = {
  config: NavMenuConfig;
};

export const MobileNavigation = component$(
  ({ config }: MobileNavigationProps) => {
    useStyles$(mobileNavigationStyles);

    const showSig = useSignal(false);

    return (
      <>
        <button
          onClick$={() => {
            showSig.value = true;
          }}
          class='px-3 py-2'
        >
          <MenuIcon />
        </button>
        <Modal
          bind:show={showSig}
          class='sheet bg-background text-foreground rounded-base fixed bottom-0 right-0 top-0 mr-0 h-full w-[min(400px,_100%)] border-0 p-[28px] shadow-md backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100'
        >
          <ModalHeader class='flex justify-between'>
            <Logo />
            <button onClick$={() => (showSig.value = false)}>
              <CloseIcon />
            </button>
          </ModalHeader>
          <ModalContent class='mb-2 py-4'>
            <div class='flex w-full justify-center'>
              <AccordionRoot
                animated
                collapsible
                enhance={true}
                behavior='single'
                class='w-[min(400px,_100%)]'
              >
                {config.items.map((entryItem, index) => (
                  <AccordionItem class='border-b' key={`entryItem-${index}`}>
                    <AccordionHeader as='h3' class=''>
                      <AccordionTrigger class='group flex w-full items-center justify-between py-4 text-left'>
                        <span class='font-bold text-secondary-900'>
                          {entryItem.text}
                        </span>
                        <span class='pl-2'>
                          <CaretIcon class='ease transition-transform duration-500 group-aria-expanded:rotate-180 group-aria-expanded:transform' />
                        </span>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent class=' accordion-animation-1 overflow-hidden'>
                      <div class='grid gap-2 pb-4 pl-2'>
                        {entryItem.items?.map((category, index) => (
                          <div key={`categoryItem-${index}`}>
                            <h4 class='mb-4 mt-2 font-semibold uppercase text-gray-800'>
                              {category.text}
                            </h4>
                            <ul class='grid gap-2'>
                              {category.items?.map((subItem, index) => (
                                <li key={`subItem-${index}`}>
                                  <Link
                                    href={subItem.path}
                                    class='font-semibold text-secondary-900'
                                  >
                                    {subItem.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </div>
          </ModalContent>
        </Modal>
      </>
    );
  }
);
