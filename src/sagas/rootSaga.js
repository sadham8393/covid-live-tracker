import { actionWatcher } from './covidTrackerSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}