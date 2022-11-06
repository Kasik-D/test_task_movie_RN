import React from 'react';

type ContextProps = {
  isAuth: boolean;
  onSuccessAuth: (token: string) => void | Promise<void>;
  onLogout: () => void | Promise<void>;
};

export const AuthContext = React.createContext<ContextProps>({
  isAuth: false,
  onSuccessAuth: () => {},
  onLogout: () => {},
});

export function useAuthContext() {
  const authContext = React.useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return authContext;
}
