import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const SettingsIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.3333 7.41669H15.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99999 7.41669H3.66666"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3333 10.3333C11.9442 10.3333 13.25 9.0275 13.25 7.41667C13.25 5.80584 11.9442 4.5 10.3333 4.5C8.72249 4.5 7.41666 5.80584 7.41666 7.41667C7.41666 9.0275 8.72249 10.3333 10.3333 10.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3333 16.5833H17"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.66666 16.5833H3.66666"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6667 19.5C15.2775 19.5 16.5833 18.1942 16.5833 16.5834C16.5833 14.9725 15.2775 13.6667 13.6667 13.6667C12.0558 13.6667 10.75 14.9725 10.75 16.5834C10.75 18.1942 12.0558 19.5 13.6667 19.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
