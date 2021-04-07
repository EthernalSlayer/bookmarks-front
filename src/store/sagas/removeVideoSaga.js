import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	REMOVE_VIDEO_REQUEST,
	REMOVE_VIDEO_SUCCESS,
	REMOVE_VIDEO_ERROR,
	VIDEO_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(REMOVE_VIDEO_REQUEST, workerSaga);
}

function deleteVideo(payload) {
	return axios.delete(`http://localhost:4000/videos/${payload.videoToRemove}`);
}

function* workerSaga(action) {
	try {
		const response = yield call(deleteVideo, action.payload);
		const message = response.data;
		yield put({ type: REMOVE_VIDEO_SUCCESS, message });
		yield put({
			type: VIDEO_API_REQUEST,
			payload: { page: action.payload.page },
		});
	} catch (error) {
		yield put({ type: REMOVE_VIDEO_ERROR, error });
	}
}
