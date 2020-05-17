import {
    LOGIN,
    GET_CHANNEL,
    GETCOMMENT
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

export function ApiHandler(state=null, action) {
  console.log('action', action)
  switch (action.type) {
    case GETCOMMENT:
      return { ...state, action };
    default:
      return state;
  }
}