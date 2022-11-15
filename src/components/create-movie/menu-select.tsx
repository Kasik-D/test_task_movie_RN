import { useField } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Menu } from '../../components';
import { useGetMenuOptionsForMovieFormat } from '../../hooks';

export const MenuSelect = () => {
  const { optionsForFormat, onButtonPressOptionsFormat } = useGetMenuOptionsForMovieFormat({
    name: 'format',
  });

  const [field] = useField('format');

  return (
    <View style={styles.menuContainer}>
      <Menu
        options={{
          options: optionsForFormat,
          cancelButtonIndex: optionsForFormat.length - 1,
        }}
        title='Format:'
        onButtonPress={onButtonPressOptionsFormat}
      />
      <Text>{field?.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
  },
});
