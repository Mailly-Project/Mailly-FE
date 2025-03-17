import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BoxView from '../common/BoxView.tsx';
import CText from '../common/CText.tsx';
import {ThemeColors} from '../../constants/colors.ts';
import {useColors} from '../../hooks/useColors.ts';

interface SubscribeNewsLetterListProps {}

function SubscribeNewsLetterList({}: SubscribeNewsLetterListProps) {
  const colors = useColors();
  const styles = createStyles(colors);
  return (
    <BoxView padding={0} style={styles.container}>
      <View style={styles.sectionHeader}>
        <CText weight="Bold" size={16}>
          구독 중인 뉴스레터
        </CText>
        <TouchableOpacity>
          <CText>더보기</CText>
        </TouchableOpacity>
      </View>

      {['OO 뉴스레터', 'OO 뉴스레터', 'OO 뉴스레터'].map((title, idx) => (
        <View key={idx} style={styles.newsletterItem}>
          <View>
            <CText weight="SemiBold" size={15}>
              {title}
            </CText>
            <CText style={styles.newsletterEmail}>newsletter@mailly.com</CText>
          </View>
        </View>
      ))}
    </BoxView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 8,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    newsletterItem: {
      marginVertical: 12,
    },
    newsletterEmail: {
      color: colors.description,
      fontSize: 13,
    },
  });

export default SubscribeNewsLetterList;
