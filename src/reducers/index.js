import { combineReducers } from 'redux';

// import reducers
import users from './userReducer';
import loader from './loaderReducer';

const allReducers = combineReducers({
  users,
  loader,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
}

export default rootReducer;
