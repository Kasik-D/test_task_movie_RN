import { AntDesign } from '@expo/vector-icons';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { TextInput } from '../../components';
import { AddMovie } from '../../types';

type Props = {
  name: string;
};

export const AddActorInput = ({ name }: Props) => {
  const [actorName, setActorName] = React.useState('');

  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onChangeText = (text: string) => setActorName(text);

  const onAddActor = (
    setFieldValue: (field: string, value: string[]) => void,
    actors: string[],
  ) => {
    if (actorName) {
      setFieldValue(name, [...actors, actorName]);
    }
  };

  return (
    <View style={styles.addActorContainer}>
      <TextInput value={actorName} onChangeText={onChangeText} placeholder='Add actor' />
      <TouchableOpacity activeOpacity={0.3} onPress={() => onAddActor(setFieldValue, field.value)}>
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
  );
};

const styles = StyleSheet.create({
  addActorContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
  },
});
