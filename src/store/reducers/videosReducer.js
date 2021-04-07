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

const initialState = {
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

export function videoReducer(state = initialState, action) {
	switch (action.type) {
		case VIDEO_API_REQUEST:
			return { ...state, fetching: true, error: null };
		case VIDEO_API_SUCCESS:
			return { ...state, fetching: false, videos: action.videos };
		case VIDEO_API_ERROR:
			return { ...state, fetching: false, videos: null, error: action.error };
		case ADD_VIDEO_MODAL_SHOW:
			return { ...state, addModalShow: true };
		case ADD_VIDEO_MODAL_CLOSE:
			return { ...state, addModalShow: false };
		case SET_VIDEO_TO_ADD:
			return { ...state, videoToAdd: action.payload };
		case ADD_VIDEO_REQUEST:
			return { ...state, addFetching: true, addSuccess: null, addError: null };
		case ADD_VIDEO_SUCCESS:
			return { ...state, addFetching: false, addSuccess: action.message };
		case ADD_VIDEO_ERROR:
			return { ...state, addFetching: false, addError: action.error };
		case REMOVE_VIDEO_REQUEST:
			return {
				...state,
				removeFetching: true,
				removeSuccess: null,
				removeError: null,
			};
		case REMOVE_VIDEO_SUCCESS:
			return { ...state, removeFetching: false, removeSuccess: action.message };
		case REMOVE_VIDEO_ERROR:
			return { ...state, removeFetching: false, removeError: action.error };
		case EDIT_VIDEO_MODAL_SHOW:
			return { ...state, editModalShow: true };
		case EDIT_VIDEO_MODAL_CLOSE:
			return { ...state, editModalShow: false };
		case SET_VIDEO_TO_EDIT:
			return { ...state, videoToEdit: action.payload };
		case SET_VIDEO_TAG_TO_EDIT:
			return { ...state, videoTagToEdit: action.payload };
		case UPDATE_VIDEO_REQUEST:
			return {
				...state,
				updateFetching: true,
				updateSuccess: null,
				updateError: null,
			};
		case UPDATE_VIDEO_SUCCESS:
			return { ...state, updateFetching: false, updateSuccess: action.message };
		case UPDATE_VIDEO_ERROR:
			return { ...state, updateFetching: false, updateError: action.error };
		default:
			return state;
	}
}
