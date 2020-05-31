import { combineReducers } from 'redux';
import { DataReducer, ApiHandler } from './ReducerData';

export const Reducers = {
    data: DataReducer,
    api: ApiHandler
}

export default combineReducers(Reducers)