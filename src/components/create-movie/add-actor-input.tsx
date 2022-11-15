/* eslint-disable unicorn/better-regex */
import { AntDesign } from '@expo/vector-icons';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ApiErrorText, TextInput } from '../../components';

export const AddActorInput = () => {
  const [actorName, setActorName] = React.useState('');

  const [error, setError] = React.useState('');

  const [field] = useField('actors');
  const { setFieldValue } = useFormikContext();

  const onChangeText = (text: string) => {
    setActorName(text);
    setError('');
  };

  const onAddActor = (
    setFieldValue: (field: string, value: string[]) => void,
    actors: string[],
  ) => {
    if (actorName?.trim()) {
      if (/^[a-zA-Z ]+$/.test(actorName)) {
        setFieldValue('actors', [...actors, actorName?.trim()]);
        setActorName('');
        setError('');
      } else {
        setError('Actor name is invalid');
      }
    } else {
      setError('Not empty');
    }
  };

  return (
    <>
      <View style={styles.addActorContainer}>
        <TextInput value={actorName} onChangeText={onChangeText} placeholder='Add actor' />
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => onAddActor(setFieldValue, field.value)}
        >
          <AntDesign
            name='plus'
            size={28}
            color='black'
            style={{
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      {error && <ApiErrorText error={error} />}
    </>
  );
};

const styles = StyleSheet.create({
  addActorContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
  },
});
