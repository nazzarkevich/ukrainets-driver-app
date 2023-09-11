import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const DotsMenuIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        fill={color}
        d="M4.50001 14C5.32845 14 6.00002 13.3285 6.00002 12.5C6.00002 11.6716 5.32845 11 4.50001 11C3.67158 11 3 11.6716 3 12.5C3 13.3285 3.67158 14 4.50001 14Z"
      />
      <Path
        fill={color}
        d="M12 14C12.8285 14 13.5 13.3285 13.5 12.5C13.5 11.6716 12.8285 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3285 11.1716 14 12 14Z"
      />
      <Path
        fill={color}
        d="M19.5 14C20.3284 14 21 13.3285 21 12.5C21 11.6716 20.3284 11 19.5 11C18.6715 11 17.9999 11.6716 17.9999 12.5C17.9999 13.3285 18.6715 14 19.5 14Z"
      />
    </Svg>
  );
};
