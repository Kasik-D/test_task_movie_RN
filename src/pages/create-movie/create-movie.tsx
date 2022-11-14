import { Formik } from 'formik';
import React, { useEffect } from 'react';
// eslint-disable-next-line prettier/prettier
import {
 ActivityIndicator, Button, Keyboard, StyleSheet, Text, View 
} from 'react-native';

import { ApiErrorText, Layout } from '../../components';
import { useAddMuvieMutation, useAlertMessage, useApiErrors } from '../../hooks';
import { colors } from '../../theme';
import { AddMovie } from '../../types';
import { addMovieSchema } from '../../validation/schemas/add-movie.schema';
import { ActorsSection } from './actor-section';
import { AddActorInput } from './add-actor-input';
import { InputsMovie } from './inputs-movie';

export const CreateMovie = () => {
  const { mutateAsync, isLoading } = useAddMuvieMutation();

  const [success, setSuccess] = React.useState(false);

  const { errors, handleSetErrors, resetErrors } = useApiErrors();

  const { alertMessage } = useAlertMessage();

  const handleFormSubmit = async (values: AddMovie) => {
    Keyboard.dismiss();
    const response = await mutateAsync({
      ...values,
    });
    if (response.data?.status) {
      resetErrors();
      setSuccess(true);
    } else {
      handleSetErrors(response);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      alertMessage({
        title: 'Movie successfully added',
      });
    }
  }, [success]);

  const initialValues = {
    title: '',
    year: '',
    format: '',
    actors: [],
  };

  return (
    <Layout>
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={addMovieSchema}
        initialValues={initialValues}
      >
        {({ handleSubmit }) => (
          <View style={styles.container}>
            {success && <Text style={styles.successText}>Movie successfully added</Text>}

            <InputsMovie />

            <ActorsSection name='actors' />

            <AddActorInput name='actors' />

            {errors && <ApiErrorText error={errors} />}

            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator animating={isLoading} />
              ) : (
                <Button
                  onPress={() => handleSubmit()}
                  accessibilityLabel='Submit'
                  color={colors.purple}
                  title='Submit'
                />
              )}
            </View>
          </View>
        )}
      </Formik>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  successText: {
    color: colors.green,
    fontSize: 18,
    fontWeight: '700',
  },
});
