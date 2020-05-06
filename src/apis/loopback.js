import _ from 'lodash';
import axios from 'axios';

export default async function genApiRequest(method, path, data=null) {
  let request;
  switch (method) {
    case 'get':
    case 'GET':
      const url = path + '?' + `access_token=${data.access_token}`;
      request = axios.get(url);
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
