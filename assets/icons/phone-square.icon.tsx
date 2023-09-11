import Svg, { Path, Rect } from 'react-native-svg';

import { SvgProps } from '@type/';

export const PhoneSquareIcon = ({
  color = '#60CB74',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="12" fill={color} />
      <Path
        d="M19.062 16.4841C19.062 16.7391 19.0054 17.0012 18.885 17.2562C18.7645 17.5112 18.6087 17.752 18.4033 17.9787C18.0562 18.3612 17.6737 18.6374 17.2416 18.8145C16.8166 18.9916 16.3562 19.0837 15.8604 19.0837C15.1379 19.0837 14.3658 18.9137 13.5512 18.5666C12.7366 18.2195 11.922 17.752 11.1145 17.1641C10.3 16.5691 9.52788 15.9103 8.79121 15.1807C8.06163 14.4441 7.40288 13.672 6.81496 12.8645C6.23413 12.057 5.76663 11.2495 5.42663 10.4491C5.08663 9.64157 4.91663 8.86949 4.91663 8.13282C4.91663 7.65116 5.00163 7.19074 5.17163 6.76574C5.34163 6.33366 5.61079 5.93699 5.98621 5.58283C6.43954 5.13658 6.93538 4.91699 7.45954 4.91699C7.65788 4.91699 7.85621 4.95949 8.03329 5.04449C8.21746 5.12949 8.38038 5.25699 8.50788 5.44116L10.1512 7.75741C10.2787 7.93449 10.3708 8.09741 10.4345 8.25324C10.4983 8.40199 10.5337 8.55074 10.5337 8.68533C10.5337 8.85532 10.4841 9.02532 10.385 9.18824C10.2929 9.35116 10.1583 9.52116 9.98829 9.69116L9.44996 10.2507C9.37204 10.3287 9.33663 10.4207 9.33663 10.5341C9.33663 10.5907 9.34371 10.6403 9.35788 10.697C9.37913 10.7537 9.40038 10.7962 9.41454 10.8387C9.54204 11.0724 9.76163 11.377 10.0733 11.7453C10.392 12.1137 10.732 12.4891 11.1004 12.8645C11.4829 13.2399 11.8512 13.587 12.2266 13.9057C12.595 14.2174 12.8995 14.4299 13.1404 14.5574C13.1758 14.5716 13.2183 14.5928 13.2679 14.6141C13.3245 14.6353 13.3812 14.6424 13.445 14.6424C13.5654 14.6424 13.6575 14.5999 13.7354 14.522L14.2737 13.9907C14.4508 13.8137 14.6208 13.6791 14.7837 13.5941C14.9466 13.4949 15.1095 13.4453 15.2866 13.4453C15.4212 13.4453 15.5629 13.4737 15.7187 13.5374C15.8745 13.6012 16.0375 13.6932 16.2145 13.8137L18.5591 15.4782C18.7433 15.6057 18.8708 15.7545 18.9487 15.9316C19.0195 16.1087 19.062 16.2857 19.062 16.4841Z"
        stroke="white"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};
