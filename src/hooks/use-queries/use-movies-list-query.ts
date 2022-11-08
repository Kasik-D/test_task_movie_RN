import { useQuery } from 'react-query';

import { breakpoints, getMoviesList } from '../../api';
import { MovieAPIParams } from '../../types';

const handleMoviesList =
  ({ limit, offset, order, sort, search }: MovieAPIParams) =>
  async () => {
    return await getMoviesList({
      limit,
      offset,
      order,
      sort,
      search,
    });
  };

export const useMoviesListQuery = ({ limit, offset, order, sort, search }: MovieAPIParams) => {
  return useQuery(
    [breakpoints.movies.baseUrl, limit, offset, order, sort],
    handleMoviesList({
      limit,
      offset,
      order,
      sort,
      search,
    }),
    {
      select: ({ data }) => data || [],
      keepPreviousData: true,
    },
  );
};
