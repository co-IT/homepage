import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Accordion, Modal } from '@qwik-ui/headless';
import type { MenuConfig } from '../types/menu-config.type';

import { CloseIcon, MenuIcon } from './icons';

import { Link } from '@builder.io/qwik-city';
import { CallToActionAccordionItem, CollapsibleAccordionItem, LinkAccordionItem } from './accordion';
import Logo from './logo-blue.svg?jsx';
import styles from './mobile-menu.css?inline';

type MobileMenuProps = {
  config: MenuConfig;
};

export const MobileMenu = component$(({ config }: MobileMenuProps) => {
  useStyles$(styles);

  const showSig = useSignal(false);

  const close$ = $(() => (showSig.value = false));

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
      <Modal.Root bind:show={showSig}>
        <Modal.Panel class='sheet bg-background text-foreground rounded-base fixed bottom-0 right-0 top-0 mr-0 h-full w-[min(400px,_100%)] border-0 p-[28px] shadow-md backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100'>
          <header class='flex justify-between'>
            <Link href='/' onClick$={close$}>
              <Logo />
            </Link>
            <button onClick$={() => (showSig.value = false)}>
              <CloseIcon />
            </button>
          </header>
          <footer class='mb-2 py-4'>
            <div class='flex w-full justify-center'>
              <Accordion.Root animated collapsible multiple={false} class='w-[min(400px,_100%)]'>
                {config.items.map((entryItem, index) => {
                  {
                    if (entryItem.items) {
                      return (
                        <CollapsibleAccordionItem item={entryItem} key={`entryItem-${index}`} onItemClick$={close$} />
                      );
                    } else if (entryItem.isCta) {
                      return (
                        <CallToActionAccordionItem item={entryItem} key={`entryItem-${index}`} onItemClick$={close$} />
                      );
                    }

                    return <LinkAccordionItem item={entryItem} key={`entryItem-${index}`} onItemClick$={close$} />;
                  }
                })}
              </Accordion.Root>
            </div>
          </footer>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});
