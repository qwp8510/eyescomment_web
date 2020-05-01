import _ from 'lodash';

import {
  LOGIN,
  GET_CHANNEL
} from './Types';


export const login = () => {
  return {
    type: LOGIN
  };
};

export const get_channel = () => {
  return {
    type: GET_CHANNEL
  }
}