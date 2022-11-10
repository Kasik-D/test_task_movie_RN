import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Menu, SearchIcon, TextInput } from '../../components';
import { useGetMenuOptionsForOrder, useGetMenuOptionsForSort, useMovies } from '../../hooks';
import { colors } from '../../theme';

export const MoviesSearch = () => {
  const [search, setSearch] = React.useState('');

  const { handleOnSearchChange } = useMovies();

  const { optionsForOrder, onButtonPressOptionsOrder } = useGetMenuOptionsForOrder();
  const { optionsForSort, onButtonPressOptionsSort } = useGetMenuOptionsForSort();

  const onChangeText = (text: string) => setSearch(text);

  const ClickButton = () => handleOnSearchChange(search);

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <TextInput value={search} onChangeText={onChangeText} />
        <TouchableOpacity
          onPress={ClickButton}
          activeOpacity={0.7}
          style={styles.searchIconContainer}
        >
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.flexContainer,
          {
            justifyContent: 'space-around',
            marginVertical: 10,
          },
        ]}
      >
        <Menu
          options={{
            options: optionsForOrder,
            cancelButtonIndex: optionsForOrder.length - 1,
          }}
          title='Order'
          onButtonPress={onButtonPressOptionsOrder}
        />
        <Menu
          options={{
            options: optionsForSort,
            cancelButtonIndex: optionsForSort.length - 1,
          }}
          title='Sort'
          onButtonPress={onButtonPressOptionsSort}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    paddingHorizontal: 40,
    width: '100%',
  },
  flexContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  searchIconContainer: {
    display: 'flex',
    flex: 0.1,
    marginLeft: 10,
    padding: 10,
  },
});
