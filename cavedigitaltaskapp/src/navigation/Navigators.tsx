import {View, Text, Pressable} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Auth/LoginScreen';
// import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {login} from '../store/UserSlice';
import HomeScreen from '../Screens/Home/HomeScreen';
import IconComponent from '../component/Icon/IconComponent';
import { scale } from '../utils/mixins';
import SignUpScreen from '../Screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  const user = useSelector((state: RootState) => state.users.user);
  console.log({user}, "fromselecetor")
  const dispatch = useDispatch();

  // const setRecent = async () => {
  //   const recentSearch = await JSON.parse(await AsyncStorage.getItem('recentSearches') || 'null');
  //   console.log({recentSearch});
  //   if(!recentSearch) return console.log('nullll');
  //   dispatch(setAddSearches(recentSearch));
  // }

  // useEffect(() => {
  //   const init = async () => {
  //     let user = await JSON.parse(
  //       (await AsyncStorage.getItem('user')) || 'null',
  //     );
  //     if (user) {
  //       dispatch(login({name: 'vipin', email: 'mainvipin@gmail.com', ...user}));
  //     }
  //   };

  //   init().then(async () => {
  //     setTimeout(async () => {
  //       // setRecent();
  //       await BootSplash.hide({fade: true});
  //     }, 2000);
  //   });
  // }, []);

  const hide = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log({user})
    if (user) {
      dispatch(login(user));
    }
    // await BootSplash.hide({fade: true});
  };
console.log("navigator")
  useEffect(() => {
    hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {!user ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="SignUpScreen"
              component={SignUpScreen}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeScreen"
            component={HomeScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
