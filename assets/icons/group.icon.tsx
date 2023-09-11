import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const GroupIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 11.6667H10.8333C11.75 11.6667 12.5 10.9167 12.5 10.0001V1.66675H5C3.75 1.66675 2.65834 2.3584 2.09167 3.37507"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.66663 14.1667C1.66663 15.5501 2.78329 16.6667 4.16663 16.6667H4.99996C4.99996 15.7501 5.74996 15.0001 6.66663 15.0001C7.58329 15.0001 8.33329 15.7501 8.33329 16.6667H11.6666C11.6666 15.7501 12.4166 15.0001 13.3333 15.0001C14.25 15.0001 15 15.7501 15 16.6667H15.8333C17.2166 16.6667 18.3333 15.5501 18.3333 14.1667V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8334V8.33341C15 7.87508 15.375 7.50008 15.8333 7.50008H16.9083L15.4833 5.00842C15.1833 4.49176 14.6333 4.16675 14.0333 4.16675H12.5V10.0001C12.5 10.9167 11.75 11.6667 10.8333 11.6667H9.99996"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 18.3333C14.2538 18.3333 15 17.5871 15 16.6667C15 15.7462 14.2538 15 13.3333 15C12.4128 15 11.6667 15.7462 11.6667 16.6667C11.6667 17.5871 12.4128 18.3333 13.3333 18.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3333 10V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.3333 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.66663 6.66675H6.66663"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.66663 9.16675H4.99996"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.66663 11.6667H3.33329"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
