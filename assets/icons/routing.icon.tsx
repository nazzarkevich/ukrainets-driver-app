import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const RoutingIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M1.20751 2.68331C1.67417 0.664972 4.71334 0.664972 5.17417 2.68331C5.44834 3.86747 4.69584 4.87081 4.04251 5.49497C3.56417 5.94997 2.81167 5.94414 2.33334 5.49497C1.68584 4.87081 0.93334 3.86747 1.20751 2.68331Z"
        stroke={color}
      />
      <Path
        d="M8.79083 9.68331C9.2575 7.66497 12.3142 7.66497 12.7808 9.68331C13.055 10.8675 12.3025 11.8708 11.6433 12.495C11.165 12.95 10.4067 12.9441 9.92833 12.495C9.26916 11.8708 8.51666 10.8675 8.79083 9.68331Z"
        stroke={color}
      />
      <Path
        d="M7 2.91669H8.56334C9.6425 2.91669 10.1442 4.25252 9.33334 4.96419L4.6725 9.04169C3.86167 9.74752 4.36334 11.0834 5.43667 11.0834H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.20029 3.20835H3.20703"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7836 10.2084H10.7904"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
