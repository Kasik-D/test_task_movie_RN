import { FormikErrors } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';
import { AddMovie } from '../../types';

type Props = {
  values: AddMovie;
  errors: FormikErrors<AddMovie>;
};

export const ActorsSection = ({ errors, values }: Props) => {
  return (
    <>
      <View
        style={[
          styles.actorsContainer,
          {
            borderColor: errors.actors ? colors.red : colors.black,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Actors names:
        </Text>
        <View style={styles.actorContainer}>
          {values.actors.map((item, index) => {
            return (
              <Text style={styles.actorName} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
      </View>

      {errors.actors && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors.actors}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  actorContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  actorName: {
    color: colors.teal,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 5,
  },
  actorsContainer: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    width: '100%',
  },
  errorContainer: {
    marginTop: 5,
    width: '100%',
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '600',
  },
});
