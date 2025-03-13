import { useColorScheme } from 'react-native';
import { LightColors, DarkColors, ThemeColors } from '../constants/colors';

export const useColors = (): ThemeColors => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? DarkColors : LightColors;
};
