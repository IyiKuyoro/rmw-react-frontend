import { combineReducers } from 'redux';

// Reducers
import auth from './auth';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  auth,
  dashboard,
});

export default rootReducer;
