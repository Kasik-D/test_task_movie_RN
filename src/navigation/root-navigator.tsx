import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constants';
import { useAuth } from '../hooks';
import { AuthNavigator } from './auth-navigator';
import { MainNavigator } from './main-navigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { isAuth } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuth ? (
        <Stack.Screen name={ROUTES.mainNavigator} component={MainNavigator} />
      ) : (
        <Stack.Screen name={ROUTES.authNavigator} component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
