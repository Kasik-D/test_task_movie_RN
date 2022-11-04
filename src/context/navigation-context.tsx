import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { navigationRef } from '../navigation/root-navigation';
import { RootNavigator } from '../navigation/root-navigator';

export const NavigationContext = React.createContext<null>(null);

export const NavigationProvider = () => {
  return (
    <NavigationContext.Provider value={null}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};
