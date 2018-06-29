import {combineReducers} from 'redux';
import {counter} from './index.redux';
import {auth} from './auth.redux';

export default combineReducers({
    auth,
    counter
  })