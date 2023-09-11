import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const PeopleIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.0001 5.96651C14.9501 5.95817 14.8917 5.95817 14.8417 5.96651C13.6917 5.92484 12.7751 4.98317 12.7751 3.81651C12.7751 2.62484 13.7334 1.6665 14.9251 1.6665C16.1167 1.6665 17.0751 2.63317 17.0751 3.81651C17.0667 4.98317 16.1501 5.92484 15.0001 5.96651Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1417 12.0331C15.2834 12.2247 16.5417 12.0247 17.4251 11.4331C18.6001 10.6497 18.6001 9.3664 17.4251 8.58306C16.5334 7.9914 15.2584 7.79139 14.1167 7.99139"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.97496 5.96651C5.02496 5.95817 5.0833 5.95817 5.1333 5.96651C6.2833 5.92484 7.19996 4.98317 7.19996 3.81651C7.19996 2.62484 6.24163 1.6665 5.04996 1.6665C3.8583 1.6665 2.89996 2.63317 2.89996 3.81651C2.9083 4.98317 3.82496 5.92484 4.97496 5.96651Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83334 12.0331C4.69168 12.2247 3.43335 12.0247 2.55001 11.4331C1.37501 10.6497 1.37501 9.3664 2.55001 8.58306C3.44168 7.9914 4.71668 7.79139 5.85834 7.99139"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99999 12.1918C9.94999 12.1835 9.89166 12.1835 9.84166 12.1918C8.69166 12.1502 7.77499 11.2085 7.77499 10.0418C7.77499 8.85018 8.73333 7.89185 9.92499 7.89185C11.1167 7.89185 12.075 8.85851 12.075 10.0418C12.0667 11.2085 11.15 12.1585 9.99999 12.1918Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.57498 14.8168C6.39998 15.6001 6.39998 16.8835 7.57498 17.6668C8.90831 18.5585 11.0916 18.5585 12.425 17.6668C13.6 16.8835 13.6 15.6001 12.425 14.8168C11.1 13.9335 8.90831 13.9335 7.57498 14.8168Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
