import { all } from 'redux-saga/effects';

import auth from './auth/reducer';

export default function* rootSga() {
  return yield all([auth]);
}
