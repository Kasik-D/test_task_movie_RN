import { useMutation } from 'react-query';

import { breakpoints, registration } from '../../api';
import { RegistrationProps } from '../../types';
import { useAuth } from '..';

const handleRegistration = async ({
  name,
  email,
  password,
  confirmPassword,
}: RegistrationProps) => {
  return await registration({
    name,
    email,
    password,
    confirmPassword,
  });
};

export const useRegistrationMutation = () => {
  const { onSuccessAuth } = useAuth();

  return useMutation(breakpoints.users.createUser, handleRegistration, {
    onSuccess: async (data) => {
      if (data.data?.status) {
        await onSuccessAuth(data.data?.token);
      }
    },
  });
};
