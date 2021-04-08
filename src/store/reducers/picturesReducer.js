import produce from 'immer';

import {
	PICTURE_API_REQUEST,
	PICTURE_API_SUCCESS,
	PICTURE_API_ERROR,
	ADD_PICTURE_MODAL_SHOW,
	ADD_PICTURE_MODAL_CLOSE,
	SET_PICTURE_TO_ADD,
	ADD_PICTURE_REQUEST,
	ADD_PICTURE_SUCCESS,
	ADD_PICTURE_ERROR,
	REMOVE_PICTURE_REQUEST,
	REMOVE_PICTURE_SUCCESS,
	REMOVE_PICTURE_ERROR,
	EDIT_PICTURE_MODAL_SHOW,
	EDIT_PICTURE_MODAL_CLOSE,
	SET_PICTURE_TO_EDIT,
	SET_PICTURE_TAG_TO_EDIT,
	UPDATE_PICTURE_REQUEST,
	UPDATE_PICTURE_SUCCESS,
	UPDATE_PICTURE_ERROR,
} from '../constants/action-types';

const INITIAL_STATE = {
	fetching: false,
	pictures: null,
	error: null,
	addModalShow: false,
	pictureToAdd: '',
	addFetching: false,
	addSuccess: null,
	addError: null,
	removeFetching: false,
	removeSuccess: null,
	removeError: null,
	editModalShow: false,
	pictureToEdit: null,
	pictureTagToEdit: null,
	updateFetching: false,
	updateSuccess: null,
	updateError: null,
};

export const picturesReducer = produce((draft = INITIAL_STATE, action) => {
	switch (action.type) {
		case PICTURE_API_REQUEST:
			draft.fetching = true;
			draft.error = null;
			return draft;
		case PICTURE_API_SUCCESS:
			draft.fetching = false;
			draft.pictures = action.pictures;
			return draft;
		case PICTURE_API_ERROR:
			draft.fetching = false;
			draft.pictures = null;
			draft.error = action.error;
			return draft;
		case ADD_PICTURE_MODAL_SHOW:
			draft.addModalShow = true;
			return draft;
		case ADD_PICTURE_MODAL_CLOSE:
			draft.addModalShow = false;
			return draft;
		case SET_PICTURE_TO_ADD:
			draft.pictureToAdd = action.payload;
			return draft;
		case ADD_PICTURE_REQUEST:
			draft.addFetching = true;
			draft.addSuccess = null;
			draft.addError = null;
			return draft;
		case ADD_PICTURE_SUCCESS:
			draft.addFetching = false;
			draft.addSuccess = action.message;
			return draft;
		case ADD_PICTURE_ERROR:
			draft.addFetching = false;
			draft.addError = action.error;
			return draft;
		case REMOVE_PICTURE_REQUEST:
			draft.removeFetching = true;
			draft.removeSuccess = null;
			draft.removeError = null;
			return draft;
		case REMOVE_PICTURE_SUCCESS:
			draft.removeFetching = false;
			draft.removeSuccess = action.message;
			return draft;
		case REMOVE_PICTURE_ERROR:
			draft.removeFetching = false;
			draft.removeError = action.error;
			return draft;
		case EDIT_PICTURE_MODAL_SHOW:
			draft.editModalShow = true;
			return draft;
		case EDIT_PICTURE_MODAL_CLOSE:
			draft.editModalShow = false;
			return draft;
		case SET_PICTURE_TO_EDIT:
			draft.pictureToEdit = action.payload;
			return draft;
		case SET_PICTURE_TAG_TO_EDIT:
			draft.pictureTagToEdit = action.payload;
			return draft;
		case UPDATE_PICTURE_REQUEST:
			draft.updateFetching = true;
			draft.updateSuccess = null;
			draft.updateError = null;
			return draft;
		case UPDATE_PICTURE_SUCCESS:
			draft.updateFetching = false;
			draft.updateSuccess = action.message;
			return draft;
		case UPDATE_PICTURE_ERROR:
			draft.updateFetching = false;
			draft.updateError = action.error;
			return draft;
		default:
			return draft;
	}
}, INITIAL_STATE);
