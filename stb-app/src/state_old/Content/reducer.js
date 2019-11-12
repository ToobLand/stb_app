import { handleActions } from 'redux-actions';
import initialState from './initialState';
import * as authActions from './actionCreators';

const main = handleActions(
  {
    [authActions.setContent]: (state, { payload: { content } }) => ({
      ...state,
      contentItems: content,
    })
    
  },
  initialState,
);

export default main;