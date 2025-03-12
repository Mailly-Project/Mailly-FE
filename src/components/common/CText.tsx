import React from 'react';
import {Text, TextProps} from 'react-native';
import {FontFamily, FontWeight} from '../../constants/fonts.ts';

interface CTextProps extends TextProps {
  weight?: FontWeight;
  size?: number;
  color?: string;
}

function CText({
  weight = 'Regular',
  size = 14,
  color = '#222',
  style,
  children,
  ...props
}: CTextProps) {
  return (
    <Text
      style={[
        {
          fontFamily: FontFamily[weight],
          fontSize: size,
          color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

export default CText;
