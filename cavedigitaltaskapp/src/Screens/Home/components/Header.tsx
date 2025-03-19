import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import React from 'react';
import IconComponent from '../../../component/Icon/IconComponent';
import {scale} from '../../../utils/mixins';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e0605c" />
      <View style={{flex: 1,paddingHorizontal:20,paddingVertical:10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.addressOne}>Cave Task</Text>
        </View>
        <Text style={styles.addressTwo}>Task list</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor: 'red',
    alignItems: 'center',
  },
  addressOne: {
    fontSize: scale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#3c3c3c',
    // alignSelf: 'flex-end'
  },
  addressTwo: {
    fontSize: scale(14),
    fontFamily: 'Montserrat-Medium',
    color: '#3c3c3c',
  },
});
