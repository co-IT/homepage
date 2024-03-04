import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger
} from '@qwik-ui/headless';
import type { MenuEntryItem } from '../../types/entry-menu-item.type';
import { CaretIcon } from '../icons';

type CollapsibleAccordionItemProps = {
  item: MenuEntryItem;
  key?: string;
  onItemClick$?: QRL<() => void>;
};

export const CollapsibleAccordionItem = component$(
  ({ key, item, onItemClick$ }: CollapsibleAccordionItemProps) => {
    return (
      <AccordionItem class='border-b' key={key}>
        <AccordionHeader as='h3'>
          <AccordionTrigger class='group flex w-full items-center justify-between py-4 text-left'>
            <span class='font-bold text-secondary-900'>{item.text}</span>
            <span class='pl-2'>
              <CaretIcon class='ease transition-transform duration-500 group-aria-expanded:rotate-180 group-aria-expanded:transform' />
            </span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class=' accordion-animation-1 overflow-hidden'>
          <div class='grid gap-2 pb-4 pl-2'>
            {item.items?.map((category, index) => (
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
                        onClick$={() => onItemClick$?.()}
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
    );
  }
);
