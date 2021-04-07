import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	UPDATE_VIDEO_REQUEST,
	UPDATE_VIDEO_SUCCESS,
	UPDATE_VIDEO_ERROR,
	VIDEO_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(UPDATE_VIDEO_REQUEST, workerSaga);
}

function updateVideo(payload) {
	return axios.put(`http://localhost:4000/videos/${payload.video}`, {
		tag: payload.tag,
	});
}

function* workerSaga(action) {
	try {
		const response = yield call(updateVideo, action.payload);
		const message = response.data;
		yield put({ type: UPDATE_VIDEO_SUCCESS, message });
		yield put({
			type: VIDEO_API_REQUEST,
			payload: { page: action.payload.page },
		});
	} catch (error) {
		yield put({ type: UPDATE_VIDEO_ERROR, error });
	}
}
