/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';
import create from 'zustand';

import { DOMAIN_URL } from '../constants';
import { handleLogout } from '../context/auth-context';
import { AsyncStore } from '../services';
import {
  AddMovie,
  FileImport,
  LoginProps,
  MovieAPIParams,
  MovieIdType,
  RegistrationProps,
} from '../types';
import { breakpoints } from './breakpoints';

export const useErrorsStore = create(() => ({
  hasError: false,
  error: undefined,
  date: undefined as unknown,
}));

const MyAppClient = axios.create({
  baseURL: DOMAIN_URL,
});

MyAppClient.interceptors.request.use(async (config: any) => {
  try {
    const token = await AsyncStore.getValue('token');
    if (token) {
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  } catch (error) {
    useErrorsStore.setState({
      hasError: true,
      // @ts-ignores
      error: error,
      date: Date.now(),
    });
    await AsyncStore.deleteValue('token');
    handleLogout();
  }
});

MyAppClient.interceptors.response.use(
  async (response) => {
    if (response.data?.error?.code === 'WRONG_TOKEN') {
      await AsyncStore.deleteValue('token');
      handleLogout();
    }
    return response;
  },
  (error) => {
    useErrorsStore.setState({
      hasError: true,
      error: error,
      date: Date.now(),
    });
    return Promise.reject(error.data?.message);
  },
);

export const login = async ({ email, password }: LoginProps) => {
  return await MyAppClient.post(breakpoints.sessions.login, {
    email,
    password,
  });
};

export const registration = async ({
  name,
  email,
  password,
  confirmPassword,
}: RegistrationProps) => {
  return await MyAppClient.post(breakpoints.users.createUser, {
    name,
    email,
    password,
    confirmPassword,
  });
};

export const getMoviesList = async ({ limit, offset, order, sort, search }: MovieAPIParams) => {
  return await MyAppClient.get(
    breakpoints.movies.listMovies({
      limit,
      offset,
      order,
      sort,
      search,
    }),
  );
};

export const getMovie = async ({ movieId }: MovieIdType) => {
  return await MyAppClient.get(breakpoints.movies.showMovie(movieId));
};

export const addMovie = async ({ title, year, format, actors }: AddMovie) => {
  return MyAppClient.post(breakpoints.movies.createMovie, {
    title,
    year,
    format,
    actors,
  });
};

export const deleteMovie = async ({ movieId }: MovieIdType) => {
  return MyAppClient.delete(breakpoints.movies.deleteMovie(movieId));
};
export const importMovie = async ({ file }: { file: FileImport }) => {
  const formData = new FormData();
  // @ts-ignore
  formData.append('movies', file);
  return MyAppClient.post(breakpoints.movies.importMovie, formData);
};

export { MyAppClient };
