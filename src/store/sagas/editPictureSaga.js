import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	UPDATE_PICTURE_REQUEST,
	UPDATE_PICTURE_SUCCESS,
	UPDATE_PICTURE_ERROR,
	PICTURE_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(UPDATE_PICTURE_REQUEST, workerSaga);
}

function updatePicture(payload) {
	return axios.put(
		`${process.env.REACT_APP_API_HOST}/pictures/${payload.picture}`,
		{
			tag: payload.tag,
		}
	);
}

function* workerSaga(action) {
	try {
		const response = yield call(updatePicture, action.payload);
		const message = response.data;
		yield put({ type: UPDATE_PICTURE_SUCCESS, message });
		yield put({
			type: PICTURE_API_REQUEST,
			payload: { page: action.payload.page },
		});
	} catch (error) {
		yield put({ type: UPDATE_PICTURE_ERROR, error });
	}
}
