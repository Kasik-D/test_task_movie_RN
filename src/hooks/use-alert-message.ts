import React from 'react';
import { Alert } from 'react-native';

export const useAlertMessage = () => {
  const alertMessage = React.useCallback(
    ({ title, message }: { title: string; message?: string }) => Alert.alert(title, message),
    [],
  );

  return {
    alertMessage,
  };
};
