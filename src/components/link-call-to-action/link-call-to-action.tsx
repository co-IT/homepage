import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

type LinkCallToActionProps = QwikIntrinsicElements['a'];

export const linkContent = (
  <span class='w-fit  cursor-pointer rounded bg-primary px-7 py-2.5 text-lg font-semibold leading-5 text-secondary-900 hover:opacity-75 '>
    <Slot />
  </span>
);

export const LinkCallToAction = component$((props: LinkCallToActionProps) => {
  return (
    <>
      {props.target ? (
        <a class='inline-flex' {...props}>
          {linkContent}
        </a>
      ) : (
        <Link {...props}>{linkContent}</Link>
      )}
    </>
  );
});
