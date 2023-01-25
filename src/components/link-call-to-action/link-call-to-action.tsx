import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface LinkCallToActionProps {
  href: string;
  target?: '_blank' | 'self' | 'top' | '_parent';
}

export const linkContent = (
  <span class="text-secondary  bg-primary px-7 py-2.5 hover:opacity-75 w-fit rounded cursor-pointer text-lg font-semibold leading-5 ">
    <Slot />
  </span>
);

export const LinkCallToAction = component$((props: LinkCallToActionProps) => {
  return (
    <>
      {props.target ? (
        <a href={props.href} target={props.target} class="inline-flex">
          {linkContent}
        </a>
      ) : (
        <Link href={props.href}>{linkContent}</Link>
      )}
    </>
  );
});
