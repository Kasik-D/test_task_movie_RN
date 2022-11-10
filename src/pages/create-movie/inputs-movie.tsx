import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TextField } from '../../components';

export const InputsMovie = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextField name='title' placeholder={'Enter title'} label={'Title'} />
      </View>
      <View style={styles.inputContainer}>
        <TextField
          name='year'
          placeholder={'Enter year'}
          label={'Year'}
          inputProps={{
            keyboardType: 'numeric',
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextField name='format' placeholder={'Enter format'} label={'Format'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
    width: '100%',
  },
});
