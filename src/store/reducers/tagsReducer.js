import produce from 'immer';

import {
	TAG_API_REQUEST,
	TAG_API_SUCCESS,
	TAG_API_ERROR,
	SET_ACTUAL_TAG,
	SET_NEW_TAG,
	ADD_TAG_REQUEST,
	ADD_TAG_SUCCESS,
	ADD_TAG_ERROR,
} from '../constants/action-types';

const INITIAL_STATE = {
	fetching: false,
	tags: null,
	error: null,
	actualTag: 'no tag',
	newTag: '',
	addFetching: false,
	addSuccess: null,
	addError: null,
};

export const tagsReducer = produce((draft = INITIAL_STATE, action) => {
	switch (action.type) {
		case TAG_API_REQUEST:
			draft.fetching = true;
			draft.error = null;
			return draft;
		case TAG_API_SUCCESS:
			draft.fetching = false;
			draft.tags = action.tags;
			return draft;
		case TAG_API_ERROR:
			draft.fetching = false;
			draft.tags = null;
			draft.error = action.error;
			return draft;
		case SET_ACTUAL_TAG:
			draft.actualTag = action.payload;
			return draft;
		case SET_NEW_TAG:
			draft.newTag = action.payload;
			return draft;
		case ADD_TAG_REQUEST:
			draft.addFetching = true;
			draft.addError = null;
			draft.addSuccess = null;
			return draft;
		case ADD_TAG_SUCCESS:
			draft.addFetching = false;
			draft.addSuccess = action.message;
			return draft;
		case ADD_TAG_ERROR:
			draft.addFetching = false;
			draft.addError = action.error;
			return draft;
		default:
			return draft;
	}
}, INITIAL_STATE);
