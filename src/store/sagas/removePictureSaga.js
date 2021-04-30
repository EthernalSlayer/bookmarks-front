import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	REMOVE_PICTURE_REQUEST,
	REMOVE_PICTURE_SUCCESS,
	REMOVE_PICTURE_ERROR,
	PICTURE_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(REMOVE_PICTURE_REQUEST, workerSaga);
}

function deletePicture(payload) {
	return axios.delete(
		`${process.env.REACT_APP_API_HOST}/pictures/${payload.pictureToRemove}`
	);
}

function* workerSaga(action) {
	try {
		const response = yield call(deletePicture, action.payload);
		const message = response.data;
		yield put({ type: REMOVE_PICTURE_SUCCESS, message });
		yield put({
			type: PICTURE_API_REQUEST,
			payload: { page: action.payload.page },
		});
	} catch (error) {
		yield put({ type: REMOVE_PICTURE_ERROR, error });
	}
}
