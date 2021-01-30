import genApiRequest from '../../apis/loopback';
import config from './config.json';
import store from '../../store';


const VideoList = (channelId) => {
  let params = {filter: {"where": {"channelId": `${channelId}`}}};

  const renderedList = async () => {
    const state = store.getState();
    params.access_token = state.data.action.payload
    return genApiRequest('get', config.PORTAL_SERVER+'Youtube_videos', params);
  }
  return renderedList()
}

export default VideoList;
