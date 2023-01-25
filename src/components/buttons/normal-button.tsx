import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  title: string;
  click: () => void;
}

export const NormalButton = component$((props: ButtonProps) => {
  return (
    <button class="px-7 py-2.5 hover:opacity-75 bg-primary w-fit rounded cursor-pointer text-lg font-semibold leading-5 text-secondary">
      {props.title}
    </button>
  )
});
