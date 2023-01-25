import { component$ } from "@builder.io/qwik";

interface ArticleCardProps {
  direction: "left" | "right";
  imageSource: string;
  imageAlternateText: string;
  headingSmall: string;
  heading: string;
  text: string;
}

export const ArticleCard = component$((props: ArticleCardProps) => {
  return (
    <>
      {props.direction == "right" ?
        <div class="px-10 flex flex-row gap-x-12">
          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent" />
              <div class="text-[40px] text-secondary font-bold leading-[50px]">
                {props.heading}
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal">
              {props.text}
            </div>
          </div>

          <div class="w-full">
            <img src={props.imageSource} alt={props.imageAlternateText} />
          </div>
        </div>
        :
        <div class="px-10 flex flex-row gap-x-12">
          <div class="w-full">
            <img src={props.imageSource} alt={props.imageAlternateText} />
          </div>

          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent" />
              <div class="text-[40px] text-secondary font-bold leading-[50px]">
                {props.heading}
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal">
              {props.text}
            </div>
          </div>
        </div>
      }
    </>
  )
});
