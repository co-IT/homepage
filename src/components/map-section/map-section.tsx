import { component$ } from "@builder.io/qwik";
import { MapCard } from "../cards";

export const MapSection = component$(() => {
  return (
    <>
      <div class="container mx-auto">
        <div class="flex flex-col gap-y-16">
          <MapCard />
          <MapCard />
        </div>
      </div>
    </>
  )
});