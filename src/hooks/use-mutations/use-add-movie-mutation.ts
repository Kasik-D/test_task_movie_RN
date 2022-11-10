import { useMutation } from 'react-query';

import { addMovie, breakpoints } from '../../api';
import { AddMovie } from '../../types';

const handleAddMovie = async ({ title, year, format, actors }: AddMovie) => {
  return await addMovie({
    title,
    year: Number(year),
    format,
    actors,
  });
};

export const useAddMuvieMutation = () => {
  return useMutation(breakpoints.movies.createMovie, handleAddMovie);
};
