import config from './config.json';
import store from '../../store';
import genApiRequest from '../../apis/loopback';


const ChannelList = () => {
  let params = {};

  const renderedList = async () => {
    const state = store.getState();
    params.access_token = state.data.action.payload
    return genApiRequest('get', config.PORTAL_SERVER+'Youtube_channels', params);
  }
  return renderedList()
}

export default ChannelList;