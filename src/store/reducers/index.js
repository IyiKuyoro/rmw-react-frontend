import { combineReducers } from 'redux';

// Reducers
import user from './user';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
