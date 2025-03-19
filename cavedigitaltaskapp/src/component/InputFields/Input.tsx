import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {scale} from '../../utils/mixins';
import IconComponent from '../Icon/IconComponent';
import { fontMontserrat } from '../../utils/fontUtils';

const Input = ({
  label = '',
  placeholder = '',
  error = '',
  value,
  onChangeText,
  onFocus,
  containerStyle,
  inputStyle,
  onPress,
  onSubmitEditing,
  showPassword = false,
  keyboardType = 'default',
  onEyePress,
  ref
}: any) => {
  return (
    <View style={[localStyles.container, containerStyle]}>
      {label && <Text style={localStyles.labelText}>{label}</Text>}
      <View style={{width: '100%'}}>
        {placeholder === 'Enter Phone Number' ? (
          <Pressable
            onPress={() => (onEyePress ? onEyePress() : () => {})}
            style={{position: 'absolute', top: scale(15), left: scale(15)}}>
            <Text style={{fontSize: scale(15),color: '#3c3c3c', fontWeight: '500'}}>+91</Text>
          </Pressable>
        ) : (
          <></>
        )}
        <TextInput
          ref={ref}
          placeholder={placeholder}
          style={[localStyles.inputStyle, inputStyle]}
          value={value}
          placeholderTextColor={'gray'}
          onChangeText={val => onChangeText(val)}
          onFocus={onFocus}
          secureTextEntry={label === 'Password' ? !showPassword : false}
          onPress={onPress ? onPress : () => {}}
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing ? onSubmitEditing : () => {}}
        />
        {label === 'Password' &&
          (showPassword ? (
            <Pressable
              onPress={() => (onEyePress ? onEyePress() : () => {})}
              style={{position: 'absolute', top: scale(10), right: scale(10)}}>
              <IconComponent
                iconType="MaterialCommunityIcons"
                iconName={'eye-outline'}
                size={25}
                color={'#042b5b'}
              />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => (onEyePress ? onEyePress() : () => {})}
              style={{position: 'absolute', top: scale(10), right: scale(10)}}>
              <IconComponent
                iconType="MaterialCommunityIcons"
                iconName={'eye-off-outline'}
                size={25}
                color={'#042b5b'}
              />
            </Pressable>
          ))}
      </View>
      {error && (
        <Text
          style={{color: 'red', marginLeft: scale(10), fontSize: scale(12)}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    // backgroundColor: '#042b5b',
    width: '100%',
    // height: 40,
    borderRadius: scale(15),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: scale(10),
  },
  labelText: {
    fontSize: scale(15),
    color: '#3c3c3c',
    marginBottom: scale(10),
    fontFamily: 'Montserrat-Regular'
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    borderRadius: scale(15),
    paddingHorizontal: scale(20),
    paddingLeft: scale(20),
    fontFamily: 'Montserrat-Regular',
    fontSize: scale(15),
    color: 'gray',
  },
});

export default Input;
