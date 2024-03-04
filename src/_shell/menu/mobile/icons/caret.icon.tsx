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
        d='M9 6.3641L16.0003 -1.73253e-06L18 1.81795L9 10L-7.15298e-07 1.81795L1.99968 -5.08557e-07L9 6.3641Z'
        fill='#666666'
      />
    </svg>
  );
};
