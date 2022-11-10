import { useMutation } from 'react-query';

import { breakpoints, importMovie } from '../../api';
import { FileImport } from '../../types';

const handleImportMovie = async ({ file }: { file: FileImport }) => {
  return await importMovie({
    file,
  });
};

export const useImportMuvieMutation = () => {
  return useMutation(breakpoints.movies.importMovie, handleImportMovie);
};
