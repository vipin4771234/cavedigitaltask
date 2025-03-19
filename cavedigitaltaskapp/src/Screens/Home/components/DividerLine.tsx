import {View, Text} from 'react-native';
import React from 'react';
import {scale} from '../../../utils/mixins';

const DividerLine = ({text}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(-5),
      }}>
      <View
        style={{flex: 1, height: scale(1), backgroundColor: '#c7ebfc'}}></View>
      <Text style={{marginHorizontal: scale(10),fontFamily: 'Montserrat-Medium'}}>
        {text}
      </Text>
      <View
        style={{flex: 1, height: scale(1), backgroundColor: '#c7ebfc'}}></View>
    </View>
  );
};

export default DividerLine;
