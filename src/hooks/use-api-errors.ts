import { AxiosResponse } from 'axios';
import React from 'react';

import { getErrorMessageCode, getErrorMessageFields } from '../untils';
import { useAlertMessage } from './use-alert-message';

export const useApiErrors = (isShowAlert: boolean | undefined = true) => {
  const [errors, setErrors] = React.useState('');

  const { alertMessage } = useAlertMessage();

  const handleSetErrors = (response: AxiosResponse<any, any>) => {
    isShowAlert &&
      alertMessage({
        title: getErrorMessageCode(response.data?.error?.code),
        message: getErrorMessageFields(response.data?.error?.fields),
      });
    setErrors(
      getErrorMessageCode(response.data?.error?.code) +
        getErrorMessageFields(response.data?.error?.fields),
    );
  };

  const resetErrors = () => {
    setErrors('');
  };

  return {
    handleSetErrors,
    resetErrors,
    errors,
  };
};
