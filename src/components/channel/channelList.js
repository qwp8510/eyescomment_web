import genApiRequest from '../../actions/apiRequest';
// import { configContent } from '../../utils/HandleConfig';
import config from './config.json';

const ChannelList = () => {
  var params = {
    username: config.API_USERNAME,
    password: config.API_PASSWORD
  };

  async function login() {
    const request = genApiRequest('login', config.PORTAL_SERVER, params)
    await request.then((token) => {
      params.access_token = token.data.id;
    });
  }

  const renderedList = async () => {
    await login()
    return genApiRequest('get', config.PORTAL_SERVER+'Youtube_channels', params);
  }
  return renderedList()
}

export default ChannelList;