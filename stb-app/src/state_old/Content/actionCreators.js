import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getContent = createAction(actionTypes.GET_CONTENT);
export const setContent = createAction(
  actionTypes.SET_CONTENT,
  content => ({ content }),
);