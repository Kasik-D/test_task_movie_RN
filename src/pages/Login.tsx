import { Formik } from 'formik';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
 Button, Keyboard, StyleSheet, Text, TextInput, View 
} from 'react-native';

import { Layout, TextField } from '../components';
import { colors } from '../theme';
import { loginSchema } from '../validation/schemas/login.schema';

type FormikValues = {
  login: string;
  password: string;
};

export const Login = () => {
  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();
  };

  const initialValues = {
    login: '',
    password: '',
  };

  return (
    <Layout>
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={loginSchema}
        initialValues={initialValues}
      >
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <Text style={styles.textLabel}>Login</Text>
            <View style={styles.inputContainer}>
              <TextField
                name='login'
                label='Email'
                placeholder={'Enter value'}
                inputProps={{
                  keyboardType: 'email-address',
                }}
              />
              {/* <Text>Email</Text>
            <TextInput autoComplete='email' style={styles.textInput} /> */}
            </View>
            <View style={styles.inputContainer}>
              <TextField
                name={'password'}
                placeholder={'Enter value'}
                label={'Пароль'}
                inputProps={{
                  secureTextEntry: true,
                }}
              />
              {/* <Text>Password</Text>
            <TextInput secureTextEntry={true} autoComplete='password' style={styles.textInput} /> */}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => handleSubmit()}
                accessibilityLabel='Submit'
                color={colors.purple}
                title='Submit'
              />
              <Button accessibilityLabel='Sign up' color={colors.blue} title='Sign up' />
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
