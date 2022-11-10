import { useInfiniteQuery } from 'react-query';

import { breakpoints, getMoviesList } from '../../api';
import { MovieAPIParams } from '../../types';

const handleMoviesList =
  ({ limit, order, sort, search }: MovieAPIParams) =>
  async ({ pageParam = 0 }) => {
    const responese = await getMoviesList({
      limit,
      offset: pageParam,
      order,
      sort,
      search,
    });
    return responese.data;
  };

export const useMoviesListQuery = ({ limit, order, sort, search }: MovieAPIParams) => {
  return useInfiniteQuery(
    [breakpoints.movies.baseUrl, limit, order, sort, search],
    handleMoviesList({
      limit,
      order,
      sort,
      search,
    }),
  );
};
