import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const MoneyBillIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={color}
        d="M6.99975 8.50014C5.8968 8.50014 4.99983 7.60319 4.99983 6.50025C4.99983 5.39731 5.8968 4.50036 6.99975 4.50036C8.1027 4.50036 8.99967 5.39731 8.99967 6.50025C8.99967 7.60319 8.1027 8.50014 6.99975 8.50014ZM6.99975 5.50031C6.44827 5.50031 5.99979 5.94878 5.99979 6.50025C5.99979 7.05172 6.44827 7.50019 6.99975 7.50019C7.55123 7.50019 7.99971 7.05172 7.99971 6.50025C7.99971 5.94878 7.55123 5.50031 6.99975 5.50031ZM3.4999 4.00039C3.22391 4.00039 2.99992 4.22438 2.99992 4.50036C2.99992 4.77635 3.22391 5.00033 3.4999 5.00033C3.77588 5.00033 3.99988 4.77635 3.99988 4.50036C3.99988 4.22438 3.77588 4.00039 3.4999 4.00039ZM9.99963 5.50031C9.99963 5.77629 10.2236 6.00028 10.4996 6.00028C10.7756 6.00028 10.9996 5.77629 10.9996 5.50031C10.9996 5.22432 10.7756 5.00033 10.4996 5.00033C10.2236 5.00033 9.99963 5.22432 9.99963 5.50031ZM3.4999 7.00022C3.22391 7.00022 2.99992 7.22421 2.99992 7.50019C2.99992 7.77618 3.22391 8.00017 3.4999 8.00017C3.77588 8.00017 3.99988 7.77618 3.99988 7.50019C3.99988 7.22421 3.77588 7.00022 3.4999 7.00022ZM9.99963 8.50014C9.99963 8.77612 10.2236 9.00011 10.4996 9.00011C10.7756 9.00011 10.9996 8.77612 10.9996 8.50014C10.9996 8.22415 10.7756 8.00017 10.4996 8.00017C10.2236 8.00017 9.99963 8.22415 9.99963 8.50014ZM9.50015 11C8.68018 11 7.75622 10.736 6.86276 10.4805C6.03579 10.244 5.18033 10.0001 4.50035 10.0001C3.13491 10.0001 1.72597 10.6515 1.71147 10.6575L1 10.9905V4.07938C1 3.51542 1.30899 3.00544 1.80747 2.74796C2.46994 2.40648 3.4739 2 4.50035 2C5.33132 2 6.13329 2.26749 6.90825 2.52547C7.63972 2.76946 8.33069 2.99994 8.99967 2.99994C9.69264 2.99994 10.2581 2.81895 10.7126 2.67346C10.8636 2.62497 11.0011 2.58097 11.1266 2.54797C11.5756 2.42848 12.044 2.52397 12.413 2.80795C12.786 3.09494 13 3.52942 13 3.99989V10.142L12.7065 10.275C12.641 10.305 11.0901 11 9.50015 11ZM4.50035 9.00011C5.32032 9.00011 6.24428 9.2641 7.13774 9.51958C7.96521 9.75607 8.82017 10.0001 9.50015 10.0001C10.5001 10.0001 11.5151 9.66757 12 9.48408V4.00039C12 3.8424 11.928 3.69691 11.8031 3.60091C11.7321 3.54641 11.5821 3.46292 11.3821 3.51542C11.2716 3.54491 11.1501 3.58391 11.0171 3.62641C10.5241 3.7839 9.84813 4.00039 8.99967 4.00039C8.1687 4.00039 7.36673 3.7329 6.59177 3.47492C5.8603 3.23093 5.16933 3.00044 4.50035 3.00044C3.63089 3.00044 2.72693 3.39942 2.26545 3.63691C2.10145 3.7214 1.99946 3.89089 1.99946 4.07938V9.47008C2.61443 9.2566 3.55089 9.00011 4.50035 9.00011Z"
      />
    </Svg>
  );
};
