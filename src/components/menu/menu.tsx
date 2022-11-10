/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ActionSheetOptions, useActionSheet } from '@expo/react-native-action-sheet';
import React from 'react';
import { Button } from 'react-native';

type Props = {
  title: string;
  onButtonPress: (selectedIndex?: number) => void;
  options: ActionSheetOptions;
};

export const Menu = ({ options, onButtonPress, title }: Props) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    showActionSheetWithOptions(options, onButtonPress);
  };

  return <Button title={title} onPress={onPress} />;
};
