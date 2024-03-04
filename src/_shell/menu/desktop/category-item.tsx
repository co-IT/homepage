import { component$ } from '@builder.io/qwik';
import type { MenuItem } from '../types/menu-item.type';

export const CategoryItem = component$(
  ({ category }: { category: MenuItem }) => {
    return (
      <>
        <h3 class='text-xl font-semibold text-gray-500'>{category.text}</h3>
        <ul class='mt-8 flex flex-col gap-3'>
          {category.items?.map(item => {
            return (
              <li key={item.text}>
                <a
                  href={item.path}
                  class='flex gap-4 rounded-lg py-4 pl-2 pr-4 hover:bg-gray-300'
                >
                  {item.icon ? <span>{item.icon}</span> : null}
                  <div class='flex flex-col'>
                    <h3 class='text-xl font-semibold text-secondary-950'>
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
