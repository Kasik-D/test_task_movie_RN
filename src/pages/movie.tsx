import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

import { Layout, RequestHandler } from '../components';
import { ROUTES } from '../constants';
import { useDeleteMuvieMutation, useMovieQuery } from '../hooks';
import { colors } from '../theme';
import { Actor, MainStackParamList } from '../types';

type RouteType = RouteProp<MainStackParamList, ROUTES.movie>;

export const Movie = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteType>();
  const movieId = route.params.movieId;
  const refetchAllMovie = route.params.refetchAllMovie;

  const { data, isLoading } = useMovieQuery({
    movieId,
  });
  const { mutateAsync, isLoading: isLoadingDelete } = useDeleteMuvieMutation({
    movieId,
  });

  const onClickDelete = async () => {
    const response = await mutateAsync({
      movieId,
    });
    if (response.data?.status) {
      await refetchAllMovie();
      navigation.goBack();
    }
  };

  return (
    <Layout>
      <RequestHandler loading={isLoading}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Movie information</Text>
          <View style={styles.informationContainer}>
            <Text style={styles.informationText}>Title: {data?.data?.data?.title}</Text>
            <Text style={styles.informationText}>Year: {data?.data?.data?.year}</Text>
            <Text style={styles.informationText}>Format: {data?.data?.data?.format}</Text>
            <Text style={styles.informationText}>
              Actors:
              {data?.data?.data?.actors?.reduce(
                (previousValue: string, currentValue: Actor, index: number) => {
                  return index !== data?.data?.data?.actors?.length && index !== 0
                    ? previousValue + ', ' + currentValue?.name
                    : previousValue + ' ' + currentValue?.name;
                },
                ' ',
              )}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            {isLoadingDelete ? (
              <ActivityIndicator animating={isLoadingDelete} />
            ) : (
              <Button title='Delete movie' color={colors.red} onPress={onClickDelete} />
            )}
          </View>
        </View>
      </RequestHandler>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    width: '100%',
  },
  informationText: {
    fontSize: 16,
    marginTop: 15,
  },
  titleText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: '700',
  },
});
