import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Layout } from '../../components';
import { MoviesProvider } from '../../context/movies-context/movies-provider';
import { List } from './list';
import { MoviesSearch } from './movies-search';

export const MoviesList = () => {
  return (
    <Layout>
      <MoviesProvider>
        <View style={styles.container}>
          <MoviesSearch />

          <List />
        </View>
      </MoviesProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
