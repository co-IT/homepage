import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface NavigationCardProps {
  title: string;
  link: string;
  text: string
}

export const NavigationCard = component$((props: NavigationCardProps) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <a
      href={props.link}
      class={ path === props.link + '/' ? "w-full bg-white rounded-xl px-4 py-10 flex flex-col gap-y-6 items-center hover:opacity-100" : "w-full bg-[#ffcd60] rounded-xl px-4 py-10 flex flex-col gap-y-6 items-center hover:bg-white" }
    >
      <div class="text-lg text-secondary font-bold leading-5">
        {props.title}
      </div>

      <div class="h-0.5 w-4 bg-black" />

      <div class="text-lg text-secondary font-semibold leading-5 text-center">
        {props.text}
      </div>
    </a>
  )
});