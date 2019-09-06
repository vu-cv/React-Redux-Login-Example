import { combineReducers } from 'redux';

import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { registration } from './registration.reducer';
import { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
  users,
  alert,
  authentication,
  registration
});

export default rootReducer;