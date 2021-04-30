import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	TAG_API_REQUEST,
	TAG_API_SUCCESS,
	TAG_API_ERROR,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(TAG_API_REQUEST, workerSaga);
}

function fetchTags() {
	return axios.get(`${process.env.REACT_APP_API_HOST}/tags`);
}

function* workerSaga() {
	try {
		const response = yield call(fetchTags);
		const tags = response.data;
		yield put({ type: TAG_API_SUCCESS, tags });
	} catch (error) {
		yield put({ type: TAG_API_ERROR, error });
	}
}
