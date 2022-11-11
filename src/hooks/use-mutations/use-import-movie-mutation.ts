import { useMutation } from 'react-query';

import { breakpoints, importMovie } from '../../api';
import { FileImport } from '../../types';
import { getErrorMessageCode, getErrorMessageFields } from '../../untils';
import { useAlertMessage } from '../use-alert-message';

const handleImportMovie = async ({ file }: { file: FileImport }) => {
  return await importMovie({
    file,
  });
};

export const useImportMuvieMutation = () => {
  const { alertMessage } = useAlertMessage();

  return useMutation(breakpoints.movies.importMovie, handleImportMovie, {
    onSuccess: (response) => {
      if (response.data?.status) {
        alertMessage({
          title: 'File uploaded successfully',
        });
      } else {
        alertMessage({
          title: getErrorMessageCode(response.data?.error?.code),
          message: getErrorMessageFields(response.data?.error?.fields),
        });
      }
    },
  });
};
