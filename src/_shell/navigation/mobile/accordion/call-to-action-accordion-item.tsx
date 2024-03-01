import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { AccordionHeader, AccordionItem } from '@qwik-ui/headless';
import type { NavTopMenuItem } from '../../../nav-menu/nav-top-menu-item.type';

type CallToActionAccordionItemProps = {
  key?: string;
  item: NavTopMenuItem;
  onItemClick$?: QRL<() => void>;
};

export const CallToActionAccordionItem = component$(
  ({ key, item, onItemClick$ }: CallToActionAccordionItemProps) => {
    return (
      <AccordionItem key={key} class='py-8'>
        <AccordionHeader>
          <a
            href={item.path}
            class='border-2 border-primary px-6 py-2 text-sm text-primary hover:bg-primary hover:text-secondary-950'
            onClick$={() => onItemClick$?.()}
          >
            {item.text}
          </a>
        </AccordionHeader>
      </AccordionItem>
    );
  }
);
