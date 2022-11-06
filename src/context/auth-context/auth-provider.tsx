import React, { Dispatch } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { AsyncStore } from '../../services';
import { colors } from '../../theme';
import { ActionType, handleInit, handleLogout, handleSuccessAuth } from './auth-actions';
import { AuthContext } from './auth-context';
import { authReducer } from './auth-reducer';

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line prefer-const
export let dispatchAuth = null as unknown as Dispatch<ActionType>;

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    isAuth: false,
    isInit: false,
  });

  dispatchAuth = dispatch;

  const successAuth = async (token: string) => {
    await AsyncStore.setValue('token', token);
    handleSuccessAuth();
  };

  const logout = async () => {
    // const data = await logoutMutation({
    //   variables: {
    //     data: {
    //       pushToken: {
    //         ...getPushNotificationsData(),
    //       },
    //     },
    //   },
    // });
    await AsyncStore.deleteValue('token');
    handleLogout();
  };

  React.useEffect(() => {
    async function checkToken() {
      handleInit(true);
      try {
        const token = await AsyncStore.getValue('token');
        if (token != null) {
          handleSuccessAuth();
        }
      } finally {
        handleInit(false);
      }
    }
    checkToken();
  }, []);

  const value = {
    isAuth: state.isAuth,
    onSuccessAuth: successAuth,
    onLogout: logout,
  };

  if (state.isInit) {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <ActivityIndicator size='large' animating={true} color={colors.black} />
      </View>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
