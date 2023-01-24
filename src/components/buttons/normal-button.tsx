import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  title: string
}

export const NormalButton = component$((props: ButtonProps) => {
  return (
    <>
      <div class="px-7 py-2.5 hover:opacity-75 bg-primary w-fit rounded cursor-pointer text-lg font-semibold leading-5 text-secondary">
        {props.title}
      </div>
    </>
  )
});
