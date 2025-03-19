import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import IconComponent from '../../../component/Icon/IconComponent';
import {scale} from '../../../utils/mixins';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e0605c" />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.addressOne}>Dhundahera Village</Text>
          <IconComponent
            // style={{alignSelf: 'flex-end'}}
            iconType="MaterialCommunityIcons"
            iconName={'chevron-down'}
            size={25}
            color={'#3c3c3c'}
          />
        </View>
        <Text style={styles.addressTwo}>sector 20, Gurugram</Text>
      </View>
      <View style={{width: '30%', alignItems: 'flex-end'}}>
        <IconComponent
          iconType="MaterialCommunityIcons"
          iconName={'account-circle'}
          size={45}
          color={'#e0605c'}
        />
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
