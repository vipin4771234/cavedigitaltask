import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from './components/Header';
import {scale} from '../../utils/mixins';
import Search from './components/Search';
import DividerLine from './components/DividerLine';
import axios from 'axios';
import {fetchAllTasks} from '../../api/tasksApi';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setTasksList} from '../../store/TaskSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state: RootState) => state.tasks.tasks);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  console.log('sdfsdf', taskList);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetchAllTasks({});
      console.log(response);
      dispatch(setTasksList(response.task));
    } catch (error) {}
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <View style={{height: scale(10)}} />
        <View style={styles.container}>
          <Search />
          <View style={{height: scale(20)}} />
          <DividerLine text={'Tasks'} />
          {taskList && taskList.length ? (
            <></>
          ) : (
            <View style={{alignItems: 'center', marginTop: scale(20)}}>
              <Text style={{fontFamily: 'Montserrat-Bold', color: '#000'}}>
                No Task Found
              </Text>
              <Text style={{fontFamily: 'Montserrat-Bold', color: '#000'}}>
                Please Add Task
              </Text>
            </View>
          )}
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('TaskDetailScreen')}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'lightgreen',
          paddingVertical: 10,
        }}>
        <Text style={{fontFamily: 'Montserrat-Bold'}}>Add Task</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
  },
  imageContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    position: 'absolute',
    top: 0,
    zIndex: -5,
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
  },
  image: {
    padding: scale(20),
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
  },
});
