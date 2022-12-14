import React from 'react';

import { useMoviesListQuery } from '../../hooks';
import { Sort, SortingOrders } from '../../types';
import { MoviesContext } from './movies-context';

type IProps = {
  children?: React.ReactNode;
};

export const MoviesProvider: React.FC<IProps> = ({ children }) => {
  const stopHandleLoadMore = React.useRef(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState(Sort.id);
  const [order, setOrder] = React.useState(SortingOrders.Desc);

  const { data, isLoading, refetch, error, fetchNextPage, isFetchingNextPage } = useMoviesListQuery(
    {
      limit: 10,
      order,
      sort,
      search,
    },
  );

  const getAllMovies =
    data?.pages?.reduce(
      (previousValue, currentValue) => [...(previousValue || []), ...(currentValue?.data || [])],
      [],
    ) || [];

  const getAllMoviesCount = (data?.pages?.length || 0) * 10;

  const handleOnSearchChange = (text: string) => setSearch(text);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current && !isFetchingNextPage) {
      if (getAllMoviesCount < (data?.pages[0]?.meta?.total || 0)) {
        await fetchNextPage({
          pageParam: getAllMoviesCount,
        });
      }
      stopHandleLoadMore.current = true;
    }
  };

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const value = {
    movies: getAllMovies,
    moviesCount: getAllMoviesCount,
    loading: isLoading,
    handleLoadMore,
    handleLoadMoreLoading: isFetchingNextPage,
    stopHandleLoadMore: stopHandleLoadMore.current,
    setStopHandleLoadMore,
    refreshing,
    handleOnRefetch,
    setSearch,
    refetchAllMovie: refetch,
    setSort,
    setOrder,
    error,
    handleOnSearchChange,
  };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};
