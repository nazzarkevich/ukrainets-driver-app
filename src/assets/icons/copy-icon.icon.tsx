import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const CopyIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 14" fill="none">
      <Path
        d="M9.99998 7.52508V9.97508C9.99998 12.0167 9.18331 12.8334 7.14165 12.8334H4.69165C2.64998 12.8334 1.83331 12.0167 1.83331 9.97508V7.52508C1.83331 5.48341 2.64998 4.66675 4.69165 4.66675H7.14165C9.18331 4.66675 9.99998 5.48341 9.99998 7.52508Z"
        stroke={color}
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 4.02508V6.47508C13.5 8.51675 12.6833 9.33342 10.6416 9.33342H9.99998V7.52508C9.99998 5.48341 9.18331 4.66675 7.14165 4.66675H5.33331V4.02508C5.33331 1.98341 6.14998 1.16675 8.19165 1.16675H10.6416C12.6833 1.16675 13.5 1.98341 13.5 4.02508Z"
        stroke={color}
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
