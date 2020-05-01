import {
    LOGIN,
    GET_CHANNEL
} from '../actions/Types';

export function DataReducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload.data;
    case GET_CHANNEL:
      return action.payload.data;
    default:
      return state;
  }
}