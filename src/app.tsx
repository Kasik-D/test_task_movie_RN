import { registerRootComponent } from 'expo';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from './context/auth-context';
import { NavigationProvider } from './context/navigation-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationProvider />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default registerRootComponent(App);
