import type { PropsOf } from '@builder.io/qwik';

export const CaretIcon = (props: PropsOf<'svg'>) => {
  return (
    <svg
      width='18'
      height='10'
      viewBox='0 0 18 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9 3.6359L1.99969 10L0 8.18205L9 0L18 8.18205L16.0003 10L9 3.6359Z'
        fill='#666666'
      />
    </svg>
  );
};
