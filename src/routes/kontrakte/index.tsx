import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Accordion } from '@qwik-ui/headless';
import { Section } from '~/components/section';
import { CaretIcon } from '../../_shell/menu/mobile/icons';
import { LinkedHeading } from '../../components/link-heading';
import { contractDocumentsByCategory } from './contract-documents';

export default component$(() => {
  return (
    <Section id='dokumente'>
      <LinkedHeading href='#dokumente'>Dokumente</LinkedHeading>
      <Accordion.Root animated collapsible class='max-w-lg'>
        {contractDocumentsByCategory.map(({ category, documents }, index) => {
          return (
            <Accordion.Item key={index}>
              <Accordion.Header as='h3'>
                <Accordion.Trigger class='group flex w-full items-center justify-between py-4 text-left'>
                  <span class='font-bold text-secondary-900'>{category}</span>
                  <span class='pl-2'>
                    <CaretIcon class='ease transition-transform duration-500 group-aria-expanded:rotate-180 group-aria-expanded:transform' />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <table class='border-collapse border border-slate-500'>
                  <thead>
                    <tr>
                      <th class='border border-slate-600 p-2'>Dokument</th>
                      <th class='border border-slate-600 p-2'>Version</th>
                      <th class='border border-slate-600 p-2'>Erstellt am</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((document, index) => (
                      <tr key={index}>
                        <td class='border border-slate-600 p-2 underline hover:text-blue-600'>
                          <a href={document.url} target='_blank'>
                            {document.name}
                          </a>
                        </td>
                        <td class='border border-slate-600 p-2'>{document.version}</td>
                        <td class='border border-slate-600 p-2'>{document.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </Section>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Kontrakte',

  frontmatter: {
    header: {
      type: 'default',
      configuration: {
        heading: 'Kontrakte'
      }
    }
  }
};
