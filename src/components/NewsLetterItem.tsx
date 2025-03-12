import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NewsLetter from '../types/NewsLetter.ts';

interface NewsLetterItemProps {
  item: NewsLetter;
}

function NewsLetterItem({item}: NewsLetterItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        </View>
        {item.thumbnail && (
          <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        )}
      </View>

      <TouchableOpacity onPress={() => toggleExpand()} activeOpacity={0.8}>
        <View style={styles.bottomRow}>
          <Text
            style={styles.summary}
            numberOfLines={isExpanded ? undefined : 1}>
            {item.content}
          </Text>

          <Text>{isExpanded ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
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
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
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
    color: '#444',
    flex: 1,
    marginRight: 8,
  },
});

export default NewsLetterItem;
