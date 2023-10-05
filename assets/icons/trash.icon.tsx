import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const TrashIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M14 3c.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.66c663 3.31301L5.81329 2.43967C5.91996 1.80634 5.99996 1.33301 7.12663 1.33301H8.87329C9.99996 1.33301 10.0866 1.83301 10.1866 2.44634L10.3333 3.31301"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5c667 6.09375L12.1334 12.8071C12.06 13.8537 12 14.6671 10.14 14.6671H5.86002C4.00002 14.6671 3.94002 13.8537 3.86668 12.8071L3.43335 6.09375"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.88c672 11H9.10672"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.33c337 8.33301H9.66671"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
