import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const LetterIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 18" fill="none">
      <Path
        d="M1 5.58333C1 2.375 2.83333 1 5.58333 1H14.75C17.5 1 19.3333 2.375 19.3333 5.58333V12C19.3333 15.2083 17.5 16.5833 14.75 16.5833H5.58333"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.75 6.04169L11.8808 8.33335C10.9367 9.08502 9.38749 9.08502 8.44332 8.33335L5.58333 6.04169"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 12.9167H6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 9.25H3.75"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
