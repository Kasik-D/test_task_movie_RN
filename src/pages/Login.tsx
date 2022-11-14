import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
 ActivityIndicator, Button, Keyboard, StyleSheet, Text, View 
} from 'react-native';

import { ApiErrorText, Layout, TextField } from '../components';
import { ROUTES } from '../constants';
import { useApiErrors, useLoginMutation } from '../hooks';
import { colors } from '../theme';
import { loginSchema } from '../validation/schemas/login.schema';

type FormikValues = {
  login: string;
  password: string;
};

export const Login = () => {
  const { mutateAsync, isLoading } = useLoginMutation();

  const navigation = useNavigation();

  const { errors, handleSetErrors, resetErrors } = useApiErrors();

  const onPressGoToRegistration = () => navigation.navigate(ROUTES.registration);

  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();
    const response = await mutateAsync({
      email: values.login,
      password: values.password,
    });
    if (response.data?.status) {
      resetErrors();
    } else {
      handleSetErrors(response);
    }
  };

  const initialValues = {
    login: '',
    password: '',
  };

  return (
    <Layout isHeaderVisible={false}>
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={loginSchema}
        initialValues={initialValues}
      >
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <Text style={styles.textLabel}>Login</Text>
            <View style={styles.inputContainer}>
              {errors && <ApiErrorText error={errors} />}
              <TextField
                name='login'
                label='Email'
                placeholder={'Enter value'}
                inputProps={{
                  keyboardType: 'email-address',
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextField
                name={'password'}
                placeholder={'Enter value'}
                label={'Password'}
                inputProps={{
                  secureTextEntry: true,
                }}
              />
            </View>
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
              <Button
                accessibilityLabel='Sign up'
                onPress={onPressGoToRegistration}
                color={colors.blue}
                title='Sign up'
              />
            </View>
          </View>
        )}
      </Formik>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
  },
  textLabel: {
    fontSize: 20,
  },
});
