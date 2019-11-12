import { all, fork } from 'redux-saga/effects';

import { watchGetContent } from './Content/sagas';

export default function* root() {
  yield all([
    fork(watchGetContent)
    
  ]);
}