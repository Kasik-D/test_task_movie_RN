import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  statusBarBackgroundColor?: string;
};

export const SafeAreaWrapper = ({ children, statusBarBackgroundColor }: Props) => {
  return (
    <SafeAreaView
      edges={['right', 'left', 'top']}
      style={[
        styles.wrapper,
        {
          backgroundColor: statusBarBackgroundColor,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    overflow: 'hidden',
  },
});
