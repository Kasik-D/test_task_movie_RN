/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type Props = {
  loading: boolean;
  error?: unknown;
  children: React.ReactElement;
};

export const RequestHandler = ({ loading, error, children }: Props) => {
  if (loading) {
    return (
      <View style={styles.contentContainerStyle}>
        <ActivityIndicator color={colors.black} size={'large'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.contentContainerStyle}>
        {/* @ts-ignore */}
        <Text style={styles.text}>{error?.message || 'Unknow error'}</Text>
      </View>
    );
  }

  return children;
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#FF0000',
    fontSize: 22,
    fontWeight: '600',
  },
});
