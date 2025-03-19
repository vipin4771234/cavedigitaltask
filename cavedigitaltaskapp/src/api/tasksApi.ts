import axios from 'axios';
import {baseUrl} from './baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchAllTasks(params: any): Promise<any> {
  const user = await JSON.parse((await AsyncStorage.getItem('user')) || '');
  console.log({user})
  return await axios
    .get(`${baseUrl}/task/tasks`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then(res => {
      console.log("res",res);
      return res.data;
    })
    .catch(error => {
      console.log({error});
    });
}
