import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import NewsLetterItem from '../components/NewsLetterItem.tsx';
import {useColors} from '../hooks/useColors.ts';
import {ThemeColors} from '../constants/colors.ts';
import CText from '../components/common/CText.tsx';
import newsLetterDummyData from '../types/NewsLetterDummyData.ts';

function FeedScreen() {
  const colors = useColors();
  const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <CText style={styles.headerTitle} weight="Bold">
        피드
      </CText>
      <FlatList
        data={newsLetterDummyData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <NewsLetterItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{padding: 16}}
      />
    </SafeAreaView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerTitle: {
      padding: 16,
      fontSize: 24,
    },
    separator: {
      height: 16,
    },
  });

export default FeedScreen;
