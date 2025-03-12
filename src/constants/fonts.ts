export const FontFamily = {
  Light: 'Pretendard-Light',
  Regular: 'Pretendard-Regular',
  SemiBold: 'Pretendard-SemiBold',
  Bold: 'Pretendard-Bold',
} as const;

export type FontWeight = keyof typeof FontFamily;
