import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const CategoryIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.45831 8.41659H6.04165C7.62498 8.41659 8.41665 7.62492 8.41665 6.04159V4.45825C8.41665 2.87492 7.62498 2.08325 6.04165 2.08325H4.45831C2.87498 2.08325 2.08331 2.87492 2.08331 4.45825V6.04159C2.08331 7.62492 2.87498 8.41659 4.45831 8.41659Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9583 8.41659H15.5417C17.125 8.41659 17.9167 7.62492 17.9167 6.04159V4.45825C17.9167 2.87492 17.125 2.08325 15.5417 2.08325H13.9583C12.375 2.08325 11.5833 2.87492 11.5833 4.45825V6.04159C11.5833 7.62492 12.375 8.41659 13.9583 8.41659Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9583 17.9166H15.5417C17.125 17.9166 17.9167 17.1249 17.9167 15.5416V13.9583C17.9167 12.3749 17.125 11.5833 15.5417 11.5833H13.9583C12.375 11.5833 11.5833 12.3749 11.5833 13.9583V15.5416C11.5833 17.1249 12.375 17.9166 13.9583 17.9166Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.45831 17.9166H6.04165C7.62498 17.9166 8.41665 17.1249 8.41665 15.5416V13.9583C8.41665 12.3749 7.62498 11.5833 6.04165 11.5833H4.45831C2.87498 11.5833 2.08331 12.3749 2.08331 13.9583V15.5416C2.08331 17.1249 2.87498 17.9166 4.45831 17.9166Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
