import axios from 'axios';
import create from 'zustand';

import { DOMAIN_URL } from '../constants';
import { LoginProps } from './../types/API/typesProps';
import { breakpoints } from './breakpoints';

export const useErrorsStore = create(() => ({
  hasError: false,
  error: undefined,
  date: undefined as unknown,
}));

const MyAppClient = axios.create({
  baseURL: DOMAIN_URL,
});

MyAppClient.interceptors.response.use(
  (response) => {
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

export { MyAppClient };
