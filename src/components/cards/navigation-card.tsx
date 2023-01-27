import { $, component$, useContext } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { MenuContext } from "../common";
import type { MenuStateType } from "../common";

interface NavigationCardProps {
  title: string;
  link: string;
  text: string;
}

export const NavigationCard = component$((props: NavigationCardProps) => {
  const location = useLocation();
  const path = location.pathname;
  const menuState = useContext<MenuStateType>(MenuContext);
  const navigation = useNavigate();
  const clickNavigation = $((link: string) => {
    navigation.path = link;
    menuState.isOpen = false;
  });

  return (
    <div
      class={ path === props.link + '/' ? "w-full bg-white rounded-xl px-4 py-10 flex flex-col gap-y-6 items-center cursor-pointer hover:opacity-100" : "w-full bg-[#ffcd61] rounded-xl px-4 py-10 flex flex-col gap-y-6 items-center cursor-pointer hover:bg-white" }
      onClick$={() => clickNavigation(props.link)}
    >
      <div class="text-lg text-secondary font-bold leading-5">
        {props.title}
      </div>

      <div class="h-0.5 w-4 bg-black" />

      <div class="text-lg text-secondary font-semibold leading-5 text-center">
        {props.text}
      </div>
    </div>
  )
});