import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import { ROUTES } from '../constants';

export type MainStackParamList = {
  [ROUTES.home]: undefined;
  [ROUTES.createSimpleMovie]: undefined;
  [ROUTES.moviesList]: undefined;
  [ROUTES.importMovie]: undefined;
  [ROUTES.movie]: {
    movieId: string | number;
    refetchAllMovie: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
    ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>;
  };
};

export type AuthStackParamList = {
  [ROUTES.login]: undefined;
  [ROUTES.registration]: undefined;
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
