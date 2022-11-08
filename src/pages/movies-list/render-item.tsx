import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';
import { Movie } from '../../types';

export const RenderItem = ({ ...data }: Movie) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title: {data?.title}</Text>
      <Text style={styles.text}>Year: {data?.year}</Text>
      <Text style={styles.text}>Format: {data?.format}</Text>
      <Text style={styles.text}>
        CreatedAt: {data?.createdAt && new Date(data?.createdAt).getUTCFullYear()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    padding: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});
