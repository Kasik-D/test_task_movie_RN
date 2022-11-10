/* eslint-disable unicorn/prefer-module */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '../../hooks';
import { colors } from '../../theme';

type Props = {
  title?: string;
};

export const Header = ({ title = 'Movie App' }: Props) => {
  const { onLogout } = useAuth();

  return (
    <View style={style.container}>
      {title && <Text style={style.textTitle}>{title}</Text>}
      <View style={style.buttonContainer}>
        <Button onPress={onLogout} title='Logout' />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.while,
    borderBottomWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    position: 'relative',
    zIndex: 2,
  },
  textTitle: {
    color: colors.black,
    fontSize: 16,
  },
});
