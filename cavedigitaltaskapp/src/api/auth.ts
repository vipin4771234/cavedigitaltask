import {baseUrl} from './baseUrl';
import axios from 'axios';

export async function check(params: any): Promise<any> {
  // console.log(params);
  let req = {
    body: {
      name: params?.name,
      phone: params?.phone,
      userId: params?.userId,
    },
  };
  return await axios.get(`${baseUrl}`).then(res => {
    console.log(res);
    //   const data = res.data;
    // console.log(data);
    // console.log(data.statusCode);
    //   if (data) {
    //     // return data;
    //   } else {
    //     return data;
    //   }
  });
}

export async function loginApi(params: any): Promise<any> {
  // console.log(params);
  let req = {
    email: params?.email,
    password: params?.password,
  };
  return await axios
    .post(`${baseUrl}/user/signin`, req)
    .then(res => {
      console.log({res});
      const data = res.data;
      // console.log(data);
      // console.log(data.statusCode);
      if (data) {
        return data;
      } else {
        return data;
      }
    })
    .catch(error => {
      console.log({error});
    });
}
export async function signUp(params: any): Promise<any> {
  // console.log(params);
  let req = {
    name: params?.name,
    email: params?.email,
    password: params?.password,
  };
  return await axios
    .post(`${baseUrl}/user/signup`, req)
    .then(res => {
      console.log({res});
      const data = res.data;
      // console.log(data);
      // console.log(data.statusCode);
      if (data) {
        return data;
      } else {
        return data;
      }
    })
    .catch(error => {
      console.log({error});
    });
}
