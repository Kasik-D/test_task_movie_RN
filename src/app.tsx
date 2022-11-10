import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { registerRootComponent } from 'expo';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from './context/auth-context';
import { NavigationProvider } from './context/navigation-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ActionSheetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NavigationProvider />
        </AuthProvider>
      </QueryClientProvider>
    </ActionSheetProvider>
  );
};

export default registerRootComponent(App);
