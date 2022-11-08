import React from 'react';

import { Movie } from '../../types';

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
});

export function useMoviesContext() {
  const moviesContext = React.useContext(MoviesContext);

  if (!moviesContext) {
    throw new Error('useMoviesContext must be used within a MoviesProvider');
  }
  return moviesContext;
}
