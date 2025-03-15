import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import NewsLetter from '../types/NewsLetter.ts';
import CText from './common/CText.tsx';
import {ThemeColors} from '../constants/colors.ts';
import {useColors} from '../hooks/useColors.ts';
import BoxView from "./common/BoxView.tsx";

interface NewsLetterItemProps {
  item: NewsLetter;
}

function NewsLetterItem({item}: NewsLetterItemProps) {
  const colors = useColors();
  const styles = createStyles(colors);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <BoxView>
      <View style={styles.topRow}>
        <View style={styles.textContainer}>
          <CText style={styles.title} weight="Bold" numberOfLines={2}>
            {item.title}
          </CText>
          <CText style={styles.description} numberOfLines={2}>
            {item.description}
          </CText>
        </View>
        {item.thumbnail && (
          <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        )}
      </View>

      <TouchableOpacity onPress={() => toggleExpand()} activeOpacity={0.8}>
        <View style={styles.bottomRow}>
          <CText
            style={styles.summary}
            numberOfLines={isExpanded ? undefined : 1}>
            {item.content}
          </CText>

          <CText>{isExpanded ? '▲' : '▼'}</CText>
        </View>
      </TouchableOpacity>
    </BoxView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    textContainer: {
      flex: 1,
      marginRight: 12,
    },
    title: {
      fontSize: 16,
      color: colors.text,
      marginBottom: 4,
    },
    description: {
      fontSize: 14,
      color: colors.description,
    },
    thumbnail: {
      width: 80,
      height: 80,
      borderRadius: 8,
      backgroundColor: '#eee',
    },
    bottomRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    summary: {
      fontSize: 14,
      color: colors.description,
      flex: 1,
      marginRight: 8,
    },
  });

export default NewsLetterItem;
