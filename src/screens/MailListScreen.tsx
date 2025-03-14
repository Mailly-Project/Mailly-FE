import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  SectionList,
} from 'react-native';
import NewsLetter from '../types/NewsLetter.ts';
import {useColors} from '../hooks/useColors.ts';
import CText from '../components/common/CText.tsx';
import NewsLetterItem from '../components/NewsLetterItem.tsx';
import {ThemeColors} from '../constants/colors.ts';
import newsLetterDummyData from '../types/NewsLetterDummyData.ts';

function MailListScreen() {
  const colors = useColors();
  const styles = createStyles(colors);

  const groupedData = newsLetterDummyData.reduce((acc, item) => {
    const date = item.date;
    const existingSection = acc.find(section => section.title === date);
    if (existingSection) {
      existingSection.data.push(item);
    } else {
      acc.push({title: date, data: [item]});
    }

    return acc;
  }, [] as {title: string; data: NewsLetter[]}[]);

  return (
    <SafeAreaView style={styles.container}>
      <CText style={styles.headerTitle} weight="Bold">
        메일
      </CText>
      <SectionList
        sections={groupedData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <NewsLetterItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <CText style={styles.sectionTitle} weight="Bold">
            {title}
          </CText>
        )}
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
    sectionTitle: {
      fontSize: 18,
      paddingTop: 18,
      paddingBottom: 12,
      backgroundColor: colors.background
    },
    separator: {
      height: 16,
    },
  });

export default MailListScreen;
