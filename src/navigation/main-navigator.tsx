/* eslint-disable unicorn/filename-case */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constants';
import { CreateMovie, Home, ImportMovie, Movie, MoviesList } from '../pages';
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
      <Stack.Screen name={ROUTES.createMovie} component={CreateMovie} />
      <Stack.Screen name={ROUTES.moviesList} component={MoviesList} />
      <Stack.Screen name={ROUTES.importMovie} component={ImportMovie} />
      <Stack.Screen name={ROUTES.movie} component={Movie} />
    </Stack.Navigator>
  );
};
