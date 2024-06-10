import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Section } from '~/components/section';
import { LinkedHeading } from '../../components/link-heading';
import { contractDocumentsByCategory } from './contract-documents';

export default component$(() => {
  return (
    <>
      <Section>
        <LinkedHeading>Dokumente</LinkedHeading>
        {contractDocumentsByCategory.map(({ category, documents }, index) => {
          return (
            <div class='grid gap-4 py-12' key={index} id={category}>
              <LinkedHeading href={`#${category}`}>{category}</LinkedHeading>
              <table class='max-w-md border-collapse border border-slate-500'>
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
            </div>
          );
        })}
      </Section>
    </>
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
