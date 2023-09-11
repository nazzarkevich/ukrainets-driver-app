import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const LogOutIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.2512 8.24357V7.38622C14.2512 5.51622 12.735 4 10.865 4H6.3853C4.51622 4 3 5.51622 3 7.38622V17.6138C3 19.4838 4.51622 21 6.3853 21H10.8742C12.7387 21 14.2512 19.4884 14.2512 17.6239V16.7574"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4939 12.4999H9.42923"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.803 9.82111L20.4936 12.4998L17.803 15.1793"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
