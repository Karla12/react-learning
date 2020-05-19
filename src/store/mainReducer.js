import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form';
import reducers from '../services/reducers';

export const mainReducer = combineReducers({
  reducers,
  form: formReducer
});

export default mainReducer;