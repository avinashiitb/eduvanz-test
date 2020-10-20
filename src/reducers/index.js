import { combineReducers } from 'redux';

// import reducers
import users from './userReducer';
import loginActivity from './loginReducer';
import myStoreDetails from './adminStoreReducer';

const allReducers = combineReducers({
  users,
  loginActivity,
  myStoreDetails,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
}

export default rootReducer;
