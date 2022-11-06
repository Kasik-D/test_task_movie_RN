import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Layout } from '../components';

export const CreateMovie = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>CreateMovie</Text>
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
