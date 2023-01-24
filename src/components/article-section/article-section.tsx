import { component$ } from "@builder.io/qwik";
import { ArticleCard } from "../cards";

export const ArticleSection = component$(() => {
  return (
    <>
      <div class="w-full container mx-auto flex flex-col gap-y-20">
        <div>
          <ArticleCard direction="right" />
          <hr class="mt-20" />
        </div>

        <div>
          <ArticleCard direction="left" />
          <hr class="mt-20" />
        </div>

        <div>
          <ArticleCard direction="right" />
          <hr class="mt-20" />
        </div>
      </div>
    </>
  )
});