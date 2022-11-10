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
      const res = await mutateAsync({
        file,
      });

      if (res.data?.status) {
        alertMessage({
          title: 'File uploaded successfully',
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
