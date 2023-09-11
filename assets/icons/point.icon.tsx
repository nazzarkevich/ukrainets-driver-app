import Svg, { Path, Defs, Stop } from 'react-native-svg';

import { SvgProps } from '../../types';

export const PointIcon = ({ width = 50, height = 140 }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 112" fill="none">
      <Path
        d="M10 36.8084C8.22502 36.8084 6.77502 35.3667 6.77502 33.5834C6.77502 31.8 8.22502 30.3667 10 30.3667C11.775 30.3667 13.225 31.8084 13.225 33.5917C13.225 35.375 11.775 36.8084 10 36.8084ZM10 31.6167C8.91669 31.6167 8.02502 32.5 8.02502 33.5917C8.02502 34.6834 8.90836 35.5667 10 35.5667C11.0917 35.5667 11.975 34.6834 11.975 33.5917C11.975 32.5 11.0834 31.6167 10 31.6167Z"
        fill="#413ED2"
      />
      <Path
        d="M10 43.9667C8.76669 43.9667 7.52502 43.5001 6.55836 42.5751C4.10002 40.2084 1.38336 36.4334 2.40836 31.9417C3.33336 27.8667 6.89169 26.0417 10 26.0417C10 26.0417 10 26.0417 10.0084 26.0417C13.1167 26.0417 16.675 27.8667 17.6 31.9501C18.6167 36.4417 15.9 40.2084 13.4417 42.5751C12.475 43.5001 11.2334 43.9667 10 43.9667ZM10 27.2917C7.57502 27.2917 4.45836 28.5834 3.63336 32.2167C2.73336 36.1417 5.20002 39.5251 7.43336 41.6667C8.87502 43.0584 11.1334 43.0584 12.575 41.6667C14.8 39.5251 17.2667 36.1417 16.3834 32.2167C15.55 28.5834 12.425 27.2917 10 27.2917Z"
        fill="#413ED2"
      />
      <Path
        d="M10 45L10 86"
        stroke="url(#paint0_linear_87_13922)"
        strokeOpacity="0.5"
        strokeDasharray="3 3"
      />
      <Path
        d="M10 97.8084C8.22502 97.8084 6.77502 96.3667 6.77502 94.5834C6.77502 92.8 8.22502 91.3667 10 91.3667C11.775 91.3667 13.225 92.8084 13.225 94.5917C13.225 96.375 11.775 97.8084 10 97.8084ZM10 92.6167C8.91669 92.6167 8.02502 93.5 8.02502 94.5917C8.02502 95.6834 8.90836 96.5667 10 96.5667C11.0917 96.5667 11.975 95.6834 11.975 94.5917C11.975 93.5 11.0834 92.6167 10 92.6167Z"
        fill="#C2C6CE"
      />
      <Path
        d="M10 104.967C8.76669 104.967 7.52502 104.5 6.55836 103.575C4.10002 101.208 1.38336 97.4334 2.40836 92.9417C3.33336 88.8667 6.89169 87.0417 10 87.0417C10 87.0417 10 87.0417 10.0084 87.0417C13.1167 87.0417 16.675 88.8667 17.6 92.9501C18.6167 97.4417 15.9 101.208 13.4417 103.575C12.475 104.5 11.2334 104.967 10 104.967ZM10 88.2917C7.57502 88.2917 4.45836 89.5834 3.63336 93.2167C2.73336 97.1417 5.20002 100.525 7.43336 102.667C8.87502 104.058 11.1334 104.058 12.575 102.667C14.8 100.525 17.2667 97.1417 16.3834 93.2167C15.55 89.5834 12.425 88.2917 10 88.2917Z"
        fill="#C2C6CE"
      />
      <Defs>
        <linearGradient
          id="paint0_linear_87_13922"
          x1="10"
          y1="44.9999"
          x2="9.94416"
          y2="81.3874"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#413ED2" />
          <Stop offset="1" stopColor="#413ED2" stopOpacity="0" />
        </linearGradient>
      </Defs>
    </Svg>
  );
};
