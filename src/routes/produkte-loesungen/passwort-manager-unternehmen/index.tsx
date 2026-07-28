import type { DocumentHead, DocumentHeadValue } from '@builder.io/qwik-city';
import { head as passwortManagerHead } from '../../produkte/passwort-manager';

export { default } from '../../produkte/passwort-manager';

const headWithoutInheritedRobotsMeta = passwortManagerHead as DocumentHeadValue;

export const head: DocumentHead = {
  ...headWithoutInheritedRobotsMeta,
  meta: headWithoutInheritedRobotsMeta.meta?.filter(meta => meta.name?.toLowerCase() !== 'robots')
};
