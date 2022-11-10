/* eslint-disable unicorn/prefer-module */
import React from 'react';
import { StyleSheet, TextInput as TextInputRN } from 'react-native';

import { colors } from '../../theme';

type Props = {
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
};

export const TextInput = ({ value = '', onChangeText }: Props) => {
  return <TextInputRN style={styles.input} value={value} onChangeText={onChangeText} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.while,
    borderColor: colors.black,
    borderRadius: 50,
    borderWidth: 1,
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
  },
});
