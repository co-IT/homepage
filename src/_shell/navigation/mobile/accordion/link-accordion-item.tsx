import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { AccordionHeader, AccordionItem } from '@qwik-ui/headless';
import type { NavTopMenuItem } from '../../../nav-menu/nav-top-menu-item.type';

type CollapsibleAccordionItemProps = {
  item: NavTopMenuItem;
  key?: string;
  onItemClick$?: QRL<() => void>;
};

export const LinkAccordionItem = component$(
  ({ key, item, onItemClick$ }: CollapsibleAccordionItemProps) => {
    return (
      <AccordionItem class='border-b py-4' key={key}>
        <AccordionHeader as='h3'>
          <Link
            href={item.path}
            class='font-bold text-secondary-900'
            onClick$={() => onItemClick$?.()}
          >
            {item.text}
          </Link>
        </AccordionHeader>
      </AccordionItem>
    );
  }
);
