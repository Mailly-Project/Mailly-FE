import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useColors} from '../../hooks/useColors.ts';
import {ThemeColors} from '../../constants/colors.ts';
import CText from '../common/CText.tsx';
import Icon from '@react-native-vector-icons/material-design-icons';
import BoxView from '../common/BoxView.tsx';

interface ProfileCardProps {}

function ProfileCard({}: ProfileCardProps) {
  const colors = useColors();
  const styles = createStyles(colors);

  return (
    <BoxView style={styles.container}>
      <View style={styles.profileRow}>
        <View style={styles.profileImage} />
        <View style={styles.profileInfoColumn}>
          <CText style={styles.nickname} weight="Bold">
            닉네임
          </CText>
          <CText style={styles.email}>test@gmail.com</CText>
        </View>
        <TouchableOpacity>
          <Icon name="logout" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <CText style={styles.statsText}>총 출석일 32일</CText>
        <CText style={styles.divider}>|</CText>
        <CText style={styles.statsText}>총 읽은 피드 32개</CText>
      </View>
    </BoxView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ddd',
    },
    profileRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileInfoColumn: {
      flex: 1,
      marginLeft: 12,
    },
    nickname: {
      fontSize: 16,
      color: colors.text,
    },
    email: {
      marginTop: 4,
      fontSize: 14,
      color: colors.description,
    },
    statsRow: {
      marginTop: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    statsText: {
      fontSize: 13,
      color: colors.description,
    },
    divider: {
      marginHorizontal: 8,
      fontSize: 13,
      color: colors.background,
    },
  });

export default ProfileCard;
