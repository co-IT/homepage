import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Accordion } from '@qwik-ui/headless';
import type { MenuEntryItem } from '../../types/entry-menu-item.type';

type CallToActionAccordionItemProps = {
  key?: string;
  item: MenuEntryItem;
  onItemClick$?: QRL<() => void>;
};

export const CallToActionAccordionItem = component$(
  ({ key, item, onItemClick$ }: CallToActionAccordionItemProps) => {
    return (
      <Accordion.Item key={key} class='py-8'>
        <Accordion.Header>
          <a
            href={item.path}
            class='border-2 border-primary px-6 py-2 text-sm text-primary hover:bg-primary hover:text-secondary-950'
            onClick$={() => onItemClick$?.()}
          >
            {item.text}
          </a>
        </Accordion.Header>
      </Accordion.Item>
    );
  }
);
