import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Section } from '~/components/section';
import { LinkedHeading } from '../../components/link-heading';
import { contractDocumentsByCategory } from './contract-documents';

export default component$(() => {
  return (
    <>
      <Section>
        {contractDocumentsByCategory.map(({ category: app, documents }, appIndex) => (
          <div class='grid gap-8 py-12' key={appIndex} id={app}>
            {/* App / Category heading */}
            <LinkedHeading href={`#${app}`}>{app}</LinkedHeading>
            <div class='grid md:grid-cols-2 xl:grid-cols-3'>
              {documents.map((document, docIndex) => (
                <div key={docIndex} class='space-y-3'>
                  <h3 class='text-xl font-semibold'>{document.name}</h3>

                  <ul class='space-y-2 border-l-2 border-slate-400 pl-4'>
                    {document.versions.map((version, verIndex) => {
                      const isCurrent = !version.validTo;
                      return (
                        <li key={verIndex} class='relative'>
                          <span class='absolute -left-[17px] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400'></span>

                          <a href={version.url} target='_blank' class='block w-fit'>
                            <div class={`w-80 border border-slate-300 p-3 transition-all hover:border-secondary-800`}>
                              <div class='flex items-center justify-between'>
                                <div class='font-medium'>
                                  Version {version.version}
                                  {isCurrent && (
                                    <span class='ml-2 rounded bg-primary px-2 py-0.5 text-xs'>Aktuell</span>
                                  )}
                                </div>
                              </div>
                              <div class='mt-1 text-sm text-slate-600'>
                                {isCurrent && <span>ab {version.validFrom}</span>}
                                {!isCurrent && (
                                  <span>
                                    {version.validFrom} - {version.validTo}
                                  </span>
                                )}
                              </div>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Kontrakte',
  meta: [
    {
      name: 'robots',
      content: 'noindex,nofollow'
    }
  ],

  frontmatter: {
    header: {
      type: 'default',
      configuration: {
        heading: 'Kontrakte'
      }
    }
  }
};
