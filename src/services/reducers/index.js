import { combineReducers } from 'redux';
import covid from './covid';

const reducers = combineReducers({
	covid: covid
});

export default reducers;