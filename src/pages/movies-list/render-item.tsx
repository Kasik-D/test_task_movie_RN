import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ROUTES } from '../../constants';
import { useMovies } from '../../hooks';
import { colors } from '../../theme';
import { Movie } from '../../types';

export const RenderItem = ({ ...data }: Movie) => {
  const navigation = useNavigation();

  const { refetchAllMovie } = useMovies();

  const onClicItem = () =>
    navigation.navigate(ROUTES.movie, {
      movieId: data.id,
      refetchAllMovie,
    });

  return (
    <Pressable onPress={onClicItem}>
      <View style={styles.container}>
        <Text style={styles.text}>Title: {data?.title}</Text>
        <Text style={styles.text}>Year: {data?.year}</Text>
        <Text style={styles.text}>Format: {data?.format}</Text>
        <Text style={styles.text}>
          CreatedAt: {data?.createdAt && new Date(data?.createdAt).getUTCFullYear()}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    padding: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});
