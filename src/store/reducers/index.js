import { combineReducers } from 'redux';

// Reducers
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
