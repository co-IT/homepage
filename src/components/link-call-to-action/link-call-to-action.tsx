import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface LinkCallToActionProps {
  href: string;
}

export const LinkCallToAction = component$((props: LinkCallToActionProps) => {
  return (
    <Link href={props.href}>
      <span class="inline-block bg-primary text-black font-semibold rounded-sm pl-8 pr-8 pt-2 pb-2">
        <Slot />
      </span>
    </Link>
  );
});
