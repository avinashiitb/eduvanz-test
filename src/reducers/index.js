import { combineReducers } from 'redux';

// import reducers
import userDetails from './userReducer';
import loginActivity from './loginReducer';
import myStoreDetails from './adminStoreReducer';

const allReducers = combineReducers({
  userDetails,
  loginActivity,
  myStoreDetails,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
}

export default rootReducer;
