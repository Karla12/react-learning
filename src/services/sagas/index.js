import { all } from 'redux-saga/effects';

import covid from "./covid";

export default function* rootSaga(getState) {
    yield all([
    	covid()
    ]);
}