import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import NewsLetter from '../types/NewsLetter.ts';
import NewsLetterItem from '../components/NewsLetterItem.tsx';
import {useColors} from '../hooks/useColors.ts';
import {ThemeColors} from '../constants/colors.ts';
import CText from "../components/common/CText.tsx";

const dummyData: NewsLetter[] = [
  {
    id: 1,
    title: '개발 실력을 위한 IT기업 기술 블로그 45곳 모음',
    description: '최근 부트캠프, 커리어 전환자 추천 기술 블로그 모음',
    content:
      'IT 기업 블로그에 대해 정리해둔 글이에요! 이 글을 읽으시면 다양한 인사이트를 얻을 수 있어요.',
    thumbnail: 'https://source.unsplash.com/featured/150x150/?technology',
  },
  {
    id: 2,
    title: '개발 실력을 위한 IT기업 기술 블로그 45곳 모음',
    description: '최근 부트캠프, 커리어 전환자 추천 기술 블로그 모음',
    content:
      'IT 기업 블로그에 대해 정리해둔 글이에요! 이 글을 읽으시면 다양한 인사이트를 얻을 수 있어요.',
  },
];

function FeedScreen() {
  const colors = useColors();
  const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <CText style={styles.headerTitle} weight="Bold">피드</CText>
      <FlatList
        data={dummyData}
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
