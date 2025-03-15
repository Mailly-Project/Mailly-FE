import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useColors} from '../../hooks/useColors.ts';

interface BoxViewProps extends ViewProps {
  padding?: number;
  radius?: number;
  showShadow?: boolean;
}

function BoxView({
  padding = 16,
  radius = 12,
  showShadow = false,
  style,
  children,
  ...props
}: BoxViewProps) {
  const colors = useColors();

  return (
    <View
      style={[
        {
          backgroundColor: colors.boxBackground,
          borderRadius: radius,
          padding: padding,
        },
        showShadow && styles.shadow,
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
});

export default BoxView;
