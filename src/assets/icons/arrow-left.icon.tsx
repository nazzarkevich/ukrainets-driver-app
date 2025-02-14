import Svg, { Path } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const ArrowLeftIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5303 3.54975C15.8232 3.84264 15.8232 4.31751 15.5303 4.61041L9.01033 11.1304C8.53322 11.6075 8.53322 12.3926 9.01033 12.8697L15.5303 19.3897C15.8232 19.6826 15.8232 20.1575 15.5303 20.4504C15.2374 20.7433 14.7626 20.7433 14.4697 20.4504L7.94967 13.9304C6.88677 12.8675 6.88677 11.1326 7.94967 10.0697L14.4697 3.54975C14.7626 3.25685 15.2374 3.25685 15.5303 3.54975Z"
      />
    </Svg>
  );
};
