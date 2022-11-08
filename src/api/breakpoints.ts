import { MovieAPIParams } from '../types';
import { parseParamsMovieAPI } from '../untils';

export const breakpoints = {
  users: {
    createUser: '/users',
  },
  sessions: {
    login: '/sessions',
  },
  movies: {
    createMovie: '/movies',
    deleteMovie: (id: string) => {
      return `/movies/${id}`;
    },
    updateMovie: (id: string) => {
      return `/movies/${id}`;
    },
    showMovie: (id: string) => {
      return `/movies/${id}`;
    },
    listMovies: (params: MovieAPIParams) => {
      return params ? `/movies${parseParamsMovieAPI(params)}` : `/movies`;
    },
    importMovie: '/movies/import',
    baseUrl: '/movies',
  },
};
