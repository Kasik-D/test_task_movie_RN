/* eslint-disable unicorn/filename-case */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constants';
import { Login, Registration } from '../pages';
import { AuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.login}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.login} component={Login} />
      <Stack.Screen name={ROUTES.registration} component={Registration} />
    </Stack.Navigator>
  );
};
