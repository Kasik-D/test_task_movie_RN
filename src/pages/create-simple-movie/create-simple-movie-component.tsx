import { Formik } from 'formik';
import React from 'react';

import { CreateMovie } from '../../components';
import { useCreateMovie } from '../../hooks';
import { MovieFormats } from '../../types';
import { addMovieSchema } from '../../validation/schemas/add-movie.schema';

export const CreateSimpleMovieComponent = () => {
  const { handleFormSubmit } = useCreateMovie();

  const initialValues = {
    title: '',
    year: '',
    format: MovieFormats.DVD,
    actors: [],
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={addMovieSchema}
    >
      <CreateMovie.Container>
        <>
          <CreateMovie.SuccessText />

          <CreateMovie.InputTitle />
          <CreateMovie.InputYear />
          <CreateMovie.MenuSelect />
          <CreateMovie.ActorsSection />
          <CreateMovie.InputActors />

          <CreateMovie.ErrorText />

          <CreateMovie.Button />
        </>
      </CreateMovie.Container>
    </Formik>
  );
};
