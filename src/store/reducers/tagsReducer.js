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

const initialState = {
	fetching: false,
	tags: null,
	error: null,
	actualTag: 'no tag',
	newTag: '',
	addFetching: false,
	addSuccess: null,
	addError: null,
};

export function tagsReducer(state = initialState, action) {
	switch (action.type) {
		case TAG_API_REQUEST:
			return { ...state, fetching: true, error: null };
		case TAG_API_SUCCESS:
			return { ...state, fetching: false, tags: action.tags };
		case TAG_API_ERROR:
			return { ...state, fetching: false, tags: null, error: action.error };
		case SET_ACTUAL_TAG:
			return { ...state, actualTag: action.payload };
		case SET_NEW_TAG:
			return { ...state, newTag: action.payload };
		case ADD_TAG_REQUEST:
			return { ...state, addFetching: true, addError: null, addSuccess: null };
		case ADD_TAG_SUCCESS:
			return { ...state, addFetching: false, addSuccess: action.message };
		case ADD_TAG_ERROR:
			return { ...state, addFetching: false, addError: action.error };
		default:
			return state;
	}
}
