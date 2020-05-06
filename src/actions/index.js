import _ from 'lodash';
import genApiRequest from '../apis/loopback';

import {
  LOGIN,
  GET_CHANNEL
} from './Types';


export const login = () => {
  return {
    type: LOGIN
  };
};

export const get_channel = (path, data) => async dispatch => {
  const response = await genApiRequest('get', path, data);

  dispatch({ type: GET_CHANNEL, payload: response.data });
};