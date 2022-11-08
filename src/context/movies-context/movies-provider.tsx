import React from 'react';

import { useMoviesListQuery } from '../../hooks';
import { Sort, SortingOrders } from '../../types';
import { MoviesContext } from './movies-context';

type IProps = {
  children?: React.ReactNode;
};

export const MoviesProvider: React.FC<IProps> = ({ children }) => {
  const stopHandleLoadMore = React.useRef(false);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const [search, setSearch] = React.useState('');
  const [offset, setOffset] = React.useState(0);
  const [sort, setSort] = React.useState(Sort.id);
  const [order, setOrder] = React.useState(SortingOrders.Asc);

  const { data, isLoading, refetch } = useMoviesListQuery({
    limit: 10,
    offset,
    order,
    sort,
    search,
  });

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if ((data?.length || 0) < (data?.meta?.total || 0) && !handleLoadMoreLoading) {
        setOffset(data?.length);
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
    movies: data?.data || [],
    moviesCount: data?.data?.meta?.total || 0,
    loading: isLoading,
    handleLoadMore,
    handleLoadMoreLoading,
    stopHandleLoadMore: stopHandleLoadMore.current,
    setStopHandleLoadMore,
    refreshing,
    handleOnRefetch,
    setSearch,
    setSort,
    setOrder,
  };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};
