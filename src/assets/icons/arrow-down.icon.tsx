import Svg, { Path } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const ArrowDownIcon = ({ size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 18" fill="none">
      <Path
        d="M6.32689 7.6685L8.9954 10.3333L11.6602 7.66479"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
