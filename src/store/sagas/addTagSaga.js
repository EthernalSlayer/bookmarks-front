import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	ADD_TAG_REQUEST,
	ADD_TAG_SUCCESS,
	ADD_TAG_ERROR,
	TAG_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(ADD_TAG_REQUEST, workerSaga);
}

function postTag(payload) {
	return axios.post('http://localhost:4000/tags', payload);
}

function* workerSaga(action) {
	try {
		const response = yield call(postTag, action.payload);
		const message = response.data;
		yield put({ type: ADD_TAG_SUCCESS, message });
		yield put({ type: TAG_API_REQUEST });
	} catch (error) {
		yield put({ type: ADD_TAG_ERROR, error });
	}
}
