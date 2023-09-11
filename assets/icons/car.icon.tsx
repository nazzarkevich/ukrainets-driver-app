import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const CarIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.5 3.66675V12.0001C14.5 12.9167 13.75 13.6667 12.8333 13.6667H3.66663V7.00008C3.66663 5.15841 5.15829 3.66675 6.99996 3.66675H14.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3333 13.6667V16.1667C20.3333 17.5501 19.2166 18.6667 17.8333 18.6667H17C17 17.7501 16.25 17.0001 15.3333 17.0001C14.4166 17.0001 13.6666 17.7501 13.6666 18.6667H10.3333C10.3333 17.7501 9.58329 17.0001 8.66663 17.0001C7.74996 17.0001 6.99996 17.7501 6.99996 18.6667H6.16663C4.78329 18.6667 3.66663 17.5501 3.66663 16.1667V13.6667H12.8333C13.75 13.6667 14.5 12.9167 14.5 12.0001V6.16675H16.0333C16.6333 6.16675 17.1833 6.49176 17.4833 7.00842L18.9083 9.50008H17.8333C17.375 9.50008 17 9.87508 17 10.3334V12.8334C17 13.2917 17.375 13.6667 17.8333 13.6667H20.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.66667 20.3333C9.58714 20.3333 10.3333 19.5871 10.3333 18.6667C10.3333 17.7462 9.58714 17 8.66667 17C7.74619 17 7 17.7462 7 18.6667C7 19.5871 7.74619 20.3333 8.66667 20.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3333 20.3333C16.2538 20.3333 17 19.5871 17 18.6667C17 17.7462 16.2538 17 15.3333 17C14.4128 17 13.6667 17.7462 13.6667 18.6667C13.6667 19.5871 14.4128 20.3333 15.3333 20.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3333 12V13.6667H17.8333C17.375 13.6667 17 13.2917 17 12.8333V10.3333C17 9.875 17.375 9.5 17.8333 9.5H18.9083L20.3333 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
