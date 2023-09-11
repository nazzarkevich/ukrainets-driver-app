import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const EyeSlashIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 19" fill="none">
      <Path
        fill={color}
        d="M7.10244 11.9599C6.95994 11.9599 6.81744 11.9074 6.70494 11.7949C6.08994 11.1799 5.75244 10.3624 5.75244 9.49994C5.75244 7.70744 7.20744 6.25244 8.99994 6.25244C9.86244 6.25244 10.6799 6.58994 11.2949 7.20494C11.3999 7.30994 11.4599 7.45244 11.4599 7.60244C11.4599 7.75244 11.3999 7.89494 11.2949 7.99994L7.49994 11.7949C7.38744 11.9074 7.24494 11.9599 7.10244 11.9599ZM8.99994 7.37744C7.82994 7.37744 6.87744 8.32994 6.87744 9.49994C6.87744 9.87494 6.97494 10.2349 7.15494 10.5499L10.0499 7.65494C9.73494 7.47494 9.37494 7.37744 8.99994 7.37744Z"
      />
      <Path
        fill={color}
        d="M4.19988 14.3826C4.07238 14.3826 3.93738 14.3376 3.83238 14.2476C3.02988 13.5651 2.30988 12.7251 1.69488 11.7501C0.899883 10.5126 0.899883 8.49511 1.69488 7.25011C3.52488 4.38511 6.18738 2.73511 8.99988 2.73511C10.6499 2.73511 12.2774 3.30511 13.7024 4.37761C13.9499 4.56511 14.0024 4.91761 13.8149 5.16511C13.6274 5.41261 13.2749 5.46511 13.0274 5.27761C11.7974 4.34761 10.4024 3.86011 8.99988 3.86011C6.57738 3.86011 4.25988 5.31511 2.63988 7.85761C2.07738 8.73511 2.07738 10.2651 2.63988 11.1426C3.20238 12.0201 3.84738 12.7776 4.55988 13.3926C4.79238 13.5951 4.82238 13.9476 4.61988 14.1876C4.51488 14.3151 4.35738 14.3826 4.19988 14.3826Z"
      />
      <Path
        fill={color}
        d="M8.99993 16.2651C8.00242 16.2651 7.02742 16.0626 6.08992 15.6651C5.80492 15.5451 5.66992 15.2151 5.78992 14.9301C5.90992 14.6451 6.23992 14.5101 6.52492 14.6301C7.31992 14.9676 8.15242 15.1401 8.99242 15.1401C11.4149 15.1401 13.7324 13.6851 15.3524 11.1426C15.9149 10.2651 15.9149 8.73512 15.3524 7.85762C15.1199 7.49012 14.8649 7.13762 14.5949 6.80762C14.3999 6.56762 14.4374 6.21512 14.6774 6.01262C14.9174 5.81762 15.2699 5.84762 15.4724 6.09512C15.7649 6.45512 16.0499 6.84512 16.3049 7.25012C17.0999 8.48762 17.0999 10.5051 16.3049 11.7501C14.4749 14.6151 11.8124 16.2651 8.99993 16.2651Z"
      />
      <Path
        fill={color}
        d="M9.51744 12.7025C9.25494 12.7025 9.01494 12.515 8.96244 12.245C8.90244 11.9375 9.10494 11.645 9.41244 11.5925C10.2374 11.4425 10.9274 10.7525 11.0774 9.92751C11.1374 9.62001 11.4299 9.42501 11.7374 9.47751C12.0449 9.53751 12.2474 9.83002 12.1874 10.1375C11.9474 11.435 10.9124 12.4625 9.62244 12.7025C9.58494 12.695 9.55494 12.7025 9.51744 12.7025Z"
      />
      <Path
        fill={color}
        d="M1.50008 17.5625C1.35758 17.5625 1.21508 17.51 1.10258 17.3975C0.885078 17.18 0.885078 16.82 1.10258 16.6025L6.70508 11C6.92258 10.7825 7.28258 10.7825 7.50008 11C7.71758 11.2175 7.71758 11.5775 7.50008 11.795L1.89758 17.3975C1.78508 17.51 1.64258 17.5625 1.50008 17.5625Z"
      />
      <Path
        fill={color}
        d="M10.8975 8.16508C10.755 8.16508 10.6125 8.11258 10.5 8.00008C10.2825 7.78258 10.2825 7.42258 10.5 7.20508L16.1025 1.60258C16.32 1.38508 16.68 1.38508 16.8975 1.60258C17.115 1.82008 17.115 2.18008 16.8975 2.39758L11.295 8.00008C11.1825 8.11258 11.04 8.16508 10.8975 8.16508Z"
      />
    </Svg>
  );
};