/* eslint-disable unicorn/prefer-module */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type Props = {
  title?: string;
};

export const Header = ({ title = 'Movie App' }: Props) => {
  return (
    <View style={style.container}>{title && <Text style={style.textTitle}>{title}</Text>}</View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.while,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  textTitle: {
    color: colors.black,
    fontSize: 14,
  },
});
