import Svg, { Path } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const EditIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.1025 4.15031L6.91875 11.7541C6.6475 12.0428 6.385 12.6116 6.3325 13.0053L6.00875 15.8403C5.895 16.8641 6.63 17.5641 7.645 17.3891L10.4625 16.9078C10.8562 16.8378 11.4075 16.5491 11.6787 16.2516L18.8625 8.64781C20.105 7.33531 20.665 5.83906 18.7312 4.01031C16.8062 2.19906 15.345 2.83781 14.1025 4.15031Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9037 5.41846C13.28 7.83346 15.24 9.67971 17.6725 9.92471"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.125 20.2505H20.875"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
