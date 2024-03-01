import { component$ } from '@builder.io/qwik';
import {
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
} from '@qwik-ui/headless';

export const mobileNavigation = component$(() => {
  return (
    <AccordionRoot>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Title</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
});
