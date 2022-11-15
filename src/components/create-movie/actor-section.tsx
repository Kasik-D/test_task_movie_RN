import { useField } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

export const ActorsSection = () => {
  const [field, meta] = useField('actors');

  const hasError = Boolean(meta.error && meta.touched);

  return (
    <>
      <View
        style={[
          styles.actorsContainer,
          {
            borderColor: hasError ? colors.red : colors.black,
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
          {field.value.map((item: string, index: number) => {
            return (
              <Text style={styles.actorName} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
      </View>

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{meta.error}</Text>
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
