/* eslint-disable unicorn/filename-case */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constants';
import { Home } from '../pages';
import { MainStackParamList } from '../types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.home} component={Home} />
    </Stack.Navigator>
  );
};
