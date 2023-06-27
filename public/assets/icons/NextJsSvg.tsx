import { IconProps } from '@interfaces';

export function NextJsSvg({ width, height }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      stroke='currentColor'
      fill='none'
      strokeWidth={2}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993' />
      <path d='M15 12v-3' />
    </svg>
  );
}
