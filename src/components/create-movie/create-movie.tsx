/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApiErrorText, Layout, TextField } from '../../components';
import { CreateMoviesProvider } from '../../context/create-movie-context/create-movie-provider';
import { useCreateMovie } from '../../hooks';
import { colors } from '../../theme';
import { ActorsSection } from './actor-section';
import { AddActorInput } from './add-actor-input';
import { Button } from './Button';
import { MenuSelect } from './menu-select';

type Props = {
  children: JSX.Element;
};

export const CreateMovie = ({ children }: Props) => {
  return (
    <Layout>
      <CreateMoviesProvider>{children}</CreateMoviesProvider>
    </Layout>
  );
};

CreateMovie.Container = ({ children }: { children: JSX.Element }) => {
  return <View style={styles.container}>{children}</View>;
};

CreateMovie.SuccessText = function SuccessText({text = 'Movie successfully added',}: {
  text?: string;
}) {
  const { success } = useCreateMovie();
  return success ? <Text style={styles.successText}>{text}</Text> : null;
};

CreateMovie.ErrorText = function SuccessText() {
  const { errors } = useCreateMovie();
  return errors ? <ApiErrorText error={errors} /> : null;
};

CreateMovie.InputTitle = () => {
  return (
    <View style={styles.inputContainer}>
      <TextField name='title' placeholder={'Enter title'} label={'Title'} />
    </View>
  );
};

CreateMovie.InputYear = () => {
  return (
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
  );
};

CreateMovie.MenuSelect = MenuSelect;

CreateMovie.ActorsSection = ActorsSection;

CreateMovie.ActorsSection = ActorsSection;

CreateMovie.InputActors = AddActorInput;

CreateMovie.Button = Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  inputContainer: {
    marginTop: 15,
    width: '100%',
  },
  successText: {
    color: colors.green,
    fontSize: 18,
    fontWeight: '700',
  },
});
