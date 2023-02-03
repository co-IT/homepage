import { component$ } from '@builder.io/qwik';

export interface TimelineProps {
  items: { heading: string; text: string }[];
}

export const Timeline = component$((props: TimelineProps) => {
  return (
    <div class='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
      <div class='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700'>
        {props.items.map(item => (
          <>
            <div class='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary'>
              <h3 class='text-xl font-semibold tracking-wide'>
                {item.heading}
              </h3>

              <p class='mt-3'>{item.text}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
});
