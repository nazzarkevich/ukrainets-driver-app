import React from 'react';
import { View, ViewProps } from 'react-native';

type SpacerSize = 'xs' | 's' | 'm' | 'l' | 'xl';

interface SpacerProps extends ViewProps {
  size?: SpacerSize;
}

const sizeMap: Record<SpacerSize, string> = {
  xs: 'h-2', // 8px
  s: 'h-4', // 16px
  m: 'h-6', // 24px
  l: 'h-8', // 32px
  xl: 'h-10', // 40px
};

export const Spacer: React.FC<SpacerProps> = ({
  size = 'm',
  style,
  ...props
}) => {
  const heightClass = sizeMap[size];

  return <View style={style} className={heightClass} {...props} />;
};
