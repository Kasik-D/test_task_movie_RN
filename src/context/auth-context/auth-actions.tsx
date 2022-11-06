import { dispatchAuth } from './auth-provider';

export const actionTypes = {
  SUCCESS_AUTH: 'SUCCESS_AUTH',
  LOGOUT: 'LOGOUT',
  INIT: 'INIT',
} as const;

export type AuthStateType = {
  isAuth: boolean;
  isInit: boolean;
};

export type ActionType =
  | { type: 'SUCCESS_AUTH' }
  | { type: 'LOGOUT' }
  | { type: 'INIT'; payload: boolean };

export const handleSuccessAuth = () => {
  dispatchAuth({
    type: actionTypes.SUCCESS_AUTH,
  });
};

export const handleInit = (payload: boolean) => {
  dispatchAuth({
    type: actionTypes.INIT,
    payload,
  });
};

export const handleLogout = async () => {
  dispatchAuth({
    type: actionTypes.LOGOUT,
  });
};
