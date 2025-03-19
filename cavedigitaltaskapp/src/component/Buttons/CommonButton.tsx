import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { scale } from '../../utils/mixins';

const CommonButton = ({text, onPress, loading}: any) => {
  return (
    <Pressable onPress={onPress} style={localStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text style={localStyles.buttonText}>{text}</Text>
      )}
    </Pressable>
  );
};

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: '#e0605c',
    width: '100%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: scale(18),
    color: '#fff',
    fontFamily: 'Montserrat-Bold'
  },
});

export default CommonButton;
