import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
 ActivityIndicator, Button, Keyboard, StyleSheet, Text, View 
} from 'react-native';

import { Layout, TextField } from '../components';
import { ROUTES } from '../constants';
import { useRegistrationMutation } from '../hooks';
import { colors } from '../theme';
import { registrationSchema } from '../validation/schemas/registration.schema';

type FormikValues = {
  name: string;
  login: string;
  password: string;
  confirmPassword: string;
};

export const Registration = () => {
  const { mutateAsync, isLoading } = useRegistrationMutation();

  const navigation = useNavigation();

  const onPressGoToLogin = () => navigation.navigate(ROUTES.login);

  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();
    await mutateAsync({
      name: values.name,
      email: values.login,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  };

  const initialValues = {
    name: '',
    login: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <Layout isHeaderVisible={false}>
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={registrationSchema}
        initialValues={initialValues}
      >
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <Text style={styles.textLabel}>Registration</Text>
            <View style={styles.inputContainer}>
              <TextField name='name' label='Name' placeholder={'Enter value'} />
            </View>
            <View style={styles.inputContainer}>
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
              <TextField name={'password'} placeholder={'Enter value'} label={'Password'} />
            </View>
            <View style={styles.inputContainer}>
              <TextField
                name={'confirmPassword'}
                placeholder={'Enter value'}
                label={'Confirm password'}
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
                onPress={onPressGoToLogin}
                accessibilityLabel='Login'
                color={colors.blue}
                title='Go to login'
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
