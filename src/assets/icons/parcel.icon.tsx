import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const ParcelIcon = ({ size = 65 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <G>
        <Path
          d="M30.4301 0.390729L5.72866 13.5038C5.04349 13.8675 4.61523 14.5798 4.61523 15.3557V48.2722C4.61523 49.6019 5.36236 50.8184 6.54792 51.4197L30.7706 63.7056C31.5435 64.0976 32.457 64.0976 33.2297 63.7056L57.4526 51.4197C58.6381 50.8184 59.3853 49.6016 59.3853 48.2722V15.3557C59.3853 14.5798 58.957 13.8675 58.2716 13.5038L33.5704 0.390729C32.5887 -0.130243 31.412 -0.130243 30.4301 0.390729Z"
          fill="#FFCE94"
        />
        <Path
          d="M32 63.9998C32.4215 63.9998 32.8433 63.9019 33.2295 63.7058L57.4524 51.42C58.638 50.8187 59.3851 49.6019 59.3851 48.2725V15.3556C59.3851 15.0129 59.2976 14.6849 59.1453 14.3916L32 28.8495V63.9998Z"
          fill="#FCB043"
        />
        <Path
          d="M32.0004 28.8497L4.85525 14.3916C4.70275 14.6849 4.61523 15.0129 4.61523 15.3556V48.2723C4.61523 49.6019 5.36236 50.8185 6.54792 51.4198L30.7706 63.7056C31.1571 63.9017 31.5786 63.9996 32.0001 63.9996V28.8497H32.0004Z"
          fill="#E2791B"
        />
        <Path
          d="M41.6783 4.69482L14.2061 19.3251V24.0065C14.2061 24.4558 14.4539 24.8684 14.8503 25.0799L19.6246 27.6245C20.0035 27.8264 20.4607 27.5519 20.4607 27.1226V22.7534L47.9756 8.03792L41.6783 4.69482Z"
          fill="#DEF2FC"
        />
        <Path
          d="M35.958 54.6588L43.2869 51.1537C44.2253 50.705 44.813 49.7474 44.7883 48.7076L44.7877 48.6751C44.7673 47.8173 43.8566 47.2759 43.0933 47.668L35.9582 51.3324V54.6588H35.958Z"
          fill="#403A46"
        />
        <Path
          d="M35.958 59.7699L39.9826 57.9003C40.9355 57.4573 41.5358 56.492 41.5108 55.4414C41.4905 54.5806 40.5746 54.0394 39.8108 54.4372L35.958 56.4431V59.7699Z"
          fill="#403A46"
        />
        <Path
          d="M14.2061 19.3721V24.0064C14.2061 24.4557 14.4539 24.8684 14.8503 25.0798L19.6246 27.6244C20.0035 27.8263 20.4607 27.5519 20.4607 27.1225V22.7533L20.5073 22.7284C18.8902 21.8671 16.2637 20.468 14.2061 19.3721Z"
          fill="#B6C8CE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_132_1164">
          <Rect width="64" height="64" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
