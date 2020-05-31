import {
    LOGIN,
    GET_CHANNEL,
    GETCOMMENT
} from '../actions/Types';

export function DataReducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, action };
    case GET_CHANNEL:
      return { ...state, action };
    default:
      return state;
  }
}

export function ApiHandler(state=null, action) {
  switch (action.type) {
    case GETCOMMENT:
      return { ...state, action };
    default:
      return state;
  }
}