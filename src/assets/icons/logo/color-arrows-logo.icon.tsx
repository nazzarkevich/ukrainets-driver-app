import Svg, { Path } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const ColorArrowsLogoIcon = ({ width = 25, height = 25 }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 53 50" fill="none">
      <Path
        d="M7.2019 49.9209C4.83216 49.9209 2.56327 48.6352 1.3784 46.4168C-0.31067 43.1899 0.899407 39.2067 4.12628 37.5176L12.1431 33.2824L7.35316 27.2572C5.08427 24.4085 5.56325 20.274 8.41198 18.0051C11.2607 15.7362 15.3951 16.2152 17.664 19.0639L27.3699 31.316C28.58 32.8538 29.0589 34.8454 28.6556 36.7613C28.2522 38.6773 27.0169 40.3159 25.2775 41.2235L10.2523 49.1646C9.26912 49.694 8.23551 49.9209 7.2019 49.9209Z"
        fill="#1C5BFF"
      />
      <Path
        d="M40.1768 33.3579C38.2356 33.3579 36.3196 32.5008 35.0087 30.8622L25.2777 18.6101C24.0676 17.0723 23.5886 15.0807 23.992 13.1648C24.3953 11.2488 25.6306 9.61015 27.3701 8.70259L42.3952 0.761453C45.6221 -0.927615 49.6053 0.28247 51.2944 3.50935C52.9834 6.73622 51.7733 10.7194 48.5465 12.4085L40.5297 16.6437L45.3196 22.6689C47.5885 25.5176 47.1095 29.6521 44.2608 31.921C43.0759 32.9042 41.6137 33.3579 40.1768 33.3579Z"
        fill="#FFD00B"
      />
    </Svg>
  );
};
