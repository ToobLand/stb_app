import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import content from './Content/reducer';

const AppReducer = combineReducers({
  content,
  loadingBar: loadingBarReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_RESOLVED') return AppReducer({}, action);
  return AppReducer(state, action);
};

export default rootReducer;
