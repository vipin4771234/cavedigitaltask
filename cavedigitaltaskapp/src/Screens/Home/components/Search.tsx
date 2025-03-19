import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import IconComponent from '../../../component/Icon/IconComponent';
import {scale} from '../../../utils/mixins';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Search = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('SearchScreen')}>
      <Text style={styles.searchPlaceholder}>Search for 'Tiffin'</Text>
      <View style={{paddingLeft: scale(10), borderLeftWidth: 1, borderLeftColor: 'lightgray'}}>
        <IconComponent
          // style={{alignSelf: 'flex-end'}}
          iconType="MaterialCommunityIcons"
          iconName={'magnify'}
          size={25}
          color={'#3c3c3c'}
        />
      </View>
    </Pressable>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
    backgroundColor: '#fff',
    borderRadius: scale(20),
    elevation: 1,
  },
  searchPlaceholder: {
    color: '#808080',
    fontFamily: 'Montserrat-Medium',
    fontSize: scale(16)
  },
});
