import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const ArrowRightIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.63189 2.85C6.84505 2.63683 7.19065 2.63683 7.40381 2.85L12.1489 7.59511C12.9225 8.36866 12.9225 9.63126 12.1489 10.4048L7.40381 15.1499C7.19065 15.3631 6.84505 15.3631 6.63189 15.1499C6.41873 14.9368 6.41873 14.5912 6.63189 14.378L11.377 9.63288C11.7242 9.28566 11.7242 8.71426 11.377 8.36703L6.63189 3.62192C6.41873 3.40876 6.41873 3.06316 6.63189 2.85Z"
      />
    </Svg>
  );
};
