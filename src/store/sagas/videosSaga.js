import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	VIDEO_API_REQUEST,
	VIDEO_API_SUCCESS,
	VIDEO_API_ERROR,
} from '../constants/action-types';
import { limit } from '../constants/config';

export default function* watcherSaga() {
	yield takeLatest(VIDEO_API_REQUEST, workerSaga);
}

function fetchVideos(payload) {
	if (payload.tag) {
		return axios.get(
			`http://localhost:4000/videos?tag=${payload.tag}&page=${payload.page}&limit=${limit}`
		);
	}
	return axios.get(
		`http://localhost:4000/videos?page=${payload.page}&limit=${limit}`
	);
}

function* workerSaga(action) {
	try {
		const response = yield call(fetchVideos, action.payload);
		const videos = response.data;
		yield put({ type: VIDEO_API_SUCCESS, videos });
	} catch (error) {
		yield put({ type: VIDEO_API_ERROR, error });
	}
}
