import genApiRequest from '../../actions/apiRequest';
import config from './config.json';

const VideoList = (channelId) => {
  let params = {filter: {"where":{"channelId": `${channelId}`}}};

  async function login() {
    const loginParams = {
      username: config.API_USERNAME,
      password: config.API_PASSWORD
    };
    const request = genApiRequest('login', config.PORTAL_SERVER, loginParams)
    await request.then((token) => {
      params.access_token = token.data.id;
    });
  }

  const renderedList = async () => {
    await login()
    return genApiRequest('get', config.PORTAL_SERVER+'Youtube_videos', params);
  }
  return renderedList()
}

export default VideoList;
