import { combineReducers } from 'redux';
import { DataReducer } from './ReducerData';

export const Reducers = {
    Data: DataReducer
}

export default combineReducers(Reducers)