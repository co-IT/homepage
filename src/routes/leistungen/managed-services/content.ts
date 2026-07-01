import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const managedServices: PageContent = {
  title: 'co-IT - Managed Services',
  metaDescription:
    'Managed Services für sicheren, stabilen und planbaren IT-Betrieb mit Monitoring, Patch-Management, Backup und klaren Prozessen.',
  headerHeading: 'Managed Services',
  headerSubheading: 'IT-Betrieb planbarer machen',
  backgroundImage: createBackgroundImage('Managed Services'),
  contentHeading: 'Managed Services für sicheren und stabilen IT-Betrieb',
  articles: [
    {
      direction: 'right',
      heading: 'Ihre IT läuft. Planbarer.',
      text: 'Proaktiver Betrieb statt reaktive Feuerwehr. Wir überwachen Ihre Systeme, erkennen Probleme, bevor sie spürbar werden und halten Ihre IT-Umgebung durch strukturiertes Patch-Management aktuell.',
      image: createImage('Managed Services')
    },
    {
      direction: 'left',
      heading: 'Was Ihre IT im Alltag stabiler macht.',
      text: 'Remote-Administration, Endpoint-Monitoring, Backup und Wiederherstellung, Patch-Management für Windows und Drittanbieter-Software, Microsoft 365 Disaster Recovery, dokumentierte Tickets, regelmäßige Prüfungen und klare Prozesse schaffen Transparenz über Zustand und Risiken Ihrer IT.',
      image: createImage('stabilen IT-Betrieb')
    },
    {
      direction: 'right',
      heading: 'Vom ständigen Feuerlöschen zum Brandschutz.',
      text: 'Viele Unternehmen reagieren auf IT-Probleme erst, wenn es zu spät ist. Managed Services setzen früher an: Wir überwachen Systeme, halten Ihre Umgebung aktuell, dokumentieren Veränderungen und verbessern kontinuierlich. Unser Ziel ist es nicht nur, Brände schnell zu löschen - sondern dafür zu sorgen, dass Brandherde gar nicht erst entstehen.',
      image: createImage('proaktiven IT-Betrieb')
    }
  ]
};
