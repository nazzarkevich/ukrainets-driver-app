import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const SimpleBoxIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 26" fill="none">
      <Path
        d="M3.302 8.25L12.4999 13.5729L21.6353 8.28125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 23.0104V13.5625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3438 3.08334L4.78129 6.16667C3.52087 6.86459 2.48962 8.61459 2.48962 10.0521V15.9375C2.48962 17.375 3.52087 19.125 4.78129 19.8229L10.3438 22.9167C11.5313 23.5729 13.4792 23.5729 14.6667 22.9167L20.2292 19.8229C21.4896 19.125 22.5209 17.375 22.5209 15.9375V10.0521C22.5209 8.61459 21.4896 6.86459 20.2292 6.16667L14.6667 3.07292C13.4688 2.41667 11.5313 2.41667 10.3438 3.08334Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
