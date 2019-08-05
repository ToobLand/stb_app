import { put, call, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as actionTypes from './actionTypes';
import * as actions from './actionCreators';
//import { content as contentAPI } from '../../api';

export function* getContentSaga() {
  try {
    yield put(showLoading());
    const content = yield call(contentAPI.getContent);
    yield put(actions.setContent(content));
  } catch (error) {
    console.error('Error on get content saga: ', error);
  } finally {
    yield put(hideLoading());
  }
}

export function* watchGetContentSaga() {
  yield takeLatest(actionTypes.GET_CONTENT, getContentSaga);
}
