import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Accordion } from '@qwik-ui/headless';
import type { MenuEntryItem } from '../../types/entry-menu-item.type';

type CollapsibleAccordionItemProps = {
  item: MenuEntryItem;
  key?: string;
  onItemClick$?: QRL<() => void>;
};

export const LinkAccordionItem = component$(
  ({ key, item, onItemClick$ }: CollapsibleAccordionItemProps) => {
    return (
      <Accordion.Item class='border-b py-4' key={key}>
        <Accordion.Header as='h3'>
          <Link
            href={item.path}
            class='font-bold text-secondary-900'
            onClick$={() => onItemClick$?.()}
          >
            {item.text}
          </Link>
        </Accordion.Header>
      </Accordion.Item>
    );
  }
);
