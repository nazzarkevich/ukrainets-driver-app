import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const TwoWayArrowsIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 21" fill="none">
      <Path
        fill={color}
        d="M13 -5.31323e-07C12.744 -5.20132e-07 12.477 0.0860053 12.281 0.281005L8.59399 4L10 5.406L12 3.43798L12 18C12 18.552 12.448 19 13 19C13.552 19 14 18.552 14 18L14 3.43798L16 5.406L17.406 4L13.719 0.281005C13.523 0.0860052 13.256 -5.42513e-07 13 -5.31323e-07ZM5 0.999999C4.448 0.999999 4 1.448 4 2L4 16.563L2 14.594L0.593994 16L4.28101 19.719C4.67201 20.109 5.32799 20.109 5.71899 19.719L9.40601 16L8 14.594L6 16.563L6 2C6 1.448 5.552 0.999999 5 0.999999Z"
      />
    </Svg>
  );
};
