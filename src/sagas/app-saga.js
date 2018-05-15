import { put, all, takeEvery } from 'redux-saga/effects';

import { types as divaTypes } from '../diva-react/reducers/diva-reducer';
import { actions as sessionActions } from '../reducers/session-reducer';

export function* onDivaSessionCompleted() {
  yield put(sessionActions.getSessionData());
}

function* sagas() {
  yield all([
    takeEvery(divaTypes.SESSION_COMPLETED, onDivaSessionCompleted),
  ]);
}

export default sagas;
