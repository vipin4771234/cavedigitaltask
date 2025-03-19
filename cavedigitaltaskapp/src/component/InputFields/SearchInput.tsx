import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {scale} from '../../utils/mixins';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import IconComponent from '../Icon/IconComponent';

const SearchInput = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Pressable style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Pressable onPress={() => navigation.goBack()}>
          <IconComponent
            // style={{alignSelf: 'flex-end'}}
            iconType="Ionicons"
            iconName={'arrow-back-outline'}
            size={25}
            color={'#3c3c3c'}
          />
        </Pressable>
        <TextInput
          style={styles.searchPlaceholder}
          placeholder="Search for tiffin or dishes"
        />
      </View>
      <View
        style={{
          paddingLeft: scale(10),
          borderLeftWidth: 1,
          borderLeftColor: 'lightgray',
          width: scale(40),
        }}>
        {/* <IconComponent
          // style={{alignSelf: 'flex-end'}}
          iconType="MaterialCommunityIcons"
          iconName={'magnify'}
          size={25}
          color={'#3c3c3c'}
        /> */}
      </View>
    </Pressable>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    //   paddingVertical: scale(10),
    backgroundColor: '#fff',
    borderRadius: scale(20),
    elevation: 1,
  },
  searchPlaceholder: {
    width: '100%',
    fontFamily: 'Montserrat-Medium',
    color: '#808080',
    marginLeft: scale(5),
  },
});
