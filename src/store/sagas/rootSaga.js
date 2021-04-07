import { all } from '@redux-saga/core/effects';
import picturesSaga from './picturesSaga';
import videosSaga from './videosSaga';
import tagsSaga from './tagsSaga';
import addTagSaga from './addTagSaga';
import addVideoSaga from './addVideoSaga';
import removeVideoSaga from './removeVideoSaga';
import editVideoSaga from './editVideoSaga';
import addPictureSaga from './addPictureSaga';
import removePictureSaga from './removePictureSaga';
import editPictureSaga from './editPictureSaga';

export default function* rootSaga() {
	yield all([
		picturesSaga(),
		videosSaga(),
		tagsSaga(),
		addTagSaga(),
		addVideoSaga(),
		removeVideoSaga(),
		editVideoSaga(),
		addPictureSaga(),
		removePictureSaga(),
		editPictureSaga(),
	]);
}
