import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Layout } from '../../components';
import { HomeItems } from '../../constants';
import { colors } from '../../theme';
import { HomeItem } from './home-item';

export const Home = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Tap what you want to do</Text>
        {HomeItems.map((item, index) => (
          <HomeItem
            key={index}
            backgroundColor={item.backgroundColor}
            onPress={item.onPress}
            text={item.text}
          />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  textTitle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '700',
  },
});
