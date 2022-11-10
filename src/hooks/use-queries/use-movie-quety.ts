import { useQuery } from 'react-query';

import { breakpoints, getMovie } from '../../api';
import { MovieIdType } from '../../types';

const handleMovie =
  ({ movieId }: MovieIdType) =>
  async () => {
    return await getMovie({
      movieId,
    });
  };

export const useMovieQuery = ({ movieId }: MovieIdType) => {
  return useQuery(
    [breakpoints.movies.baseUrl, movieId],
    handleMovie({
      movieId,
    }),
    {
      enabled: !!movieId,
    },
  );
};
