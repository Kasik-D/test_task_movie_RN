/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { AddMovie } from '../../types';

type ContextProps = {
  handleFormSubmit: (values: AddMovie) => Promise<void>;
  errors: string;
  isLoading: boolean;
  success: boolean;
};

export const CreateMoviesContext = React.createContext<ContextProps>({
  handleFormSubmit: async () => {},
  errors: '',
  isLoading: false,
  success: false,
});

export function useCreateMoviesContext() {
  const moviesContext = React.useContext(CreateMoviesContext);

  if (!moviesContext) {
    throw new Error('useCreateMoviesContext must be used within a CreateMoviesProvider');
  }
  return moviesContext;
}
