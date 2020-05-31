import _ from 'lodash';
import axios from 'axios';


export default async function genApiRequest(method, path, data, token, filterParams) {
  let request;
  switch (method) {
    case 'get':
    case 'GET':
      request = axios.get(path, {params: data});
      break;
    case 'post':
    case 'POST':
      request = axios.post(path, data)
    case 'login':
    case 'LOGIN':
      const loginUrl = path + 'Users/login';
      request = axios.post(loginUrl, data=data);
  }
  return request
};
