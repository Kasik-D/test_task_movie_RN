/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';

import { Movie, Sort, SortingOrders } from '../../types';

type ContextProps = {
  movies: Movie[];
  moviesCount: number;
  loading: boolean;
  handleLoadMore: () => Promise<void>;
  handleLoadMoreLoading: boolean;
  stopHandleLoadMore: boolean;
  setStopHandleLoadMore: (value: boolean) => void;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
  handleOnSearchChange: (text: string) => void;
  setOrder: React.Dispatch<React.SetStateAction<SortingOrders>>;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  error: unknown;
  refetchAllMovie: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>;
};

export const MoviesContext = React.createContext<ContextProps>({
  movies: [],
  moviesCount: 0,
  loading: false,
  handleLoadMore: async () => {},
  handleLoadMoreLoading: false,
  stopHandleLoadMore: false,
  setStopHandleLoadMore: () => {},
  refreshing: false,
  handleOnRefetch: async () => {},
  error: null,
  handleOnSearchChange: () => {},
  setOrder: () => {},
  setSort: () => {},
  // @ts-ignore
  refetchAllMovie: async () => {},
});

export function useMoviesContext() {
  const moviesContext = React.useContext(MoviesContext);

  if (!moviesContext) {
    throw new Error('useMoviesContext must be used within a MoviesProvider');
  }
  return moviesContext;
}
