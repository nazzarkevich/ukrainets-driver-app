import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const SimpleUserIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 11 15" fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.01138 3.86725C3.01138 2.51315 4.10517 1.41418 5.46445 1.41418C6.81748 1.41418 7.91698 2.51333 7.91753 3.86624C7.91148 5.18558 6.88104 6.2545 5.58212 6.31286C5.50354 6.30716 5.42024 6.30743 5.34139 6.31291C4.04119 6.25516 3.01138 5.18554 3.01138 3.86725ZM5.46445 0.416992C3.55297 0.416992 2.01419 1.96388 2.01419 3.86725C2.01419 5.7309 3.48311 7.24834 5.33469 7.31058C5.35533 7.31127 5.376 7.31068 5.39658 7.30881C5.44125 7.30475 5.48915 7.30518 5.52121 7.30839C5.54325 7.31059 5.56542 7.31132 5.58757 7.31058C7.43951 7.24833 8.90695 5.731 8.91471 3.86933L8.91471 3.86725C8.91471 1.96315 7.36855 0.416992 5.46445 0.416992ZM9.17827 8.85072C8.16808 8.17603 6.86092 7.85433 5.57907 7.85433C4.29706 7.85433 2.98737 8.17609 1.97128 8.84979L1.96945 8.85102C1.06179 9.45863 0.541626 10.3074 0.541626 11.219C0.541626 12.1308 1.06196 12.9781 1.97014 13.5824C2.98334 14.2602 4.2919 14.5837 5.57408 14.5837C6.85652 14.5837 8.16534 14.26 9.17862 13.582L9.17871 13.582C10.0864 12.9744 10.6065 12.1256 10.6065 11.214C10.6065 10.3023 10.0863 9.45509 9.17827 8.85072ZM1.53881 11.219C1.53881 10.7165 1.8228 10.1495 2.52325 9.68028C3.3419 9.13782 4.44831 8.85151 5.57907 8.85151C6.71041 8.85151 7.81311 9.13809 8.62444 9.67996L8.62518 9.68046C9.32549 10.1464 9.60936 10.7116 9.60936 11.214C9.60936 11.7167 9.32512 12.284 8.624 12.7533C7.80912 13.2985 6.70479 13.5865 5.57408 13.5865C4.44333 13.5865 3.33896 13.2985 2.52408 12.7533L2.52298 12.7525C1.82268 12.2866 1.53881 11.7214 1.53881 11.219Z"
      />
    </Svg>
  );
};