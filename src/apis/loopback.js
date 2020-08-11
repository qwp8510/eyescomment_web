import axios from 'axios';


export default async function genApiRequest(method, path, data, token, filterParams) {
  let request;
  switch (method) {
    case 'get':
    case 'GET':
      console.log('data', data);
      request = axios.get(path, {params: data});
      break;
    case 'post':
    case 'POST':
      request = axios.post(path, data);
      break;
    case 'login':
    case 'LOGIN':
      const loginUrl = path + 'Users/login';
      request = axios.post(loginUrl, data=data);
      break;
  }
  return request
};
