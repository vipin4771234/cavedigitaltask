import {
  View,
  Text,
  Image,
  ToastAndroid,
  Pressable,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Input from '../../component/InputFields/Input';
import CommonButton from '../../component/Buttons/CommonButton';
// import {loginUser} from '../../api/api';
import WrapperComponent from '../../WrapperComponent/WrapperComponent';
import {scale} from '../../utils/mixins';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { signUp } from '../../api/auth';

const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
    nameError: '',
  });
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: -keyboard.height.value / 4}],
  }));

  const validate = () => {
    let valid = true;
    let err = {emailError: '', passwordError: '', nameError: ''};
    console.log({email});
    if (!name) {
      ToastAndroid.show('Enter Your name', ToastAndroid.LONG);
      // setError({...error,phoneError: 'This Field is required'})
      valid = false;
    }
    if (!email) {
      ToastAndroid.show('Enter Your email', ToastAndroid.LONG);
      // setError({...error,phoneError: 'This Field is required'})
      valid = false;
    }
    if (!password) {
      ToastAndroid.show('Enter Your password', ToastAndroid.LONG);
      // setError({...error,phoneError: 'This Field is required'})
      valid = false;
    }

    setError({
      emailError: err.emailError,
      passwordError: err.passwordError,
      nameError: err.nameError,
    });
    return valid;
  };

  const onSubmit = async () => {
    console.log({email, password});

    if (!validate()) return;
    try {
      setLoading(true);
      const data = await signUp({
        name: name,
        email: email,
        password: password,
      });
      console.log(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  console.log('raanarnanr');
  return (
    <WrapperComponent>
      <Animated.View
        style={[
          animatedStyles,
          {
            flex: 1,
            // paddingHorizontal: 20,
            alignItems: 'center',
            // justifyContent: 'flex-end'
          },
        ]}>
        <Image
          source={require('../../assets/images/CaveTask.png')}
          // resizeMode='contain'
          style={{
            width: screenWidth / 2,
            height: screenHeight / 4,
            marginTop: scale(20),
            // borderRadius: 10,
          }}
        />
        <View
          style={{
            flex: 1,
            // paddingHorizontal: 20,
            alignItems: 'flex-start',
            width: '100%',
            paddingHorizontal: scale(20),
          }}>
          <View style={{height: '5%'}} />
          <Text
            style={{
              fontWeight: '500',
              fontSize: scale(18),
              color: '#3c3c3c',
              fontFamily: 'Montserrat-Bold',
              alignSelf: 'center',
            }}>
            Create new account
          </Text>
          <View style={{height: '5%'}} />
          <Input
            value={name}
            label={''}
            leftIcon={''}
            leftText={'Name:'}
            placeholder="Enter your name"
            inputStyle={{paddingLeft: scale(100), height: scale(50)}}
            error={error.nameError}
            onChangeText={(val: any) => setName(val)}
            onFocus={() => setError({...error, nameError: ''})}
          />
          <Input
            value={email}
            label={''}
            leftIcon={''}
            leftText={'Email:'}
            placeholder="Enter your email"
            inputStyle={{paddingLeft: scale(100), height: scale(50)}}
            error={error.emailError}
            onChangeText={(val: any) => setEmail(val)}
            onFocus={() => setError({...error, emailError: ''})}
          />
          <Input
            value={password}
            label={''}
            leftIcon={''}
            leftText={'Password:'}
            placeholder="Enter your password"
            inputStyle={{paddingLeft: scale(100), height: scale(50)}}
            error={error.passwordError}
            onChangeText={(val: any) => setPassword(val)}
            onFocus={() => setError({...error, passwordError: ''})}
          />
          <CommonButton
            text={'SignUp'}
            loading={loading}
            onPress={() => onSubmit()}
          />
          {/* <CommonButton
              text={'SignOut'}
              loading={loading}
              onPress={() => signOut()}
            /> */}
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}></View>
          <Text
            onPress={() => {
              navigation.replace('LoginScreen');
            }}
            style={[
              styles.text,
              {
                fontFamily: 'Montserrat-Bold',
                alignSelf: 'center',
                marginTop: scale(10),
                fontSize: scale(16),
              },
            ]}>
            Go To Login
          </Text>
          {isKeyboardVisible ? (
            <></>
          ) : (
            <Text
              style={[
                styles.text,
                {position: 'absolute', bottom: 20, left: 20},
              ]}>
              By clicking, I accept the{' '}
              <Text style={[styles.text, {fontFamily: 'Montserrat-Bold'}]}>
                Terms and Conditions
              </Text>{' '}
              and{' '}
              <Text style={[styles.text, {fontFamily: 'Montserrat-Bold'}]}>
                Privacy Policy
              </Text>
            </Text>
          )}
          <View style={{height: '5%'}} />
        </View>
      </Animated.View>
    </WrapperComponent>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: scale(14),
    color: '#3c3c3c',
    fontFamily: 'Montserrat-Regular',
  },
});
