import React from 'react';
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native';

import { Layout } from '../components';
import { useAlertMessage, useImportMuvieMutation, usePickFile } from '../hooks';
import { colors } from '../theme';

export const ImportMovie = () => {
  const { pickFile } = usePickFile();

  const { mutateAsync, isLoading } = useImportMuvieMutation();

  const { alertMessage } = useAlertMessage();

  const onImportFile = async () => {
    const file = await pickFile();
    if (file) {
      // eslint-disable-next-line unicorn/no-lonely-if
      if (file.mimeType === 'text/plain') {
        await mutateAsync({
          file,
        });
      } else {
        alertMessage({
          title: 'The file must be in txt format',
        });
      }
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator animating={isLoading} />
        ) : (
          <Button title='ImportMovie' color={colors.green} onPress={onImportFile} />
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
