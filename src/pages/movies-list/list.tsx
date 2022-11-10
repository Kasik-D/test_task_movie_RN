import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { RequestHandler } from '../../components';
import { useMovies } from '../../hooks';
import { colors } from '../../theme';
import { Movie } from '../../types';
import { RenderItem } from './render-item';

export const List = () => {
  const {
    movies,
    handleLoadMore,
    setStopHandleLoadMore,
    handleLoadMoreLoading,
    refreshing,
    handleOnRefetch,
    loading,
    error,
  } = useMovies();

  const onMomentumScrollBegin = () => setStopHandleLoadMore(false);

  const renderItem = React.useCallback(({ item }: { item: Movie }) => <RenderItem {...item} />, []);

  const keyExtractor = React.useCallback((item: Movie) => String(item?.id), []);

  return (
    <RequestHandler loading={loading} error={error}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={movies}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={handleOnRefetch}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={onMomentumScrollBegin}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>Empty data :(</Text>
          </View>
        }
        ListFooterComponent={
          handleLoadMoreLoading ? (
            <View style={styles.bottomListContainer}>
              <ActivityIndicator size={'small'} color={colors.black} />
            </View>
          ) : null
        }
      />
    </RequestHandler>
  );
};

const styles = StyleSheet.create({
  bottomListContainer: {
    marginTop: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});
