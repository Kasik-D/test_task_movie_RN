/* eslint-disable unicorn/prefer-module */
import React from 'react';
import { StyleSheet, TextInput as TextInputRN } from 'react-native';

import { colors } from '../../theme';

type Props = {
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
};

export const TextInput = ({ value = '', onChangeText, placeholder }: Props) => {
  return (
    <TextInputRN
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
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
