import React from 'react';
import { Keyboard } from 'react-native';

import { useAddMuvieMutation, useAlertMessage, useApiErrors } from '../../hooks';
import { AddMovie } from '../../types';
import { CreateMoviesContext } from './create-movie-context';

type IProps = {
  children?: React.ReactNode;
};

export const CreateMoviesProvider: React.FC<IProps> = ({ children }) => {
  const { mutateAsync, isLoading } = useAddMuvieMutation();

  const [success, setSuccess] = React.useState(false);

  const { errors, handleSetErrors, resetErrors } = useApiErrors();

  const { alertMessage } = useAlertMessage();

  const handleFormSubmit = React.useCallback(
    async (values: AddMovie, { resetForm }) => {
      Keyboard.dismiss();
      const response = await mutateAsync({
        ...values,
      });
      if (response.data?.status) {
        resetErrors();
        setSuccess(true);
        resetForm && resetForm();
      } else {
        handleSetErrors(response);
      }
    },
    [handleSetErrors, mutateAsync, resetErrors],
  );

  React.useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      alertMessage({
        title: 'Movie successfully added',
      });
    }
  }, [success]);

  const value = {
    handleFormSubmit,
    errors,
    isLoading,
    success,
  };

  return <CreateMoviesContext.Provider value={value}>{children}</CreateMoviesContext.Provider>;
};
