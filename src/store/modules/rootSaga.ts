import { all } from 'redux-saga/effects';

import employers from './employers/sagas';

export default function* rootSaga() {
  return yield all([employers]);
}
