import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
	ADD_PICTURE_REQUEST,
	ADD_PICTURE_SUCCESS,
	ADD_PICTURE_ERROR,
	PICTURE_API_REQUEST,
} from '../constants/action-types';

export default function* watcherSaga() {
	yield takeLatest(ADD_PICTURE_REQUEST, workerSaga);
}

function getOembedContent(payload) {
	return axios.get(
		`https://api.allorigins.win/get?url=${encodeURIComponent(
			`https://www.flickr.com/services/oembed/?format=json&url=http%3A//${payload.pictureToAdd}`
		)}`
	);
}

function postPicture(content) {
	return axios.post(`${process.env.REACT_APP_API_HOST}/pictures`, content);
}

function* workerSaga(action) {
	try {
		const content = yield call(getOembedContent, action.payload);
		const data = JSON.parse(content.data.contents);
		const response = yield call(postPicture, { ...data, tag: '' });
		const message = response.data;
		yield put({ type: ADD_PICTURE_SUCCESS, message });
		yield put({
			type: PICTURE_API_REQUEST,
			payload: { page: action.payload.page },
		});
	} catch (error) {
		yield put({ type: ADD_PICTURE_ERROR, error });
	}
}
