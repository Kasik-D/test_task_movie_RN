import { StatusBar } from 'expo-status-bar';
import React, { LegacyRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';

import { colors } from '../../theme';
import { SafeAreaWrapper } from '../safe-area-wrapper/safe-area-wrapper';

type Props = {
  isScrollable?: boolean;
  isKeyboardAvoiding?: boolean;
  isStatusBarVisible?: boolean;
  isHeaderVisible?: boolean;
  isTransparent?: boolean;
  wrapperOptions?: View;
  children: React.ReactNode;
  refScroll?: LegacyRef<ScrollView>;
  withPadding?: boolean;
  statusBarBackgroundColor?: string;
  screenBackgroundColor?: string;
};

export const Layout = ({
  wrapperOptions,
  children,
  isKeyboardAvoiding,
  isScrollable = false,
  isTransparent = false,
  refScroll,
  statusBarBackgroundColor = colors.while,
  screenBackgroundColor = colors.while,
}: Props) => {
  const content = (
    <View
      style={{
        ...styles.contentContainerStyle,
        backgroundColor: screenBackgroundColor,
        ...wrapperOptions,
      }}
    >
      {children}
    </View>
  );

  return (
    <View
      style={{
        ...styles.layoutContainerStyle,
        backgroundColor: isTransparent ? 'transparent' : '#fff',
      }}
    >
      <SafeAreaWrapper statusBarBackgroundColor={statusBarBackgroundColor}>
        <StatusBar style='dark' />
        <KeyboardAvoidingView
          enabled={isKeyboardAvoiding}
          style={styles.layoutContainerStyle}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {isScrollable ? (
            <ScrollView
              ref={refScroll}
              collapsable={false}
              nestedScrollEnabled={false}
              contentContainerStyle={{
                flexGrow: 1,
              }}
            >
              {content}
            </ScrollView>
          ) : (
            <View style={styles.contentContainerStyle}>{content}</View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  layoutContainerStyle: {
    flex: 1,
  },
});
