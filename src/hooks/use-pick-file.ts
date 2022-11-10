import * as DocumentPicker from 'expo-document-picker';
import React from 'react';

import { useAlertMessage } from './use-alert-message';

export const usePickFile = () => {
  const { alertMessage } = useAlertMessage();

  const pickFile = React.useCallback(async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});

      return result.type === 'success' ? result : null;
    } catch {
      alertMessage({
        title: 'An error occurred during file selection',
      });
    }
  }, []);

  return {
    pickFile,
  };
};
