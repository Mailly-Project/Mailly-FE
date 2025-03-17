import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useColors} from '../hooks/useColors.ts';
import {ThemeColors} from '../constants/colors.ts';
import CText from "../components/common/CText.tsx";
import ProfileCard from "../components/profile/ProfileCard.tsx";
import SubscribeNewsLetterList from "../components/profile/SubscribeNewsLetterList.tsx";
import SettingList from "../components/profile/SettingList.tsx";

interface ProfileScreenProps {}

function ProfileScreen({}: ProfileScreenProps) {
  const colors = useColors();
  const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <CText style={styles.headerTitle} weight="Bold">
        프로필
      </CText>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ProfileCard/>
        <SubscribeNewsLetterList/>
        <SettingList/>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerTitle: {
    padding: 16,
    fontSize: 24,
  },
  scrollView: {
    margin: 16,
    gap: 12,
  },
});

export default ProfileScreen;
