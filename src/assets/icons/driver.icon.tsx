import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const DriverIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 17.7167H16.3667C15.7 17.7167 15.0667 17.9751 14.6 18.4417L13.175 19.8501C12.525 20.4917 11.4667 20.4917 10.8167 19.8501L9.39166 18.4417C8.925 17.9751 8.28333 17.7167 7.625 17.7167H7C5.61667 17.7167 4.5 16.6084 4.5 15.2417V6.14175C4.5 4.77508 5.61667 3.66675 7 3.66675H17C18.3833 3.66675 19.5 4.77508 19.5 6.14175V15.2334C19.5 16.6001 18.3833 17.7167 17 17.7167Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0583 9.45825C12.025 9.45825 11.9749 9.45825 11.9333 9.45825C11.0583 9.42492 10.3666 8.71659 10.3666 7.83325C10.3666 6.93325 11.0916 6.20825 11.9916 6.20825C12.8916 6.20825 13.6166 6.94159 13.6166 7.83325C13.625 8.71659 12.9333 9.43325 12.0583 9.45825Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.70833 11.9666C8.59999 12.7082 8.59999 13.9166 9.70833 14.6582C10.9667 15.4999 13.0333 15.4999 14.2917 14.6582C15.4 13.9166 15.4 12.7082 14.2917 11.9666C13.0333 11.1332 10.975 11.1332 9.70833 11.9666Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
