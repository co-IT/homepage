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
        <div class="lg:px-10 flex flex-col lg:flex-row gap-x-12">
          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent mx-auto lg:mx-0" />
              <div class="text-[28px] lg:text-[40px] text-secondary font-bold leading-8 lg:leading-[50px] text-center lg:text-left px-6 lg:px-0">
                {props.heading}
              </div>
              <div class="w-full mt-4 lg:hidden">
                <img src={props.imageSource} alt={props.imageAlternateText} />
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal text-left px-10 lg:px-0">
              {props.text}
            </div>
          </div>

          <div class="w-full hidden lg:block">
            <img src={props.imageSource} alt={props.imageAlternateText} />
          </div>
        </div>
        :
        <div class="lg:px-10 flex flex-col lg:flex-row gap-x-12">
          <div class="w-full hidden lg:block">
            <img src={props.imageSource} alt={props.imageAlternateText} />
          </div>

          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent mx-auto lg:mx-0" />
              <div class="text-[28px] lg:text-[40px] text-secondary font-bold leading-8 lg:leading-[50px] text-center lg:text-left px-6 lg:px-0">
                {props.heading}
              </div>
              <div class="w-full mt-4 lg:hidden">
                <img src={props.imageSource} alt={props.imageAlternateText} />
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal text-left px-10 lg:px-0">
              {props.text}
            </div>
          </div>
        </div>
      }
    </>
  )
});
