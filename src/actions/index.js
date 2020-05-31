import _ from 'lodash';
import genApiRequest from '../apis/loopback';


import {
  LOGIN,
  GET_CHANNEL,
  GETCOMMENT
} from './Types';


export const login = (method, path, data) => async dispatch => {
  const response = await genApiRequest(method, path, data)
  dispatch( { type: LOGIN, payload: response.data.id });
};

export const get_channel = (path, data) => async dispatch => {
  const response = await genApiRequest('get', path, data);

  dispatch({ type: GET_CHANNEL, payload: response.data });
};

export const get_comment = (path, filter_params) => async dispatch => {
  const response = await genApiRequest('get', path, filter_params)
 
  dispatch({ type: GETCOMMENT, payload: response.data });
}

