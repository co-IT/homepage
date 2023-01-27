import { component$ } from "@builder.io/qwik";
import { NavigationCard } from "../cards";
import { BlueMailIcon, BlueMapIcon, BluePhoneIcon, YellowCloseIcon } from "../icons";
import { WhiteCloseIcon } from "../icons/white-close-icon";

export const Navigation = component$(() => {
  const NavigationCardItems = [
    {
      title: "Lösungen",
      link: "/solutions",
      text: "Alles aus einer Hand"
    },
    {
      title: "Qualität",
      link: "/quality",
      text: "Auf den Punkt abgestimmt"
    },
    {
      title: "Karriere",
      link: "/career",
      text: "Geprägt durch Menschen"
    },
    {
      title: "Über uns",
      link: "/about",
      text: "Motiviert von Werten"
    }
  ];

  return (
    <div class="w-full bg-primary pt-12 lg:pt-16 pb-12 lg:pb-24 absolute top-0 z-10 shadow-xl">
      <div class="container mx-auto flex flex-col gap-y-14 lg:gap-y-20">
        <div class="flex justify-between flex-col lg:flex-row">
          <img src="/img/navigation/logo.svg" alt="logo" class="w-32 lg:w-44 h-fit mx-auto lg:mx-0" />
          <div class="flex-row gap-x-2 my-auto cursor-pointer hover:opacity-75 hidden lg:flex">
            <WhiteCloseIcon />
            <div class="text-lg text-white font-bold leading-5 my-auto">
              Schließen
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-y-14">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-7 lg:px-0">
            {NavigationCardItems.map((cardItem, key) => (
              <NavigationCard title={cardItem.title} link={cardItem.link} text={cardItem.text} key={key} />
            ))}
          </div>

          <div class="flex justify-center">
            <a href="/contact" class="bg-secondary hover:opacity-75 text-white font-bold text-lg w-fit px-14 py-5 rounded">
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div class="flex lg:hidden flex-row justify-between px-10">
          <div class="flex flex-row gap-x-5">
            <a
              href="tel:+49721935163052"
              target="_blank"
              class="w-14 h-14 bg-white rounded-full shadow-lg relative"
            >
              <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <BluePhoneIcon />
              </div>
            </a>
            <a
              href="mailto:info@co-IT.eu"
              target="_blank"
              class="w-14 h-14 bg-white rounded-full shadow-lg relative"
            >
              <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <BlueMailIcon />
              </div>
            </a>
            <a
              href="https://g.page/communicativeIT?share"
              target="_blank"
              class="w-14 h-14 bg-white rounded-full shadow-lg relative"
            >
              <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <BlueMapIcon />
              </div>
            </a>
          </div>

          <div class="w-14 h-14 bg-white rounded-full shadow-lg relative">
            <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
              <YellowCloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});