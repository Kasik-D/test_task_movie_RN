import { registerRootComponent } from 'expo';
import React from 'react';

import { NavigationProvider } from './context/navigation-context';

const App = () => {
  return <NavigationProvider />;
};

export default registerRootComponent(App);
