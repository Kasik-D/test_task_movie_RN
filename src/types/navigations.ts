import { ROUTES } from '../constants';

export type MainStackParamList = {
  [ROUTES.home]: undefined;
};

export type AuthStackParamList = {
  [ROUTES.login]: undefined;
};

// Here add your screens params
export type AllScreenParamList = {
  item: undefined;
};

// Here add your screen ParamList
// For instance MainStackParamList, MainStackParamList2
export interface RootStackParamList extends MainStackParamList, AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
