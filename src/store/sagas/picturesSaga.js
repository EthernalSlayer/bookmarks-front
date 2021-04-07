import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	PICTURE_API_REQUEST,
	PICTURE_API_SUCCESS,
	PICTURE_API_ERROR,
} from '../constants/action-types';
import { limit } from '../constants/config';

export default function* watcherSaga() {
	yield takeLatest(PICTURE_API_REQUEST, workerSaga);
}

function fetchPictures(payload) {
	if (payload.tag) {
		return axios.get(
			`http://localhost:4000/pictures?tag=${payload.tag}&page=${payload.page}&limit=${limit}`
		);
	}
	return axios.get(
		`http://localhost:4000/pictures?page=${payload.page}&limit=${limit}`
	);
}

function* workerSaga(action) {
	try {
		const response = yield call(fetchPictures, action.payload);
		const pictures = response.data;
		yield put({ type: PICTURE_API_SUCCESS, pictures });
	} catch (error) {
		yield put({ type: PICTURE_API_ERROR, error });
	}
}
