import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type Props = {
  error: string;
};

export const ApiErrorText = ({ error }: Props) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 5,
    width: '100%',
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '600',
  },
});
