import { useFormikContext } from 'formik';
import React from 'react';
import { ActivityIndicator, Button as ButtonRN, StyleSheet, View } from 'react-native';

import { useCreateMovie } from '../../hooks';
import { colors } from '../../theme';

export const Button = () => {
  const { isLoading } = useCreateMovie();

  const { handleSubmit } = useFormikContext();

  const submit = () => {
    handleSubmit();
  };

  return (
    <View style={styles.buttonContainer}>
      {isLoading ? (
        <ActivityIndicator animating={isLoading} />
      ) : (
        <ButtonRN
          onPress={submit}
          accessibilityLabel='Submit'
          color={colors.purple}
          title='Submit'
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
  },
});
