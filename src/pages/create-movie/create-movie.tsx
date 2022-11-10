import { Formik } from 'formik';
import React, { useEffect } from 'react';
// eslint-disable-next-line prettier/prettier
import {
 ActivityIndicator, Button, Keyboard, StyleSheet, Text, View 
} from 'react-native';

import { Layout } from '../../components';
import { useAddMuvieMutation } from '../../hooks';
import { colors } from '../../theme';
import { AddMovie } from '../../types';
import { addMovieSchema } from '../../validation/schemas/add-movie.schema';
import { ActorsSection } from './actor-section';
import { AddActorInput } from './add-actor-input';
import { ApiErrorText } from './api-error-text';
import { InputsMovie } from './inputs-movie';

export const CreateMovie = () => {
  const { mutateAsync, isLoading } = useAddMuvieMutation();

  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleFormSubmit = async (values: AddMovie) => {
    Keyboard.dismiss();
    const response = await mutateAsync({
      ...values,
    });
    if (response.data?.status) {
      setError('');
      setSuccess(true);
    } else {
      setError(response.data?.error?.code + ' ' + (response.data?.error?.fields?.format || ''));
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
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
        {({ handleSubmit, values, setFieldValue, errors }) => (
          <View style={styles.container}>
            {success && <Text style={styles.successText}>Movie successfully added</Text>}

            <InputsMovie />

            <ActorsSection values={values} errors={errors} />

            <AddActorInput values={values} setFieldValue={setFieldValue} />

            {error && <ApiErrorText error={error} />}

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
