import { useField, useFormikContext } from 'formik';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native';

import { colors } from '../../theme';
import { EyePasswordIcon } from '../icons';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  InputRightElement?: JSX.Element | JSX.Element[];
  inputProps?: TextInputProps;
  wrapperProps?: ViewProps;
  errorsWrapperProps?: TextInputProps;
  errorsProps?: TextInputProps;
  isDisabled?: boolean;
};

export const TextField = ({
  name,
  label,
  placeholder,
  inputProps,
  wrapperProps,
  errorsWrapperProps,
  isDisabled = false,
}: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleChangeInput = (value: string) => {
    setFieldValue(name, value);
  };

  const isPassword = inputProps?.secureTextEntry;
  const hasError = Boolean(meta.error && meta.touched);

  return (
    <View {...wrapperProps}>
      <Text>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          editable={!isDisabled}
          selectTextOnFocus={!isDisabled}
          placeholder={placeholder}
          value={field.value}
          onChangeText={(value) => handleChangeInput(value)}
          {...inputProps}
          secureTextEntry={isPassword && !passwordVisible}
        />
        {isPassword && (
          <Pressable
            onPress={() => setPasswordVisible((prev) => !prev)}
            style={styles.iconContainer}
          >
            <EyePasswordIcon fill={passwordVisible ? colors.grey : colors.black} />
          </Pressable>
        )}
      </View>
      {hasError && (
        <View
          style={{
            height: 20,
          }}
          {...errorsWrapperProps}
        >
          <Text style={styles.errorText}>{meta.error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: colors.red,
    height: 30,
    paddingLeft: 3,
  },
  iconContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 35,
    justifyContent: 'center',
    width: 35,
  },
  inputContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  textInput: {
    borderColor: colors.black,
    borderRadius: 10,
    borderWidth: 1,
    height: 35,
    paddingLeft: 10,
    width: '100%',
  },
});
