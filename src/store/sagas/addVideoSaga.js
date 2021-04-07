import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	ADD_VIDEO_REQUEST,
	ADD_VIDEO_SUCCESS,
	ADD_VIDEO_ERROR,
	VIDEO_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(ADD_VIDEO_REQUEST, workerSaga);
}

function getOembedContent(payload) {
	return axios.get(
		`https://vimeo.com/api/oembed.json?url=${payload.videoToAdd}`
	);
}

function postVideo(content) {
	return axios.post('http://localhost:4000/videos', content);
}

function* workerSaga(action) {
	try {
		const content = yield call(getOembedContent, action.payload);
		const data = content.data;
		const response = yield call(postVideo, { ...data, tag: '' });
		const message = response.data;
		yield put({ type: ADD_VIDEO_SUCCESS, message });
		yield put({
			type: VIDEO_API_REQUEST,
			payload: { page: action.payload.page },
		});
	} catch (error) {
		yield put({ type: ADD_VIDEO_ERROR, error });
	}
}
