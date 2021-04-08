import produce from 'immer';

import {
	VIDEO_API_REQUEST,
	VIDEO_API_SUCCESS,
	VIDEO_API_ERROR,
	ADD_VIDEO_MODAL_SHOW,
	ADD_VIDEO_MODAL_CLOSE,
	SET_VIDEO_TO_ADD,
	ADD_VIDEO_REQUEST,
	ADD_VIDEO_SUCCESS,
	ADD_VIDEO_ERROR,
	REMOVE_VIDEO_REQUEST,
	REMOVE_VIDEO_SUCCESS,
	REMOVE_VIDEO_ERROR,
	EDIT_VIDEO_MODAL_SHOW,
	EDIT_VIDEO_MODAL_CLOSE,
	SET_VIDEO_TO_EDIT,
	SET_VIDEO_TAG_TO_EDIT,
	UPDATE_VIDEO_REQUEST,
	UPDATE_VIDEO_SUCCESS,
	UPDATE_VIDEO_ERROR,
} from '../constants/action-types';

const INITIAL_STATE = {
	fetching: false,
	videos: null,
	error: null,
	addModalShow: false,
	videoToAdd: '',
	addFetching: false,
	addSuccess: null,
	addError: null,
	removeFetching: false,
	removeSuccess: null,
	removeError: null,
	editModalShow: false,
	videoToEdit: '',
	videoTagToEdit: '',
	updateFetching: false,
	updateSuccess: null,
	updateError: null,
};

export const videoReducer = produce((draft = INITIAL_STATE, action) => {
	switch (action.type) {
		case VIDEO_API_REQUEST:
			draft.fetching = true;
			draft.error = null;
			return draft;
		case VIDEO_API_SUCCESS:
			draft.fetching = false;
			draft.videos = action.videos;
			return draft;
		case VIDEO_API_ERROR:
			draft.fetching = false;
			draft.videos = null;
			draft.error = action.error;
			return draft;
		case ADD_VIDEO_MODAL_SHOW:
			draft.addModalShow = true;
			return draft;
		case ADD_VIDEO_MODAL_CLOSE:
			draft.addModalShow = false;
			return draft;
		case SET_VIDEO_TO_ADD:
			draft.videoToAdd = action.payload;
			return draft;
		case ADD_VIDEO_REQUEST:
			draft.addFetching = true;
			draft.addSuccess = null;
			draft.addError = null;
			return draft;
		case ADD_VIDEO_SUCCESS:
			draft.addFetching = false;
			draft.addSuccess = action.message;
			return draft;
		case ADD_VIDEO_ERROR:
			draft.addFetching = false;
			draft.addError = action.error;
			return draft;
		case REMOVE_VIDEO_REQUEST:
			draft.removeFetching = true;
			draft.removeSuccess = null;
			draft.removeError = null;
			return draft;
		case REMOVE_VIDEO_SUCCESS:
			draft.removeFetching = false;
			draft.removeSuccess = action.message;
			return draft;
		case REMOVE_VIDEO_ERROR:
			draft.removeFetching = false;
			draft.removeError = action.error;
			return draft;
		case EDIT_VIDEO_MODAL_SHOW:
			draft.editModalShow = true;
			return draft;
		case EDIT_VIDEO_MODAL_CLOSE:
			draft.editModalShow = false;
			return draft;
		case SET_VIDEO_TO_EDIT:
			draft.videoToEdit = action.payload;
			return draft;
		case SET_VIDEO_TAG_TO_EDIT:
			draft.videoTagToEdit = action.payload;
			return draft;
		case UPDATE_VIDEO_REQUEST:
			draft.updateFetching = true;
			draft.updateSuccess = null;
			draft.updateError = null;
			return draft;
		case UPDATE_VIDEO_SUCCESS:
			draft.updateFetching = false;
			draft.updateSuccess = action.message;
			return draft;
		case UPDATE_VIDEO_ERROR:
			draft.updateFetching = false;
			draft.updateError = action.error;
			return draft;
		default:
			return draft;
	}
}, INITIAL_STATE);
