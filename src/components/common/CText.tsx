import React from 'react';
import {Text, TextProps} from 'react-native';
import {FontFamily, FontWeight} from '../../constants/fonts.ts';
import {useColors} from "../../hooks/useColors.ts";

interface CTextProps extends TextProps {
  weight?: FontWeight;
  size?: number;
  color?: string;
}

function CText({
  weight = 'Regular',
  size = 14,
  color,
  style,
  children,
  ...props
}: CTextProps) {
  const colors = useColors();
  return (
    <Text
      style={[
        {
          fontFamily: FontFamily[weight],
          fontSize: size,
          color: color ?? colors.text,
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
