import { component$ } from '@builder.io/qwik';
import type { MenuItem } from '../types/menu-item.type';

export const CategoryItem = component$(
  ({ category }: { category: MenuItem }) => {
    return (
      <>
        <h3 class='text-xl font-semibold text-gray-500'>{category.text}</h3>
        <ul class='mt-8 grid grid-cols-2 gap-x-8 gap-y-2'>
          {category.items?.map(item => {
            return (
              <li key={item.text}>
                <a
                  href={item.path}
                  class='flex min-w-0 gap-4 rounded-lg py-3 pl-2 pr-4 hover:bg-gray-300'
                >
                  {item.icon ? <span class='shrink-0'>{item.icon}</span> : null}
                  <div class='flex min-w-0 flex-col'>
                    <h3 class='whitespace-nowrap text-xl font-semibold text-secondary-950'>
                      {item.text}
                    </h3>
                    <p class='text-gray-500'>{item.description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
);
