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

export const getChannel = (path, data) => async dispatch => {
  const response = await genApiRequest('get', path, data);

  dispatch({ type: GET_CHANNEL, payload: response.data });
};

export const getComment = (path, filter_params) => async dispatch => {
  const response = await genApiRequest('get', path, filter_params)
 
  dispatch({ type: GETCOMMENT, payload: response.data });
}

