import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CText from "../common/CText.tsx";
import Icon from "@react-native-vector-icons/material-design-icons";
import BoxView from "../common/BoxView.tsx";
import {useColors} from "../../hooks/useColors.ts";
import {ThemeColors} from "../../constants/colors.ts";

interface SettingListProps {
}

function SettingList({}: SettingListProps) {
  const colors = useColors();
  const styles = createStyles(colors);
  return (
    <View>
      {[
        '관심 키워드 수정하기',
        '계정 연동 취소하기',
        '위젯 설정 가이드라인',
        '이용 약관',
        '개인정보 처리 방침',
      ].map((item, idx) => (
        <TouchableOpacity key={idx} style={styles.settingItem}>
          <CText style={[styles.settingText, { color: colors.text }]}>{item}</CText>
          <Icon name="chevron-right" size={20} color={colors.description} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  settingText: {
    fontSize: 15,
  },
});

export default SettingList;
