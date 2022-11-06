import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';

type ItemProps = {
  backgroundColor: string;
  text: string;
  onPress: () => void;
};

export const HomeItem = ({ backgroundColor, text, onPress }: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.itemContainer,
        {
          backgroundColor,
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 15,
    width: '100%',
  },
  text: {
    color: colors.while,
    fontSize: 16,
  },
});
