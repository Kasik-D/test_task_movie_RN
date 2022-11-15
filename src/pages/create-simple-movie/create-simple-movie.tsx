import React from 'react';

import { CreateMovie } from '../../components';
import { CreateSimpleMovieComponent } from './create-simple-movie-component';

export const CreateSimpleMovie = () => {
  return (
    <CreateMovie>
      <CreateSimpleMovieComponent />
    </CreateMovie>
  );
};
