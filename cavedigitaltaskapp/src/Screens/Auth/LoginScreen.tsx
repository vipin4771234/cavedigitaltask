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
} from 'react-native';
import React, {useState} from 'react';
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
import {loginApi} from '../../api/auth';
import {login} from '../../store/UserSlice';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({emailError: '', passwordError: ''});
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: -keyboard.height.value / 4}],
  }));

  const validate = () => {
    let valid = true;
    let err = {emailError: '', passwordError: ''};
    console.log({email});
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

    setError({emailError: err.emailError, passwordError: err.passwordError});
    return valid;
  };

  const onSubmit = async () => {
    console.log({email, password});

    if (!validate()) return;
    try {
      setLoading(true);
      const data = await loginApi({
        email: email,
        password: password,
      });
      console.log(data);
      if (data?.user) {
        AsyncStorage.setItem(
          'user',
          JSON.stringify({...data.user, token: data.token}),
        );
        dispatch(login({...data.user, token: data.token}));
        // navigation.navigate('HomeScreen');
      } else {
        ToastAndroid.show('Wrong email or password', ToastAndroid.LONG);
      }
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
            Login to your account
          </Text>
          <View style={{height: '5%'}} />
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
            text={'Login'}
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
              navigation.navigate('SignUpScreen');
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
            Go To SignUp
          </Text>
          <View style={{height: '5%'}} />
        </View>
      </Animated.View>
    </WrapperComponent>
  );
};

export default LoginScreen;

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
