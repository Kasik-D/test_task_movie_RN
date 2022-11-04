import { registerRootComponent } from 'expo';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationProvider } from './context/navigation-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider />
    </QueryClientProvider>
  );
};

export default registerRootComponent(App);
