import { combineReducers } from 'redux';
import { DataReducer, ApiHandler } from './ReducerData';

export const Reducers = {
    Data: DataReducer,
    api: ApiHandler
}

export default combineReducers(Reducers)