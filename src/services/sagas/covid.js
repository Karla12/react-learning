import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";

import {
	fetchCovidSuccess,
	fetchCovidFailure
} from '../actions';

import {
	FETCH_COVID
} from '../actions/types';

const instanceAPI = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
  headers: { "Content-type": "application/json" }
});

const fetchCovidRequest = async () =>
    await instanceAPI.get()
        .then(response => response)
        .catch(error => error);

function* fetchCovid() {
    try {
        const fetch = yield call(fetchCovidRequest);
        if (fetch.status === 200) {
            yield put(fetchCovidSuccess(fetch));
        } else {
            yield put(fetchCovidFailure(fetch.status));
        }
    } catch (error) {
        yield put(fetchCovidFailure(error));
    }
}

export function* fetchingCovid() {
    yield takeEvery(FETCH_COVID, fetchCovid);
}

export default function* rootSaga() {
    yield all([
        fork(fetchingCovid)
    ]);
}