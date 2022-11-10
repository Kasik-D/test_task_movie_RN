import { useMutation } from 'react-query';

import { breakpoints, deleteMovie } from '../../api';
import { MovieIdType } from '../../types';

const handleDeleteMovie = async ({ movieId }: MovieIdType) => {
  return await deleteMovie({
    movieId,
  });
};

export const useDeleteMuvieMutation = ({ movieId }: MovieIdType) => {
  return useMutation(breakpoints.movies.deleteMovie(movieId), handleDeleteMovie);
};
