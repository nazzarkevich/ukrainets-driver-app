import Svg, { Path } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const LocationIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 13 14" fill="none">
      <Path
        stroke={color}
        d="M6.65412 8.01404C7.70404 8.01404 8.55518 7.16291 8.55518 6.11298C8.55518 5.06305 7.70404 4.21191 6.65412 4.21191C5.60419 4.21191 4.75305 5.06305 4.75305 6.11298C4.75305 7.16291 5.60419 8.01404 6.65412 8.01404Z"
      />
      <Path
        stroke={color}
        d="M1.54794 5.00426C2.74829 -0.272408 10.5658 -0.266315 11.7601 5.01036C12.4608 8.10568 10.5353 10.7257 8.84754 12.3465C7.62281 13.5286 5.68519 13.5286 4.45437 12.3465C2.77266 10.7257 0.847227 8.09959 1.54794 5.00426Z"
      />
    </Svg>
  );
};
