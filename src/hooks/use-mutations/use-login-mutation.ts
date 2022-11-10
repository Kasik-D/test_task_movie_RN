import { useMutation } from 'react-query';

import { breakpoints, login } from '../../api';
import { LoginProps } from '../../types';
import { useAuth } from '..';

const handleLogin = async ({ email, password }: LoginProps) => {
  return await login({
    email,
    password,
  });
};

export const useLoginMutation = () => {
  const { onSuccessAuth } = useAuth();

  return useMutation(breakpoints.sessions.login, handleLogin, {
    onSuccess: async (data) => {
      if (data.data?.status) {
        await onSuccessAuth(data.data?.token);
      }
    },
  });
};
